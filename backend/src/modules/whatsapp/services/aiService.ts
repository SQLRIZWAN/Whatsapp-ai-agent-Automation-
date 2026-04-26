import { GoogleGenerativeAI } from '@google/generative-ai'
import { CONFIG } from '@shared/constants/config'
import logger from '@shared/utils/logger'
import { AppError } from '@shared/utils/errorHandler'
import { ErrorCode } from '@shared/types/common.types'

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
const FALLBACK_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-preview-05-20',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
  'gemini-1.5-flash-latest',
] as const

type ModelName = typeof FALLBACK_MODELS[number]

type Part = string | { inlineData: { data: string; mimeType: string } }

function extract429Delay(msg: string): number {
  // Parse "Please retry in Xs" from Gemini 429 responses
  const m = msg.match(/retry[^0-9]*(\d+(?:\.\d+)?)\s*s/i)
  if (m) return Math.min(parseFloat(m[1]) * 1000, 8000) // cap at 8s
  return 0
}

/**
 * Try calling a specific Gemini model once (with one 429-retry if delay is short).
 * Returns null if the model fails so the caller can try the next one.
 */
async function tryModel(
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

      // On first attempt with a short 429 delay, wait and retry same model once
      if (attempt === 0 && is429 && retryDelay > 0 && retryDelay <= 8000) {
        logger.warn(`[ai] ${tag} 429 on ${modelName} — retrying in ${retryDelay}ms`)
        await new Promise((r) => setTimeout(r, retryDelay))
        continue
      }

      // Model failed — log and signal to try next model
      logger.warn(`[ai] ${tag} failed on ${modelName}: ${msg.substring(0, 120)}`)
      return null
    }
  }
  return null
}

/**
 * Call Gemini with automatic fallback across all models in FALLBACK_MODELS.
 * Throws only when every model in the chain has been exhausted.
 */
async function callGeminiWithFallback(
  genAI: GoogleGenerativeAI,
  parts: Part[],
  tag: string
): Promise<{ text: string; model: string }> {
  for (const modelName of FALLBACK_MODELS) {
    const result = await tryModel(genAI, modelName, parts, tag)
    if (result) return result
    logger.warn(`[ai] ${tag} — falling back from ${modelName}`)
  }
  throw new AppError(
    ErrorCode.INTERNAL_ERROR,
    `AI unavailable (${tag}): all models exhausted [${FALLBACK_MODELS.join(', ')}]`,
    500
  )
}

export class AIService {
  private genAI: GoogleGenerativeAI | null = null

  constructor() {
    if (CONFIG.GEMINI_API_KEY) {
      this.genAI = new GoogleGenerativeAI(CONFIG.GEMINI_API_KEY)
      logger.info(`[ai] Gemini ready — primary: ${FALLBACK_MODELS[0]}, fallbacks: ${FALLBACK_MODELS.slice(1).join(' → ')}`)
    } else {
      logger.error('[ai] ❌ GEMINI_API_KEY missing — AI disabled!')
    }
  }

  private client(): GoogleGenerativeAI {
    if (!this.genAI) throw new AppError(ErrorCode.INTERNAL_ERROR, 'GEMINI_API_KEY not set', 500)
    return this.genAI
  }

  async generateResponse(
    prompt: string,
    userMessage: string,
    systemPrompt?: string
  ): Promise<{ text: string; tokensUsed: number; model: string }> {
    const fullPrompt = systemPrompt
      ? `${systemPrompt}\n\nUser Message: ${userMessage}`
      : userMessage
    const { text, model } = await callGeminiWithFallback(this.client(), [fullPrompt], 'text')
    return { text, tokensUsed: 0, model }
  }

  async analyzeImage(
    imageData: string,
    prompt: string,
    systemPrompt?: string,
    mimeType = 'image/jpeg'
  ): Promise<{ text: string; tokensUsed: number; model: string }> {
    const fullPrompt = systemPrompt ? `${systemPrompt}\n\n${prompt}` : prompt
    const base = mimeType.split(';')[0].trim()
    const safeMime = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(base)
      ? base : 'image/jpeg'
    const { text, model } = await callGeminiWithFallback(
      this.client(),
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
      this.client(),
      [{ inlineData: { data: videoData, mimeType: safeMime } }, instruction],
      'video'
    )
  }

  async generateFromAudio(
    audioBase64: string,
    systemPrompt: string
  ): Promise<{ text: string; model: string }> {
    const instruction = systemPrompt +
      '\n\nUser sent a voice message (MP3). Understand it and reply in short natural Hinglish. No transcription labels.'
    return callGeminiWithFallback(
      this.client(),
      [{ inlineData: { data: audioBase64, mimeType: 'audio/mp3' } }, instruction],
      'audio'
    )
  }

  async makeDecision(
    context: string,
    systemPrompt: string
  ): Promise<{ decision: string; model: string }> {
    const { text, model } = await callGeminiWithFallback(
      this.client(),
      [`${systemPrompt}\n\nContext: ${context}\n\nMake a decision.`],
      'decision'
    )
    return { decision: text, model }
  }

  async generateImage(prompt: string): Promise<{ data: string; mimeType: string } | null> {
    if (!this.genAI) return null
    try {
      const model = this.genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp-image-generation' })
      const result = await (model as any).generateContent({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ['IMAGE', 'TEXT'] },
      })
      for (const part of result.response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData?.data) {
          logger.info('[ai] image generated successfully')
          return { data: part.inlineData.data, mimeType: part.inlineData.mimeType || 'image/jpeg' }
        }
      }
      return null
    } catch (e) {
      logger.error(`[ai] image generation failed: ${(e as Error).message}`)
      return null
    }
  }

  /** Returns the full model list for diagnostics/test-ai endpoint */
  getAvailableModels() {
    return {
      text: [...FALLBACK_MODELS],
      vision: [...FALLBACK_MODELS],
      fallbackChain: FALLBACK_MODELS.join(' → '),
    }
  }
}

export default new AIService()
