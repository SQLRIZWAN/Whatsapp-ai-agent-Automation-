import { CONFIG } from '@shared/constants/config'
import logger from '@shared/utils/logger'
import { AppError } from '@shared/utils/errorHandler'
import { ErrorCode } from '@shared/types/common.types'
import configService from '../../config/services/configService'
import axios from 'axios'

const GEMINI_BASE = 'https://generativelanguage.googleapis.com/v1beta/models'

const GEMINI_FALLBACK_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-preview-05-20',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
  'gemini-1.5-flash-latest',
] as const

export type AIProvider = 'gemini' | 'grok' | 'openai'

export interface AIConfig {
  provider: AIProvider
  apiKey?: string
  model?: string
}

type GeminiPart =
  | { text: string }
  | { inlineData: { data: string; mimeType: string } }

/**
 * Core Gemini REST caller — tries each model in the fallback chain.
 * Uses v1beta REST API directly (no SDK dependency).
 * Throws only when every model is exhausted.
 */
// Working-model cache: once a model returns OK we try it first on subsequent calls.
// Reset whenever it fails so we don't get stuck on a model that just stopped working.
let preferredModel: string | null = null

const PER_MODEL_TIMEOUT_MS = 8000

async function callGeminiREST(
  apiKey: string,
  parts: GeminiPart[],
  tag: string,
  systemInstruction?: string
): Promise<{ text: string; model: string }> {
  let lastError = ''

  // Try the cached working model first, then the rest (skipping it).
  const modelOrder: string[] = preferredModel
    ? [preferredModel, ...GEMINI_FALLBACK_MODELS.filter((m) => m !== preferredModel)]
    : [...GEMINI_FALLBACK_MODELS]

  for (const modelName of modelOrder) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const body: Record<string, unknown> = {
          contents: [{ role: 'user', parts }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 2048 },
        }
        if (systemInstruction) {
          body.systemInstruction = { parts: [{ text: systemInstruction }] }
        }

        const res = await axios.post(
          `${GEMINI_BASE}/${modelName}:generateContent?key=${apiKey}`,
          body,
          { timeout: PER_MODEL_TIMEOUT_MS, headers: { 'Content-Type': 'application/json' } }
        )

        const text: string =
          res.data?.candidates?.[0]?.content?.parts
            ?.map((p: any) => p.text || '')
            .join('')
            .trim() || ''

        if (!text) {
          const finishReason = res.data?.candidates?.[0]?.finishReason || 'UNKNOWN'
          throw new Error(`empty response (finishReason: ${finishReason})`)
        }

        preferredModel = modelName
        logger.info(`[ai] ${tag} OK via ${modelName}`)
        return { text, model: modelName }
      } catch (e: any) {
        const status = e.response?.status
        const msg: string =
          e.response?.data?.error?.message || e.message || 'unknown'
        lastError = `${modelName}: [${status || 'ERR'}] ${msg.substring(0, 120)}`
        logger.warn(`[ai] ${tag} failed — ${lastError}`)

        if (preferredModel === modelName) preferredModel = null

        if (status === 429) {
          const retryMs = (() => {
            const m = msg.match(/retry[^0-9]*(\d+(?:\.\d+)?)\s*s/i)
            return m ? Math.min(parseFloat(m[1]) * 1000, 4000) : 1500
          })()
          if (attempt === 0 && retryMs <= 4000) {
            logger.info(`[ai] ${tag} 429 — waiting ${retryMs}ms before retry`)
            await new Promise((r) => setTimeout(r, retryMs))
            continue
          }
        }
        break
      }
    }
    logger.warn(`[ai] ${tag} — moving to next model after ${modelName}`)
  }

  throw new AppError(
    ErrorCode.INTERNAL_ERROR,
    `AI unavailable (${tag}): ${lastError}`,
    500
  )
}

async function callGroqAPI(
  apiKey: string,
  model: string,
  messages: Array<{ role: string; content: string }>,
  tag: string
): Promise<{ text: string; model: string }> {
  const response = await axios.post(
    'https://api.groq.com/openai/v1/chat/completions',
    { model: model || 'llama-3.3-70b-versatile', messages, temperature: 0.7, max_tokens: 2048 },
    { headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' }, timeout: 30000 }
  )
  const text = response.data.choices?.[0]?.message?.content?.trim()
  if (!text) throw new Error('empty response')
  logger.info(`[ai] ${tag} OK via Groq/${model}`)
  return { text, model }
}

async function callOpenAIAPI(
  apiKey: string,
  model: string,
  messages: Array<{ role: string; content: string }>,
  tag: string
): Promise<{ text: string; model: string }> {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    { model: model || 'gpt-4o-mini', messages, temperature: 0.7, max_tokens: 2048 },
    { headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' }, timeout: 30000 }
  )
  const text = response.data.choices?.[0]?.message?.content?.trim()
  if (!text) throw new Error('empty response')
  logger.info(`[ai] ${tag} OK via OpenAI/${model}`)
  return { text, model }
}

export class AIService {
  private apiKey: string

  constructor() {
    this.apiKey = CONFIG.GEMINI_API_KEY || ''
    if (this.apiKey) {
      logger.info(`[ai] Gemini REST ready — chain: ${GEMINI_FALLBACK_MODELS.join(' → ')}`)
    } else {
      logger.error('[ai] GEMINI_API_KEY missing — AI will be disabled!')
    }
  }

  private getApiKey(): string {
    if (!this.apiKey) throw new AppError(ErrorCode.INTERNAL_ERROR, 'GEMINI_API_KEY not configured', 500)
    return this.apiKey
  }

  isReady(): boolean {
    return !!this.apiKey
  }

  async getAIConfig(uid: string): Promise<AIConfig> {
    try {
      const stored = await configService.getUserAIConfig(uid)
      if (stored?.apiKey) {
        return { provider: stored.provider as AIProvider, apiKey: stored.apiKey, model: stored.model || undefined }
      }
    } catch {
      logger.warn('[ai] Could not fetch user AI config, using defaults')
    }
    return { provider: 'gemini', apiKey: this.apiKey }
  }

  async generateResponse(
    prompt: string,
    userMessage: string,
    systemPrompt?: string,
    uid?: string
  ): Promise<{ text: string; tokensUsed: number; model: string }> {
    if (uid) {
      try {
        const cfg = await this.getAIConfig(uid)
        if (cfg.provider === 'grok' && cfg.apiKey) {
          const msgs = [
            { role: 'system', content: systemPrompt || 'You are a helpful AI assistant.' },
            { role: 'user', content: userMessage },
          ]
          const r = await callGroqAPI(cfg.apiKey, cfg.model || 'llama-3.3-70b-versatile', msgs, 'text')
          return { text: r.text, tokensUsed: 0, model: r.model }
        }
        if (cfg.provider === 'openai' && cfg.apiKey) {
          const msgs = [
            { role: 'system', content: systemPrompt || 'You are a helpful AI assistant.' },
            { role: 'user', content: userMessage },
          ]
          const r = await callOpenAIAPI(cfg.apiKey, cfg.model || 'gpt-4o-mini', msgs, 'text')
          return { text: r.text, tokensUsed: 0, model: r.model }
        }
        if (cfg.provider === 'gemini' && cfg.apiKey && cfg.apiKey !== this.apiKey) {
          const r = await callGeminiREST(cfg.apiKey, [{ text: userMessage }], 'text', systemPrompt)
          return { text: r.text, tokensUsed: 0, model: r.model }
        }
      } catch (e) {
        logger.warn('[ai] User config failed, using backend key:', (e as Error).message)
      }
    }

    const r = await callGeminiREST(this.getApiKey(), [{ text: userMessage }], 'text', systemPrompt)
    return { text: r.text, tokensUsed: 0, model: r.model }
  }

  async analyzeImage(
    imageData: string,
    prompt: string,
    systemPrompt?: string,
    mimeType = 'image/jpeg'
  ): Promise<{ text: string; tokensUsed: number; model: string }> {
    const safeMime = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(
      mimeType.split(';')[0].trim()
    )
      ? mimeType.split(';')[0].trim()
      : 'image/jpeg'

    const parts: GeminiPart[] = [
      { inlineData: { data: imageData, mimeType: safeMime } },
      { text: prompt },
    ]
    const r = await callGeminiREST(this.getApiKey(), parts, 'image', systemPrompt)
    return { text: r.text, tokensUsed: 0, model: r.model }
  }

  async generateFromAudio(
    audioBase64: string,
    systemPrompt: string,
    uid?: string
  ): Promise<{ text: string; model: string }> {
    const parts: GeminiPart[] = [
      { inlineData: { data: audioBase64, mimeType: 'audio/mp3' } },
      { text: 'User ne ek voice message bheja hai. Usse samjho aur short natural Hinglish mein reply karo. No transcription labels.' },
    ]
    return callGeminiREST(this.getApiKey(), parts, 'audio', systemPrompt)
  }

  async analyzeVideo(
    videoData: string,
    caption: string,
    systemPrompt?: string,
    mimeType = 'video/mp4'
  ): Promise<{ text: string; model: string }> {
    const safeMime = ['video/mp4', 'video/mpeg', 'video/webm', 'video/quicktime', 'video/3gpp'].includes(
      mimeType.split(';')[0].trim()
    )
      ? mimeType.split(';')[0].trim()
      : 'video/mp4'

    const instruction = `User ne ek video bheja hai${caption ? ` with caption: "${caption}"` : ''}. Describe karo aur Hinglish mein reply karo.`
    const parts: GeminiPart[] = [
      { inlineData: { data: videoData, mimeType: safeMime } },
      { text: instruction },
    ]
    return callGeminiREST(this.getApiKey(), parts, 'video', systemPrompt)
  }

  async makeDecision(context: string, systemPrompt: string): Promise<{ decision: string; model: string }> {
    const r = await callGeminiREST(
      this.getApiKey(),
      [{ text: `Context: ${context}\n\nMake a decision.` }],
      'decision',
      systemPrompt
    )
    return { decision: r.text, model: r.model }
  }

  async generateImage(prompt: string): Promise<{ data: string; mimeType: string } | null> {
    const apiKey = this.apiKey
    if (!apiKey) return null

    const IMAGE_MODELS = [
      'gemini-2.0-flash-preview-image-generation',
      'gemini-2.0-flash-exp-image-generation',
    ]

    for (const modelName of IMAGE_MODELS) {
      try {
        logger.info(`[ai] image gen via REST: ${modelName}`)
        const res = await axios.post(
          `${GEMINI_BASE}/${modelName}:generateContent?key=${apiKey}`,
          {
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: { responseModalities: ['IMAGE', 'TEXT'] },
          },
          { timeout: 45000, headers: { 'Content-Type': 'application/json' } }
        )
        for (const part of res.data?.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData?.data) {
            logger.info(`[ai] image generated via ${modelName}`)
            return { data: part.inlineData.data, mimeType: part.inlineData.mimeType || 'image/png' }
          }
        }
        logger.warn(`[ai] ${modelName} returned no image data`)
      } catch (e: any) {
        const msg = e.response?.data?.error?.message || e.message || 'unknown'
        logger.warn(`[ai] image gen failed on ${modelName}: ${msg.substring(0, 160)}`)
      }
    }
    logger.error('[ai] all image generation models failed')
    return null
  }

  getAvailableModels() {
    return {
      gemini: [...GEMINI_FALLBACK_MODELS],
      grok: ['grok-beta'],
      openai: ['gpt-4o', 'gpt-4o-mini', 'gpt-4-turbo', 'gpt-3.5-turbo'],
      fallbackChain: GEMINI_FALLBACK_MODELS.join(' → '),
    }
  }
}

export default new AIService()
