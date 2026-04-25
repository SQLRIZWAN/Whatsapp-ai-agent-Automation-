import { getFirestore } from '../../database/firestore'
import { COLLECTIONS, CALL_STATUS, CALL_TYPE } from '@shared/constants/config'
import { v4 as uuidv4 } from 'uuid'
import logger from '@shared/utils/logger'

export class CallService {
  async saveCall(
    uid: string,
    from: string,
    to: string,
    callType: string,
    status: string = CALL_STATUS.MISSED,
    duration: number = 0,
    forwardedTo?: string,
    aiDecision?: any,
    isVideo?: boolean
  ): Promise<string> {
    try {
      const db = getFirestore()
      const callId = uuidv4()

      const call = {
        callId,
        uid,
        from,
        to,
        callType,
        isVideo: !!isVideo,
        status,
        duration,
        forwardedTo,
        aiDecision,
        timestamp: Date.now()
      }

      await db
        .collection(COLLECTIONS.CALLS)
        .doc(uid)
        .collection('history')
        .doc(callId)
        .set(call)

      logger.info(`Call saved: ${callId}`)
      return callId
    } catch (error) {
      logger.error('Failed to save call:', error)
      throw error
    }
  }

  async getCalls(uid: string, limit: number = 50): Promise<any[]> {
    try {
      const db = getFirestore()
      const snapshot = await db
        .collection(COLLECTIONS.CALLS)
        .doc(uid)
        .collection('history')
        .orderBy('timestamp', 'desc')
        .limit(limit)
        .get()

      return snapshot.docs.map(doc => doc.data())
    } catch (error) {
      logger.error('Failed to get calls:', error)
      return []
    }
  }

  async updateCallStatus(
    uid: string,
    callId: string,
    status: string,
    duration?: number,
    forwardedTo?: string
  ): Promise<void> {
    try {
      const db = getFirestore()
      const updateData: any = { status, updatedAt: Date.now() }

      if (duration !== undefined) {
        updateData.duration = duration
      }
      if (forwardedTo) {
        updateData.forwardedTo = forwardedTo
      }

      await db
        .collection(COLLECTIONS.CALLS)
        .doc(uid)
        .collection('history')
        .doc(callId)
        .update(updateData)

      logger.info(`Call status updated: ${callId}`)
    } catch (error) {
      logger.error('Failed to update call status:', error)
    }
  }
}

export default new CallService()
