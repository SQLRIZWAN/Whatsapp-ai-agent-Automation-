import QRCode from 'qrcode'
import { getFirestore } from '../../database/firestore'
import { COLLECTIONS, CONFIG } from '@shared/constants/config'
import { QRCodeData } from '../types/whatsapp.types'
import logger from '@shared/utils/logger'

export class QRService {
  async generateQR(data: string): Promise<string> {
    try {
      const qrImage = await QRCode.toDataURL(data)
      logger.info('QR code generated successfully')
      return qrImage
    } catch (error) {
      logger.error('Failed to generate QR code:', error)
      throw error
    }
  }

  async saveQRCode(uid: string, qrData: string): Promise<void> {
    try {
      const db = getFirestore()
      const expiresAt = Date.now() + CONFIG.QR_CODE_EXPIRY

      const qrDoc = {
        uid,
        currentQR: {
          data: qrData,
          generatedAt: Date.now(),
          expiresAt
        },
        lastScannedAt: null
      }

      await db.collection(COLLECTIONS.QR_CODES).doc(uid).set(qrDoc, { merge: true })
      logger.info(`QR code saved for user ${uid}`)
    } catch (error) {
      logger.error('Failed to save QR code:', error)
      throw error
    }
  }

  async getQRCode(uid: string): Promise<string | null> {
    try {
      const db = getFirestore()
      const doc = await db.collection(COLLECTIONS.QR_CODES).doc(uid).get()

      if (!doc.exists) {
        return null
      }

      const qrDoc = doc.data()
      const currentQR = qrDoc?.currentQR

      if (!currentQR) {
        return null
      }

      // Check if QR code has expired
      if (currentQR.expiresAt < Date.now()) {
        return null
      }

      return currentQR.data
    } catch (error) {
      logger.error('Failed to retrieve QR code:', error)
      throw error
    }
  }

  async markQRAsScanned(uid: string): Promise<void> {
    try {
      const db = getFirestore()
      await db.collection(COLLECTIONS.QR_CODES).doc(uid).update({
        'currentQR.scanned': true,
        'currentQR.scannedAt': Date.now(),
        'lastScannedAt': Date.now()
      })
      logger.info(`QR marked as scanned for user ${uid}`)
    } catch (error) {
      logger.error('Failed to mark QR as scanned:', error)
      throw error
    }
  }

  async isQRExpired(uid: string): Promise<boolean> {
    try {
      const db = getFirestore()
      const doc = await db.collection(COLLECTIONS.QR_CODES).doc(uid).get()

      if (!doc.exists) {
        return true
      }

      const currentQR = doc.data()?.currentQR
      if (!currentQR) {
        return true
      }

      return currentQR.expiresAt < Date.now()
    } catch (error) {
      logger.error('Failed to check QR expiration:', error)
      return true
    }
  }
}

export default new QRService()
