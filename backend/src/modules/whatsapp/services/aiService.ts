import { GoogleGenerativeAI } from '@google/generative-ai'
import { CONFIG } from '@shared/constants/config'
import logger from '@shared/utils/logger'
import { AppError } from '@shared/utils/errorHandler'
import { ErrorCode } from '@shared/types/common.types'

const GEMINI_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-preview-05-20',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
  'gemini-1.5-flash-latest',
]

const GEMINI_VISION_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-preview-05-20',
  'gemini-2.0-flash',
  'gemini-1.5-flash-latest',
]

type Part = string | { inlineData: { data: string; mimeType: string } }

async function runWithFallback(
  genAI: GoogleGenerativeAI,
  models: string[],
  parts: Part[],
  tag: string
): Promise<{ text: string; model: string }> {
  let lastErr = ''
  for (const model of models) {
    try {
      const m = genAI.getGenerativeModel({ model })
      const result = await m.generateContent(parts as never)
      const text = result.response.text().trim()
      if (!text) throw new Error('empty response')
      logger.info(`[ai] ${tag} OK via ${model}`)
      return { text, model }
    } catch (e) {
      lastErr = (e as Error).message || String(e)
      logger.warn(`[ai] ${tag} — ${model} failed: ${lastErr}`)
    }
  }
  logger.error(`[ai] ALL models failed for ${tag}. Last: ${lastErr}`)
  throw new AppError(ErrorCode.INTERNAL_ERROR, `AI unavailable (${tag}): ${lastErr}`, 500)
}

export class AIService {
  private genAI: GoogleGenerativeAI | null = null

  constructor() {
    if (CONFIG.GEMINI_API_KEY) {
      this.genAI = new GoogleGenerativeAI(CONFIG.GEMINI_API_KEY)
      logger.info(`[ai] Gemini ready. Primary: ${GEMINI_MODELS[0]}`)
      this.selfTest().catch(() => undefined)
    } else {
      logger.error('[ai] ❌ GEMINI_API_KEY missing — AI disabled!')
    }
  }

  private async selfTest(): Promise<void> {
    if (!this.genAI) return
    try {
      const { model } = await runWithFallback(
        this.genAI,
        GEMINI_MODELS,
        ['Reply with exactly one word: OK'],
        'self-test'
      )
      logger.info(`[ai] ✅ Self-test PASSED — working model: ${model}`)
    } catch (e) {
      logger.error(`[ai] ❌ Self-test FAILED: ${(e as Error).message}`)
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
    const { text, model } = await runWithFallback(this.client(), GEMINI_MODELS, [fullPrompt], 'text')
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
    const { text, model } = await runWithFallback(
      this.client(), GEMINI_VISION_MODELS,
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
    return runWithFallback(
      this.client(), GEMINI_VISION_MODELS,
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
    return runWithFallback(
      this.client(), GEMINI_VISION_MODELS,
      [{ inlineData: { data: audioBase64, mimeType: 'audio/mp3' } }, instruction],
      'audio'
    )
  }

  async makeDecision(
    context: string,
    systemPrompt: string
  ): Promise<{ decision: string; model: string }> {
    const { text, model } = await runWithFallback(
      this.client(), GEMINI_MODELS,
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

  getAvailableModels() {
    return { text: GEMINI_MODELS, vision: GEMINI_VISION_MODELS }
  }
}

export default new AIService()
