import { getFirestore } from '../../database/firestore'
import { COLLECTIONS, MESSAGE_TYPE, MESSAGE_STATUS } from '@shared/constants/config'
import { v4 as uuidv4 } from 'uuid'
import logger from '@shared/utils/logger'

export class MessageService {
  async saveMessage(
    uid: string,
    from: string,
    to: string,
    content: string,
    type: string = MESSAGE_TYPE.TEXT,
    isFromAI: boolean = false,
    aiResponse?: any
  ): Promise<any> {
    try {
      const db = getFirestore()
      const messageId = uuidv4()

      const message = {
        messageId,
        uid,
        from,
        to,
        content,
        type,
        isFromAI,
        aiResponse,
        status: MESSAGE_STATUS.SENT,
        timestamp: Date.now(),
        conversationId: this.generateConversationId(from, to)
      }

      await db
        .collection(COLLECTIONS.MESSAGES)
        .doc(uid)
        .collection('history')
        .doc(messageId)
        .set(message)

      logger.info(`Message saved: ${messageId}`)
      return message
    } catch (error) {
      logger.error('Failed to save message:', error)
      throw error
    }
  }

  async getMessages(uid: string, limit: number = 50): Promise<any[]> {
    try {
      const db = getFirestore()
      const snapshot = await db
        .collection(COLLECTIONS.MESSAGES)
        .doc(uid)
        .collection('history')
        .orderBy('timestamp', 'asc')
        .limit(limit)
        .get()

      return snapshot.docs.map(doc => doc.data())
    } catch (error) {
      logger.error('Failed to get messages:', error)
      return []
    }
  }

  async updateMessageStatus(
    uid: string,
    messageId: string,
    status: string
  ): Promise<void> {
    try {
      const db = getFirestore()
      await db
        .collection(COLLECTIONS.MESSAGES)
        .doc(uid)
        .collection('history')
        .doc(messageId)
        .update({ status, updatedAt: Date.now() })

      logger.info(`Message status updated: ${messageId}`)
    } catch (error) {
      logger.error('Failed to update message status:', error)
    }
  }

  private generateConversationId(from: string, to: string): string {
    return [from, to].sort().join('_')
  }
}

export default new MessageService()
