import messageService from '../services/messageService'
import aiService from '../services/aiService'
import baileyService from '../services/baileyService'
import { getFirestore } from '../../database/firestore'
import { COLLECTIONS, MESSAGE_TYPE } from '@shared/constants/config'
import logger from '@shared/utils/logger'

export class MessageHandler {
  async handleIncomingMessage(uid: string, from: string, content: string): Promise<void> {
    try {
      logger.info(`Processing message from ${from} for user ${uid}`)

      // Get user configuration
      const db = getFirestore()
      const configDoc = await db
        .collection(COLLECTIONS.CONFIGURATIONS)
        .doc(uid)
        .get()

      const config = configDoc.data()

      // Check if auto-respond is enabled
      if (!config?.responseSettings?.autoRespond) {
        logger.info('Auto-respond disabled')
        return
      }

      // Save incoming message
      await messageService.saveMessage(uid, from, uid, content, MESSAGE_TYPE.TEXT, false)

      // Generate AI response
      const { text, model } = await aiService.generateResponse(
        content,
        content,
        config?.systemPrompt,
        uid
      )

      // Send response
      const toPhone = from // Send back to the caller
      const sent = await baileyService.sendMessage(uid, toPhone, text)

      if (sent) {
        // Save AI response message
        await messageService.saveMessage(
          uid,
          uid,
          toPhone,
          text,
          MESSAGE_TYPE.TEXT,
          true,
          {
            text,
            model,
            tokensUsed: 0,
            processedAt: Date.now()
          }
        )
      }

      logger.info(`Message processed and response sent to ${from}`)
    } catch (error) {
      logger.error('Message handling error:', error)
    }
  }

  async handleImageMessage(
    uid: string,
    from: string,
    imageUrl: string,
    caption?: string
  ): Promise<void> {
    try {
      logger.info(`Processing image message from ${from}`)

      // Get user configuration
      const db = getFirestore()
      const configDoc = await db
        .collection(COLLECTIONS.CONFIGURATIONS)
        .doc(uid)
        .get()

      const config = configDoc.data()

      if (!config?.messageProcessing?.processImages) {
        logger.info('Image processing disabled')
        return
      }

      // Save incoming image message
      await messageService.saveMessage(
        uid,
        from,
        uid,
        caption || 'Image message',
        MESSAGE_TYPE.IMAGE,
        false
      )

      // Analyze image with Gemini
      const prompt = caption
        ? `Analyze this image: ${caption}`
        : 'Analyze this image and describe what you see'

      const { text, model } = await aiService.analyzeImage(
        imageUrl,
        prompt,
        config?.systemPrompt,
        'image/jpeg'
      )

      // Send response
      const toPhone = from
      const sent = await baileyService.sendMessage(uid, toPhone, text)

      if (sent) {
        await messageService.saveMessage(
          uid,
          uid,
          toPhone,
          text,
          MESSAGE_TYPE.TEXT,
          true,
          {
            text,
            model,
            tokensUsed: 0,
            processedAt: Date.now()
          }
        )
      }

      logger.info(`Image processed and response sent to ${from}`)
    } catch (error) {
      logger.error('Image message handling error:', error)
    }
  }
}

export default new MessageHandler()
