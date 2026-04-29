import { getFirestore } from '../../database/firestore'
import { COLLECTIONS, MESSAGE_TYPE, MESSAGE_STATUS } from '@shared/constants/config'
import { v4 as uuidv4 } from 'uuid'
import logger from '@shared/utils/logger'

// In-memory rolling buffer per uid so the dashboard still shows recent
// activity when Firestore is unavailable (free-tier quota, network blips).
const MEM_LIMIT = 500
const memoryMessages = new Map<string, any[]>()

function pushMemory(uid: string, message: any) {
  const arr = memoryMessages.get(uid) || []
  arr.push(message)
  if (arr.length > MEM_LIMIT) arr.splice(0, arr.length - MEM_LIMIT)
  memoryMessages.set(uid, arr)
}

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
      conversationId: this.generateConversationId(from, to),
    }

    // Always keep a memory copy so getMessages can fall back gracefully.
    pushMemory(uid, message)

    try {
      const db = getFirestore()
      if (!db) {
        logger.warn('[msg] Firestore unavailable — kept message in memory only')
        return message
      }
      await db
        .collection(COLLECTIONS.MESSAGES)
        .doc(uid)
        .collection('history')
        .doc(messageId)
        .set(message)
      logger.info(`[msg] saved ${messageId} (${type}, isFromAI=${isFromAI})`)
    } catch (error) {
      logger.warn('[msg] Firestore save failed, kept in memory:', (error as Error).message)
    }
    return message
  }

  async getMessages(uid: string, limit: number = 50): Promise<any[]> {
    try {
      const db = getFirestore()
      if (!db) {
        return (memoryMessages.get(uid) || []).slice(-limit)
      }
      const snapshot = await db
        .collection(COLLECTIONS.MESSAGES)
        .doc(uid)
        .collection('history')
        .orderBy('timestamp', 'asc')
        .limit(limit)
        .get()

      const fromDb = snapshot.docs.map(doc => doc.data())
      // If Firestore returned nothing but we have memory copies, surface those.
      if (fromDb.length === 0) {
        const mem = memoryMessages.get(uid) || []
        if (mem.length > 0) return mem.slice(-limit)
      }
      return fromDb
    } catch (error) {
      logger.warn('[msg] Firestore read failed, using memory copy:', (error as Error).message)
      return (memoryMessages.get(uid) || []).slice(-limit)
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
