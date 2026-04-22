import callService from '../services/callService'
import aiService from '../services/aiService'
import baileyService from '../services/baileyService'
import { getFirestore } from '../../database/firestore'
import { COLLECTIONS, CALL_TYPE, CALL_STATUS } from '@shared/constants/config'
import logger from '@shared/utils/logger'

export class CallHandler {
  async handleIncomingCall(
    uid: string,
    from: string,
    isVideo: boolean
  ): Promise<void> {
    try {
      logger.info(`Processing incoming call from ${from} for user ${uid}`)

      // Get user configuration
      const db = getFirestore()
      const configDoc = await db
        .collection(COLLECTIONS.CONFIGURATIONS)
        .doc(uid)
        .get()

      const config = configDoc.data()

      // Make AI decision based on system prompt
      const decisionContext = `Incoming ${isVideo ? 'video' : 'voice'} call from ${from}`
      const { decision, model } = await aiService.makeDecision(
        decisionContext,
        config?.systemPrompt || 'Default behavior: handle calls'
      )

      let callStatus = CALL_STATUS.HANDLED
      let forwardedTo: string | undefined

      // Parse decision
      if (
        decision.toLowerCase().includes('forward') &&
        config?.callForwarding?.enabled
      ) {
        callStatus = CALL_STATUS.FORWARDED
        forwardedTo = config.callForwarding.phoneNumber

        logger.info(
          `Call from ${from} forwarded to ${forwardedTo}`
        )
      } else if (decision.toLowerCase().includes('decline')) {
        callStatus = CALL_STATUS.DECLINED
        logger.info(`Call from ${from} declined`)
      } else {
        logger.info(`Call from ${from} handled by AI agent`)
      }

      // Save call record
      await callService.saveCall(
        uid,
        from,
        uid,
        CALL_TYPE.INCOMING,
        callStatus,
        0,
        forwardedTo,
        {
          decision: callStatus,
          reason: decision,
          timestamp: Date.now()
        }
      )

      logger.info(`Call processed: ${callStatus}`)
    } catch (error) {
      logger.error('Call handling error:', error)
    }
  }

  async handleOutgoingCall(
    uid: string,
    to: string,
    isVideo: boolean,
    duration: number
  ): Promise<void> {
    try {
      logger.info(`Recording outgoing call to ${to}`)

      await callService.saveCall(
        uid,
        uid,
        to,
        CALL_TYPE.OUTGOING,
        CALL_STATUS.HANDLED,
        duration
      )

      logger.info(`Outgoing call recorded`)
    } catch (error) {
      logger.error('Outgoing call handling error:', error)
    }
  }
}

export default new CallHandler()
