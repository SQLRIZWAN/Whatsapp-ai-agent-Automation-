import { getFirestore } from '../../database/firestore'
import { COLLECTIONS } from '@shared/constants/config'
import { validateSystemPrompt, validatePhoneNumber } from '@shared/utils/validators'
import { AppError } from '@shared/utils/errorHandler'
import { ErrorCode } from '@shared/types/common.types'
import logger from '@shared/utils/logger'
import { v4 as uuidv4 } from 'uuid'

export class ConfigService {
  async getConfiguration(uid: string): Promise<any> {
    try {
      const db = getFirestore()
      const doc = await db.collection(COLLECTIONS.CONFIGURATIONS).doc(uid).get()

      if (!doc.exists) {
        // Return default configuration
        return this.getDefaultConfiguration(uid)
      }

      return doc.data()
    } catch (error) {
      logger.error('Failed to get configuration:', error)
      throw new AppError(
        ErrorCode.DATABASE_ERROR,
        'Failed to retrieve configuration',
        500
      )
    }
  }

  async updateConfiguration(uid: string, updates: any): Promise<any> {
    try {
      const db = getFirestore()
      const updateData = {
        ...updates,
        updatedAt: Date.now()
      }

      await db
        .collection(COLLECTIONS.CONFIGURATIONS)
        .doc(uid)
        .set(updateData, { merge: true })

      logger.info(`Configuration updated for user ${uid}`)

      return this.getConfiguration(uid)
    } catch (error) {
      logger.error('Failed to update configuration:', error)
      throw new AppError(
        ErrorCode.DATABASE_ERROR,
        'Failed to update configuration',
        500
      )
    }
  }

  async updateSystemPrompt(uid: string, systemPrompt: string): Promise<string> {
    try {
      if (!validateSystemPrompt(systemPrompt)) {
        throw new AppError(
          ErrorCode.VALIDATION_ERROR,
          'Invalid system prompt',
          400
        )
      }

      const db = getFirestore()
      await db
        .collection(COLLECTIONS.CONFIGURATIONS)
        .doc(uid)
        .set(
          { systemPrompt, updatedAt: Date.now() },
          { merge: true }
        )

      logger.info(`System prompt updated for user ${uid}`)
      return systemPrompt
    } catch (error) {
      if (error instanceof AppError) throw error
      throw new AppError(
        ErrorCode.DATABASE_ERROR,
        'Failed to update system prompt',
        500
      )
    }
  }

  async updateCallForwarding(
    uid: string,
    enabled: boolean,
    phoneNumber?: string
  ): Promise<any> {
    try {
      if (enabled && (!phoneNumber || !validatePhoneNumber(phoneNumber))) {
        throw new AppError(
          ErrorCode.VALIDATION_ERROR,
          'Invalid phone number for forwarding',
          400
        )
      }

      const db = getFirestore()
      await db
        .collection(COLLECTIONS.CONFIGURATIONS)
        .doc(uid)
        .set(
          {
            callForwarding: {
              enabled,
              phoneNumber: phoneNumber || '',
              forwardOnNo: enabled,
              forwardOnBusy: enabled
            },
            updatedAt: Date.now()
          },
          { merge: true }
        )

      logger.info(`Call forwarding updated for user ${uid}`)

      return this.getConfiguration(uid)
    } catch (error) {
      if (error instanceof AppError) throw error
      throw new AppError(
        ErrorCode.DATABASE_ERROR,
        'Failed to update call forwarding',
        500
      )
    }
  }

  async updateAISettings(
    uid: string,
    temperature: number,
    maxOutputTokens: number
  ): Promise<any> {
    try {
      if (temperature < 0 || temperature > 1) {
        throw new AppError(
          ErrorCode.VALIDATION_ERROR,
          'Temperature must be between 0 and 1',
          400
        )
      }

      if (maxOutputTokens < 1 || maxOutputTokens > 4096) {
        throw new AppError(
          ErrorCode.VALIDATION_ERROR,
          'Max output tokens must be between 1 and 4096',
          400
        )
      }

      const db = getFirestore()
      await db
        .collection(COLLECTIONS.CONFIGURATIONS)
        .doc(uid)
        .set(
          {
            temperature,
            maxOutputTokens,
            updatedAt: Date.now()
          },
          { merge: true }
        )

      logger.info(`AI settings updated for user ${uid}`)

      return this.getConfiguration(uid)
    } catch (error) {
      if (error instanceof AppError) throw error
      throw new AppError(
        ErrorCode.DATABASE_ERROR,
        'Failed to update AI settings',
        500
      )
    }
  }

  private getDefaultConfiguration(uid: string): any {
    return {
      uid,
      systemPrompt:
        'You are a helpful WhatsApp AI assistant. Respond to messages professionally and helpfully.',
      aiModel: 'gemini-pro',
      temperature: 0.7,
      maxOutputTokens: 2048,
      callForwarding: {
        enabled: false,
        phoneNumber: '',
        forwardOnNo: false,
        forwardOnBusy: false
      },
      messageProcessing: {
        enabled: true,
        processImages: true,
        processVideos: true,
        maxFileSize: 52428800
      },
      responseSettings: {
        autoRespond: true,
        delaySeconds: 0,
        typing: false
      },
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
  }
}

export default new ConfigService()
