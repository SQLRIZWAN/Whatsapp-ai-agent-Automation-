import { GoogleGenerativeAI } from '@google/generative-ai'
import { CONFIG } from '@shared/constants/config'
import logger from '@shared/utils/logger'
import { AppError } from '@shared/utils/errorHandler'
import { ErrorCode } from '@shared/types/common.types'
import configService from '../../config/services/configService'
import axios from 'axios'

/**
 * Gemini model fallback chain (in priority order):
 *  1. gemini-2.5-flash           ← primary (best quality)
 *  2. gemini-2.5-flash-preview-05-20 ← fallback
 *  3. gemini-2.0-flash           ← fallback
 *  4. gemini-2.0-flash-lite      ← fallback (fast & cheap)
 *  5. gemini-1.5-flash-latest    ← last resort
 *
 * Each model is tried in order. If a model returns a 429 (rate limit) or any
 * other error, the next model in the chain is attempted automatically.
 * Only after all models are exhausted is an error thrown.
 */
const GEMINI_FALLBACK_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-preview-05-20',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
  'gemini-1.5-flash-latest',
] as const

type ModelName = typeof GEMINI_FALLBACK_MODELS[number]

type Part = string | { inlineData: { data: string; mimeType: string } }

export type AIProvider = 'gemini' | 'grok' | 'openai'

export interface AIConfig {
  provider: AIProvider
  apiKey?: string
  model?: string
}

function extract429Delay(msg: string): number {
  const m = msg.match(/retry[^0-9]*(\d+(?:\.\d+)?)\s*s/i)
  if (m) return Math.min(parseFloat(m[1]) * 1000, 8000)
  return 0
}

/**
 * Try calling a specific Gemini model once (with one 429-retry if delay is short).
 * Returns null if the model fails so the caller can try the next one.
 */
async function tryGeminiModel(
  genAI: GoogleGenerativeAI,
  modelName: string,
  parts: Part[],
  tag: string
): Promise<{ text: string; model: string } | null> {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const m = genAI.getGenerativeModel({ model: modelName })
      const result = await m.generateContent(parts as never)
      const text = result.response.text().trim()
      if (!text) throw new Error('empty response')
      logger.info(`[ai] ${tag} OK via ${modelName}`)
      return { text, model: modelName }
    } catch (e) {
      const msg = (e as Error).message || String(e)
      const is429 = msg.includes('429')
      const retryDelay = is429 ? extract429Delay(msg) : 0

      if (attempt === 0 && is429 && retryDelay > 0 && retryDelay <= 8000) {
        logger.warn(`[ai] ${tag} 429 on ${modelName} — retrying in ${retryDelay}ms`)
        await new Promise((r) => setTimeout(r, retryDelay))
        continue
      }

      logger.warn(`[ai] ${tag} failed on ${modelName}: ${msg.substring(0, 120)}`)
      return null
    }
  }
  return null
}

/**
 * Call Gemini with automatic fallback across all models in GEMINI_FALLBACK_MODELS.
 * Throws only when every model in the chain has been exhausted.
 */
async function callGeminiWithFallback(
  genAI: GoogleGenerativeAI,
  parts: Part[],
  tag: string
): Promise<{ text: string; model: string }> {
  for (const modelName of GEMINI_FALLBACK_MODELS) {
    const result = await tryGeminiModel(genAI, modelName, parts, tag)
    if (result) return result
    logger.warn(`[ai] ${tag} — falling back from ${modelName}`)
  }
  throw new AppError(
    ErrorCode.INTERNAL_ERROR,
    `AI unavailable (${tag}): all models exhausted [${GEMINI_FALLBACK_MODELS.join(', ')}]`,
    500
  )
}

/**
 * Call Groq API for chat completions
 */
async function callGroqAPI(
  apiKey: string,
  model: string,
  messages: Array<{ role: string; content: string }>,
  tag: string
): Promise<{ text: string; model: string }> {
  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: model || 'llama-3.3-70b-versatile',
        messages,
        temperature: 0.7,
        max_tokens: 2048,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        timeout: 30000,
      }
    )

    const text = response.data.choices?.[0]?.message?.content?.trim()
    if (!text) throw new Error('empty response')
    logger.info(`[ai] ${tag} OK via Groq/${model}`)
    return { text, model }
  } catch (e: any) {
    const msg = e.response?.data?.error?.message || e.message || 'Groq API error'
    logger.warn(`[ai] ${tag} failed on Groq: ${msg.substring(0, 120)}`)
    throw new AppError(ErrorCode.INTERNAL_ERROR, `Groq API error: ${msg}`, 500)
  }
}

/**
 * Call OpenAI API for chat completions
 */
async function callOpenAIAPI(
  apiKey: string,
  model: string,
  messages: Array<{ role: string; content: string }>,
  tag: string
): Promise<{ text: string; model: string }> {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: model || 'gpt-4o-mini',
        messages,
        temperature: 0.7,
        max_tokens: 2048,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        timeout: 30000,
      }
    )

    const text = response.data.choices?.[0]?.message?.content?.trim()
    if (!text) throw new Error('empty response')
    logger.info(`[ai] ${tag} OK via OpenAI/${model}`)
    return { text, model }
  } catch (e: any) {
    const msg = e.response?.data?.error?.message || e.message || 'OpenAI API error'
    logger.warn(`[ai] ${tag} failed on OpenAI: ${msg.substring(0, 120)}`)
    throw new AppError(ErrorCode.INTERNAL_ERROR, `OpenAI API error: ${msg}`, 500)
  }
}

export class AIService {
  private defaultGenAI: GoogleGenerativeAI | null = null

  constructor() {
    if (CONFIG.GEMINI_API_KEY) {
      this.defaultGenAI = new GoogleGenerativeAI(CONFIG.GEMINI_API_KEY)
      logger.info(`[ai] Gemini ready — primary: ${GEMINI_FALLBACK_MODELS[0]}, fallbacks: ${GEMINI_FALLBACK_MODELS.slice(1).join(' → ')}`)
    } else {
      logger.error('[ai] ⚠️ GEMINI_API_KEY missing — AI disabled!')
    }
  }

  private getDefaultClient(): GoogleGenerativeAI {
    if (!this.defaultGenAI) throw new AppError(ErrorCode.INTERNAL_ERROR, 'GEMINI_API_KEY not set', 500)
    return this.defaultGenAI
  }

  /**
   * Get AI configuration for a specific user
   * Returns user's custom API settings if available, otherwise uses backend defaults
   */
  async getAIConfig(uid: string): Promise<AIConfig> {
    try {
      const stored = await configService.getUserAIConfig(uid)
      if (stored?.apiKey) {
        return {
          provider: stored.provider as AIProvider,
          apiKey: stored.apiKey,
          model: stored.model || undefined,
        }
      }
    } catch (e) {
      logger.warn('[ai] Could not fetch user AI config, using defaults')
    }

    // Return backend default if no user config
    return {
      provider: 'gemini',
      apiKey: CONFIG.GEMINI_API_KEY,
    }
  }

  async generateResponse(
    prompt: string,
    userMessage: string,
    systemPrompt?: string,
    uid?: string
  ): Promise<{ text: string; tokensUsed: number; model: string }> {
    const fullPrompt = systemPrompt
      ? `${systemPrompt}\n\nUser Message: ${userMessage}`
      : userMessage

    // Try to use user-specific config
    if (uid) {
      try {
        const aiConfig = await this.getAIConfig(uid)

        if (aiConfig.provider === 'grok' && aiConfig.apiKey) {
          const result = await callGroqAPI(
            aiConfig.apiKey,
            aiConfig.model || 'llama-3.3-70b-versatile',
            [{ role: 'system', content: systemPrompt || 'You are a helpful AI assistant.' }, { role: 'user', content: userMessage }],
            'text'
          )
          return { text: result.text, tokensUsed: 0, model: result.model }
        }

        if (aiConfig.provider === 'openai' && aiConfig.apiKey) {
          const result = await callOpenAIAPI(
            aiConfig.apiKey,
            aiConfig.model || 'gpt-4o-mini',
            [{ role: 'system', content: systemPrompt || 'You are a helpful AI assistant.' }, { role: 'user', content: userMessage }],
            'text'
          )
          return { text: result.text, tokensUsed: 0, model: result.model }
        }

        if (aiConfig.provider === 'gemini' && aiConfig.apiKey) {
          const userGenAI = new GoogleGenerativeAI(aiConfig.apiKey)
          const result = await callGeminiWithFallback(
            userGenAI,
            [fullPrompt],
            'text'
          )
          return { text: result.text, tokensUsed: 0, model: result.model }
        }

        // If user chose Gemini but no API key, fall back to backend
        if (aiConfig.provider === 'gemini' && !aiConfig.apiKey) {
          logger.info('[ai] User chose Gemini with no API key, using backend Gemini')
        }
      } catch (e) {
        logger.warn('[ai] User AI config failed, falling back to backend:', e)
      }
    }

    // Fall back to backend Gemini
    const { text, model } = await callGeminiWithFallback(this.getDefaultClient(), [fullPrompt], 'text')
    return { text, tokensUsed: 0, model }
  }

  async analyzeImage(
    imageData: string,
    prompt: string,
    systemPrompt?: string,
    mimeType = 'image/jpeg',
    uid?: string
  ): Promise<{ text: string; tokensUsed: number; model: string }> {
    const fullPrompt = systemPrompt ? `${systemPrompt}\n\n${prompt}` : prompt
    const base = mimeType.split(';')[0].trim()
    const safeMime = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(base)
      ? base : 'image/jpeg'

    // Only Gemini supports vision, so always use it
    const { text, model } = await callGeminiWithFallback(
      this.getDefaultClient(),
      [{ inlineData: { data: imageData, mimeType: safeMime } }, fullPrompt],
      'image'
    )
    return { text, tokensUsed: 0, model }
  }

  async analyzeVideo(
    videoData: string,
    caption: string,
    systemPrompt?: string,
    mimeType = 'video/mp4'
  ): Promise<{ text: string; model: string }> {
    const base = mimeType.split(';')[0].trim()
    const safeMime = ['video/mp4', 'video/mpeg', 'video/webm', 'video/quicktime', 'video/3gpp'].includes(base)
      ? base : 'video/mp4'
    const instruction = (systemPrompt ? `${systemPrompt}\n\n` : '') +
      `User sent a video${caption ? ` with caption: "${caption}"` : ''}. Describe what you see and reply in Hinglish.`
    return callGeminiWithFallback(
      this.getDefaultClient(),
      [{ inlineData: { data: videoData, mimeType: safeMime } }, instruction],
      'video'
    )
  }

  async generateFromAudio(
    audioBase64: string,
    systemPrompt: string,
    uid?: string
  ): Promise<{ text: string; model: string }> {
    // Only Gemini supports audio input
    const instruction = systemPrompt +
      '\n\nUser sent a voice message (MP3). Understand it and reply in short natural Hinglish. No transcription labels.'
    return callGeminiWithFallback(
      this.getDefaultClient(),
      [{ inlineData: { data: audioBase64, mimeType: 'audio/mp3' } }, instruction],
      'audio'
    )
  }

  async makeDecision(
    context: string,
    systemPrompt: string
  ): Promise<{ decision: string; model: string }> {
    const { text, model } = await callGeminiWithFallback(
      this.getDefaultClient(),
      [`${systemPrompt}\n\nContext: ${context}\n\nMake a decision.`],
      'decision'
    )
    return { decision: text, model }
  }

  async generateImage(prompt: string): Promise<{ data: string; mimeType: string } | null> {
    if (!this.defaultGenAI) return null
    const IMAGE_MODELS = [
      'gemini-2.0-flash-preview-image-generation',
      'gemini-2.0-flash-exp-image-generation',
    ]
    for (const modelName of IMAGE_MODELS) {
      try {
        const model = this.defaultGenAI.getGenerativeModel({ model: modelName } as never)
        const result = await (model as any).generateContent({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { responseModalities: ['IMAGE', 'TEXT'] },
        })
        for (const part of result.response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData?.data) {
            logger.info(`[ai] image generated via ${modelName}`)
            return { data: part.inlineData.data, mimeType: part.inlineData.mimeType || 'image/jpeg' }
          }
        }
        logger.warn(`[ai] ${modelName} returned no image data`)
      } catch (e) {
        logger.warn(`[ai] image gen failed on ${modelName}: ${(e as Error).message.substring(0, 120)}`)
      }
    }
    logger.error('[ai] all image generation models failed')
    return null
  }

  /** Returns the full model list for diagnostics/test-ai endpoint */
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
