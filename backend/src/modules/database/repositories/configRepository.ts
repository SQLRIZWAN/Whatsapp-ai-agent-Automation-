import crypto from 'crypto'
import { getFirestore } from '../firestore'
import { AppError } from '@shared/utils/errorHandler'
import { ErrorCode } from '@shared/types/common.types'
import { COLLECTIONS, CONFIG } from '@shared/constants/config'

export type AIProvider = 'gemini' | 'grok' | 'openai'

export interface StoredAPIKeyRecord {
  provider: AIProvider
  encryptedKey: string
  iv: string
  tag: string
  model?: string
  savedAt: number
  isActive: boolean
}

export interface UserAPIKeyRecord {
  provider: AIProvider
  apiKey: string
  model?: string
  savedAt: number
  isActive: boolean
}

function getEncryptionKey(): Buffer {
  const raw = CONFIG.ENCRYPTION_KEY || ''
  const normalized = raw.length === 64 ? Buffer.from(raw, 'hex') : Buffer.from(raw, 'utf8')
  if (normalized.length !== 32) {
    throw new AppError(
      ErrorCode.INTERNAL_ERROR,
      'ENCRYPTION_KEY must be exactly 32 bytes or 64 hex chars',
      500
    )
  }
  return normalized
}

function encryptApiKey(apiKey: string) {
  const key = getEncryptionKey()
  const iv = crypto.randomBytes(12)
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv)
  const encrypted = Buffer.concat([cipher.update(apiKey, 'utf8'), cipher.final()])
  const tag = cipher.getAuthTag()

  return {
    encryptedKey: encrypted.toString('base64'),
    iv: iv.toString('base64'),
    tag: tag.toString('base64'),
  }
}

function decryptApiKey(record: StoredAPIKeyRecord): string {
  const key = getEncryptionKey()
  const decipher = crypto.createDecipheriv(
    'aes-256-gcm',
    key,
    Buffer.from(record.iv, 'base64')
  )
  decipher.setAuthTag(Buffer.from(record.tag, 'base64'))
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(record.encryptedKey, 'base64')),
    decipher.final(),
  ])
  return decrypted.toString('utf8')
}

export class ConfigRepository {
  async saveUserAPIKey(
    uid: string,
    provider: AIProvider,
    apiKey: string,
    model?: string
  ): Promise<void> {
    const db = getFirestore()
    if (!db) {
      throw new AppError(ErrorCode.DATABASE_ERROR, 'Firestore not initialized', 500)
    }

    const encrypted = encryptApiKey(apiKey)
    const doc: StoredAPIKeyRecord = {
      provider,
      ...encrypted,
      model,
      savedAt: Date.now(),
      isActive: true,
    }

    await db
      .collection(COLLECTIONS.USER_API_KEYS)
      .doc(uid)
      .collection('keys')
      .doc(provider)
      .set(doc, { merge: true })
  }

  async getUserAPIKey(uid: string, provider: AIProvider): Promise<UserAPIKeyRecord | null> {
    const db = getFirestore()
    if (!db) return null

    const snap = await db
      .collection(COLLECTIONS.USER_API_KEYS)
      .doc(uid)
      .collection('keys')
      .doc(provider)
      .get()

    if (!snap.exists) return null
    const data = snap.data() as StoredAPIKeyRecord
    return {
      provider,
      apiKey: decryptApiKey(data),
      model: data.model,
      savedAt: data.savedAt,
      isActive: data.isActive,
    }
  }

  async listUserAPIKeys(uid: string): Promise<Array<{
    provider: AIProvider
    model?: string
    savedAt: number
    isActive: boolean
    maskedKey: string
  }>> {
    const db = getFirestore()
    if (!db) return []

    const snap = await db
      .collection(COLLECTIONS.USER_API_KEYS)
      .doc(uid)
      .collection('keys')
      .get()

    return snap.docs.map((doc) => {
      const data = doc.data() as StoredAPIKeyRecord
      const decrypted = decryptApiKey(data)
      return {
        provider: data.provider,
        model: data.model,
        savedAt: data.savedAt,
        isActive: data.isActive,
        maskedKey: decrypted.length > 4 ? `••••${decrypted.slice(-4)}` : '••••',
      }
    })
  }

  async deleteUserAPIKey(uid: string, provider: AIProvider): Promise<void> {
    const db = getFirestore()
    if (!db) return

    await db
      .collection(COLLECTIONS.USER_API_KEYS)
      .doc(uid)
      .collection('keys')
      .doc(provider)
      .delete()
  }

  async getActiveUserAIConfig(uid: string): Promise<UserAPIKeyRecord | null> {
    const db = getFirestore()
    if (!db) return null

    const configDoc = await db.collection(COLLECTIONS.CONFIGURATIONS).doc(uid).get()
    const provider = (configDoc.data()?.aiProvider || 'gemini') as AIProvider | 'default'
    if (provider === 'default') return null
    return this.getUserAPIKey(uid, provider)
  }
}

export default new ConfigRepository()
