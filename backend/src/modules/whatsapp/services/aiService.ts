import { GoogleGenerativeAI } from '@google/generative-ai'
import { CONFIG } from '@shared/constants/config'
import logger from '@shared/utils/logger'
import { AppError } from '@shared/utils/errorHandler'
import { ErrorCode } from '@shared/types/common.types'

// Gemini model fallback chain
const GEMINI_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-preview-05-20',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
  'gemini-1.5-flash-latest'
]

const GEMINI_VISION_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-preview-05-20',
  'gemini-2.0-flash',
  'gemini-1.5-flash-latest'
]

export class AIService {
  private genAI: GoogleGenerativeAI | null = null
  private primaryModel: string = GEMINI_MODELS[0]
  private visionModel: string = GEMINI_VISION_MODELS[0]

  constructor() {
    if (CONFIG.GEMINI_API_KEY) {
      this.genAI = new GoogleGenerativeAI(CONFIG.GEMINI_API_KEY)
      logger.info(`AI Service initialized with primary model: ${this.primaryModel}`)
    } else {
      logger.warn('GEMINI_API_KEY not configured — AI calls will fail until it is set')
    }
  }

  private client(): GoogleGenerativeAI {
    if (!this.genAI) {
      throw new AppError(
        ErrorCode.INTERNAL_ERROR,
        'GEMINI_API_KEY not configured',
        500
      )
    }
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

    for (const model of GEMINI_MODELS) {
      try {
        const genModel = this.client().getGenerativeModel({ model })
        const result = await genModel.generateContent(fullPrompt)
        const response = result.response
        const text = response.text()

        logger.info(`AI response generated with model: ${model}`)

        return {
          text,
          tokensUsed: 0,
          model
        }
      } catch (error) {
        logger.warn(`Model ${model} failed, trying next fallback...`)
        if (model === GEMINI_MODELS[GEMINI_MODELS.length - 1]) {
          logger.error('All Gemini models failed:', error)
          throw new AppError(
            ErrorCode.INTERNAL_ERROR,
            'Failed to generate AI response',
            500
          )
        }
        continue
      }
    }

    throw new AppError(
      ErrorCode.INTERNAL_ERROR,
      'Failed to generate AI response',
      500
    )
  }

  async analyzeImage(
    imageData: string,
    prompt: string,
    systemPrompt?: string
  ): Promise<{ text: string; tokensUsed: number; model: string }> {
    const fullPrompt = systemPrompt ? `${systemPrompt}\n\n${prompt}` : prompt

    for (const model of GEMINI_VISION_MODELS) {
      try {
        const modelWithVision = this.client().getGenerativeModel({ model })

        const result = await modelWithVision.generateContent([
          {
            inlineData: {
              data: imageData,
              mimeType: 'image/jpeg'
            }
          },
          fullPrompt
        ])

        const response = result.response
        const text = response.text()

        logger.info(`Image analyzed with model: ${model}`)

        return {
          text,
          tokensUsed: 0,
          model
        }
      } catch (error) {
        logger.warn(`Vision model ${model} failed, trying next fallback...`)
        if (model === GEMINI_VISION_MODELS[GEMINI_VISION_MODELS.length - 1]) {
          logger.error('All vision models failed:', error)
          throw new AppError(
            ErrorCode.INTERNAL_ERROR,
            'Failed to analyze image',
            500
          )
        }
        continue
      }
    }

    throw new AppError(
      ErrorCode.INTERNAL_ERROR,
      'Failed to analyze image',
      500
    )
  }

  /**
   * Accepts an inline base64 audio blob and asks Gemini to reply in persona.
   * Uses multimodal models which handle audio inlineData directly.
   */
  async generateFromAudio(
    audioBase64: string,
    mimeType: string,
    systemPrompt: string
  ): Promise<{ text: string; model: string }> {
    const instruction =
      systemPrompt +
      '\n\nThe user just sent this voice message. Transcribe it internally, understand it, ' +
      'and reply conversationally in short natural Hinglish (Hindi in Roman script). ' +
      'Do NOT prefix your reply with transcription or labels — just give the reply a human would speak.'

    for (const model of GEMINI_VISION_MODELS) {
      try {
        const genModel = this.client().getGenerativeModel({ model })
        const result = await genModel.generateContent([
          { inlineData: { data: audioBase64, mimeType } },
          instruction,
        ])
        const text = result.response.text().trim()
        logger.info(`Audio handled with model: ${model}`)
        return { text, model }
      } catch (error) {
        logger.warn(`Audio model ${model} failed, trying next fallback...`)
        if (model === GEMINI_VISION_MODELS[GEMINI_VISION_MODELS.length - 1]) {
          logger.error('All audio-capable models failed:', error)
          throw new AppError(
            ErrorCode.INTERNAL_ERROR,
            'Failed to process audio with AI',
            500
          )
        }
        continue
      }
    }

    throw new AppError(
      ErrorCode.INTERNAL_ERROR,
      'Failed to process audio with AI',
      500
    )
  }

  async makeDecision(
    context: string,
    systemPrompt: string
  ): Promise<{ decision: string; model: string }> {
    const prompt = `${systemPrompt}\n\nContext: ${context}\n\nMake a decision based on the context and your system prompt.`

    for (const model of GEMINI_MODELS) {
      try {
        const genModel = this.client().getGenerativeModel({ model })
        const result = await genModel.generateContent(prompt)
        const response = result.response
        const decision = response.text()

        logger.info(`Decision made with model: ${model}`)

        return {
          decision,
          model
        }
      } catch (error) {
        logger.warn(`Model ${model} failed for decision, trying next...`)
        if (model === GEMINI_MODELS[GEMINI_MODELS.length - 1]) {
          logger.error('All models failed for decision:', error)
          throw new AppError(
            ErrorCode.INTERNAL_ERROR,
            'Failed to make decision',
            500
          )
        }
        continue
      }
    }

    throw new AppError(
      ErrorCode.INTERNAL_ERROR,
      'Failed to make decision',
      500
    )
  }

  getAvailableModels(): { text: string[]; vision: string[] } {
    return {
      text: GEMINI_MODELS,
      vision: GEMINI_VISION_MODELS
    }
  }
}

export default new AIService()
