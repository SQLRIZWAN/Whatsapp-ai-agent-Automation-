import { GoogleGenerativeAI } from '@google/generative-ai'
import { CONFIG } from '@shared/constants/config'
import logger from '@shared/utils/logger'
import { AppError } from '@shared/utils/errorHandler'
import { ErrorCode } from '@shared/types/common.types'

export class AIService {
  private genAI: GoogleGenerativeAI
  private model: any

  constructor() {
    if (!CONFIG.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY not configured')
    }
    this.genAI = new GoogleGenerativeAI(CONFIG.GEMINI_API_KEY)
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-pro' })
  }

  async generateResponse(
    prompt: string,
    userMessage: string,
    systemPrompt?: string
  ): Promise<{ text: string; tokensUsed: number }> {
    try {
      const fullPrompt = systemPrompt
        ? `${systemPrompt}\n\nUser Message: ${userMessage}`
        : userMessage

      const result = await this.model.generateContent(fullPrompt)
      const response = result.response
      const text = response.text()

      logger.info('AI response generated successfully')

      return {
        text,
        tokensUsed: 0
      }
    } catch (error) {
      logger.error('AI service error:', error)
      throw new AppError(
        ErrorCode.INTERNAL_ERROR,
        'Failed to generate AI response',
        500
      )
    }
  }

  async analyzeImage(
    imageData: string,
    prompt: string,
    systemPrompt?: string
  ): Promise<{ text: string; tokensUsed: number }> {
    try {
      const modelWithVision = this.genAI.getGenerativeModel({
        model: 'gemini-pro-vision'
      })

      const fullPrompt = systemPrompt ? `${systemPrompt}\n\n${prompt}` : prompt

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

      logger.info('Image analysis completed')

      return {
        text,
        tokensUsed: 0
      }
    } catch (error) {
      logger.error('Image analysis error:', error)
      throw new AppError(
        ErrorCode.INTERNAL_ERROR,
        'Failed to analyze image',
        500
      )
    }
  }

  async makeDecision(
    context: string,
    systemPrompt: string
  ): Promise<string> {
    try {
      const prompt = `${systemPrompt}\n\nContext: ${context}\n\nMake a decision based on the context and your system prompt.`

      const result = await this.model.generateContent(prompt)
      const response = result.response
      return response.text()
    } catch (error) {
      logger.error('Decision making error:', error)
      throw new AppError(
        ErrorCode.INTERNAL_ERROR,
        'Failed to make decision',
        500
      )
    }
  }
}

export default new AIService()
