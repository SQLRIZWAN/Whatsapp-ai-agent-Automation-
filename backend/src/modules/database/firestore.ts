import admin from 'firebase-admin'
import { CONFIG } from '@shared/constants/config'
import logger from '@shared/utils/logger'

let db: admin.firestore.Firestore | null = null

export const initializeFirestore = async (): Promise<admin.firestore.Firestore> => {
  try {
    if (db) {
      return db
    }

    if (CONFIG.USE_FIRESTORE_EMULATOR) {
      process.env.FIRESTORE_EMULATOR_HOST = CONFIG.FIRESTORE_EMULATOR_HOST
      logger.info('Using Firestore Emulator at ' + CONFIG.FIRESTORE_EMULATOR_HOST)
    } else {
      if (!admin.apps.length) {
        admin.initializeApp({
          credential: admin.credential.cert({
            projectId: CONFIG.FIRESTORE_PROJECT_ID,
            privateKey: CONFIG.FIRESTORE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            clientEmail: CONFIG.FIRESTORE_CLIENT_EMAIL
          } as admin.ServiceAccount)
        })
      }
    }

    db = admin.firestore()

    // Set default settings
    db.settings({
      ignoreUndefinedProperties: true
    })

    logger.info('Firestore initialized successfully')
    return db
  } catch (error) {
    logger.error('Failed to initialize Firestore:', error)
    throw error
  }
}

export const getFirestore = (): admin.firestore.Firestore => {
  if (!db) {
    throw new Error('Firestore not initialized. Call initializeFirestore first.')
  }
  return db
}

export const closeFirestore = async (): Promise<void> => {
  if (db) {
    await db.terminate()
    db = null
    logger.info('Firestore connection closed')
  }
}

export default {
  initializeFirestore,
  getFirestore,
  closeFirestore
}
