import { getFirestore } from '../../database/firestore'
import { COLLECTIONS } from '@shared/constants/config'
import { validateSystemPrompt, validatePhoneNumber } from '@shared/utils/validators'
import { AppError } from '@shared/utils/errorHandler'
import { ErrorCode } from '@shared/types/common.types'
import logger from '@shared/utils/logger'
import configRepository, { AIProvider } from '@modules/database/repositories/configRepository'

// In-memory fallback so the bot still works when Firestore is unreachable.
const memoryConfigs = new Map<string, any>()

export class ConfigService {
  async getConfiguration(uid: string): Promise<any> {
    try {
      const db = getFirestore()
      if (!db) {
        return memoryConfigs.get(uid) || this.getDefaultConfiguration(uid)
      }
      const doc = await db.collection(COLLECTIONS.CONFIGURATIONS).doc(uid).get()
      if (!doc.exists) {
        return this.getDefaultConfiguration(uid)
      }
      return doc.data()
    } catch (error) {
      logger.warn('[config] Firestore read failed, using cached/default:', (error as Error).message)
      return memoryConfigs.get(uid) || this.getDefaultConfiguration(uid)
    }
  }

  async updateConfiguration(uid: string, updates: any): Promise<any> {
    const updateData = {
      ...updates,
      updatedAt: Date.now()
    }
    try {
      const db = getFirestore()
      if (!db) {
        const merged = { ...(memoryConfigs.get(uid) || this.getDefaultConfiguration(uid)), ...updateData }
        memoryConfigs.set(uid, merged)
        logger.warn('[config] Firestore unavailable, persisted update in memory only')
        return merged
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
      if (!db) {
        const cur = memoryConfigs.get(uid) || this.getDefaultConfiguration(uid)
        memoryConfigs.set(uid, { ...cur, systemPrompt, updatedAt: Date.now() })
      } else {
        await db
          .collection(COLLECTIONS.CONFIGURATIONS)
          .doc(uid)
          .set(
            { systemPrompt, updatedAt: Date.now() },
            { merge: true }
          )
      }

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

      const callForwarding = {
        enabled,
        phoneNumber: phoneNumber || '',
        forwardOnNo: enabled,
        forwardOnBusy: enabled
      }

      const db = getFirestore()
      if (!db) {
        const cur = memoryConfigs.get(uid) || this.getDefaultConfiguration(uid)
        memoryConfigs.set(uid, { ...cur, callForwarding, updatedAt: Date.now() })
      } else {
        await db
          .collection(COLLECTIONS.CONFIGURATIONS)
          .doc(uid)
          .set(
            {
              callForwarding,
              updatedAt: Date.now()
            },
            { merge: true }
          )
      }

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
      if (!db) {
        const cur = memoryConfigs.get(uid) || this.getDefaultConfiguration(uid)
        memoryConfigs.set(uid, { ...cur, temperature, maxOutputTokens, updatedAt: Date.now() })
      } else {
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
      }

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

  async updateAIProvider(
    uid: string,
    provider: string,
    apiKey?: string,
    model?: string
  ): Promise<any> {
    try {
      const validProviders = ['default', 'gemini', 'grok', 'openai']
      if (!validProviders.includes(provider)) {
        throw new AppError(
          ErrorCode.VALIDATION_ERROR,
          'Invalid AI provider. Must be: default, gemini, grok, or openai',
          400
        )
      }

      if ((provider === 'grok' || provider === 'openai') && !apiKey) {
        throw new AppError(
          ErrorCode.VALIDATION_ERROR,
          `API key is required for ${provider.toUpperCase()}`,
          400
        )
      }

      const updateData: any = {
        aiProvider: provider,
        updatedAt: Date.now()
      }

      if (apiKey !== undefined) {
        updateData.aiApiKey = apiKey
      }

      if (model) {
        updateData.aiModel = model
      }

      const db = getFirestore()
      if (!db) {
        const cur = memoryConfigs.get(uid) || this.getDefaultConfiguration(uid)
        memoryConfigs.set(uid, { ...cur, ...updateData })
      } else {
        await db
          .collection(COLLECTIONS.CONFIGURATIONS)
          .doc(uid)
          .set(updateData, { merge: true })
      }

      logger.info(`AI provider updated for user ${uid}: ${provider}`)
      return this.getConfiguration(uid)
    } catch (error) {
      if (error instanceof AppError) throw error
      throw new AppError(
        ErrorCode.DATABASE_ERROR,
        'Failed to update AI provider',
        500
      )
    }
  }

  async saveUserAPIKey(
    uid: string,
    provider: AIProvider,
    apiKey: string,
    model?: string
  ) {
    try {
      await configRepository.saveUserAPIKey(uid, provider, apiKey, model)
    } catch (e) {
      logger.warn('[config] saveUserAPIKey persistence failed:', (e as Error).message)
    }
    await this.updateConfiguration(uid, {
      aiProvider: provider,
      aiModel: model || null,
    })
    return this.listUserAPIKeys(uid)
  }

  async listUserAPIKeys(uid: string) {
    try {
      return await configRepository.listUserAPIKeys(uid)
    } catch (e) {
      logger.warn('[config] listUserAPIKeys failed:', (e as Error).message)
      return []
    }
  }

  async deleteUserAPIKey(uid: string, provider: AIProvider) {
    try {
      await configRepository.deleteUserAPIKey(uid, provider)
    } catch (e) {
      logger.warn('[config] deleteUserAPIKey failed:', (e as Error).message)
    }
    const config = await this.getConfiguration(uid)
    if (config?.aiProvider === provider) {
      await this.updateConfiguration(uid, {
        aiProvider: 'default',
        aiModel: null,
      })
    }
    return this.listUserAPIKeys(uid)
  }

  async getUserAIConfig(uid: string) {
    try {
      return await configRepository.getActiveUserAIConfig(uid)
    } catch (e) {
      logger.warn('[config] getUserAIConfig failed:', (e as Error).message)
      return null
    }
  }

  private getDefaultConfiguration(uid: string): any {
    return {
      uid,
      systemPrompt:
        'My name is SQL 💉. I am a highly advanced AI, and I was created by SQL RIZWAN. I manage this WhatsApp account.',
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
