import {
  AuthenticationCreds,
  AuthenticationState,
  BufferJSON,
  initAuthCreds,
  SignalDataSet,
  SignalDataTypeMap,
} from '@whiskeysockets/baileys'
import admin from 'firebase-admin'
import { getFirestore } from '../../database/firestore'
import logger from '@shared/utils/logger'
import { COLLECTIONS } from '@shared/constants/config'

const ROOT = COLLECTIONS.WHATSAPP_SESSIONS

function sanitizeId(raw: string): string {
  // Preserve uniqueness while keeping Firestore-safe IDs.
  return encodeURIComponent(raw)
}

function writeJSON(value: unknown): string {
  return JSON.stringify(value, BufferJSON.replacer)
}

function readJSON<T>(raw: string): T {
  return JSON.parse(raw, BufferJSON.reviver) as T
}

function isQuotaError(error: unknown): boolean {
  const msg = String(error || '')
  return msg.includes('RESOURCE_EXHAUSTED') || msg.includes('Quota exceeded')
}

// In-memory cache for auth state when Firestore fails
const memoryAuthCache = new Map<string, AuthenticationCreds>()
const memoryKeyCache = new Map<string, Map<string, unknown>>()
const FIRESTORE_OP_TIMEOUT_MS = 4000

async function withTimeout<T>(promise: Promise<T>, ms = FIRESTORE_OP_TIMEOUT_MS): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error(`Firestore timeout after ${ms}ms`)), ms)),
  ])
}

export async function useFirestoreAuthState(
  uid: string
): Promise<{
  state: AuthenticationState
  saveCreds: () => Promise<void>
  clear: () => Promise<void>
}> {
  const db = getFirestore()
  if (!memoryKeyCache.has(uid)) memoryKeyCache.set(uid, new Map())
  const userKeyCache = memoryKeyCache.get(uid)!
  
  // Load or init creds
  let creds: AuthenticationCreds
  let useMemoryOnly = false

  if (db) {
    try {
      const userDoc = db.collection(ROOT).doc(uid)
      const credsDoc = userDoc.collection('auth_state').doc('creds')
      const snap = await withTimeout(credsDoc.get())
      
      if (snap.exists) {
        const data = snap.data() as { json?: string } | undefined
        if (data?.json) {
          creds = readJSON<AuthenticationCreds>(data.json)
          logger.info(`[wa-auth] loaded existing creds for ${uid}`)
        } else {
          creds = initAuthCreds()
          logger.info(`[wa-auth] empty creds doc — initializing new creds for ${uid}`)
        }
      } else {
        creds = initAuthCreds()
        logger.info(`[wa-auth] no creds doc — initializing new creds for ${uid}`)
      }
      memoryAuthCache.set(uid, creds)
    } catch (e) {
      logger.warn(`[wa-auth] Firestore read failed for ${uid}, using memory cache: ${e}`)
      useMemoryOnly = true
      creds = memoryAuthCache.get(uid) || initAuthCreds()
      memoryAuthCache.set(uid, creds)
    }
  } else {
    logger.warn(`[wa-auth] Firestore not initialized, using memory cache for ${uid}`)
    useMemoryOnly = true
    creds = memoryAuthCache.get(uid) || initAuthCreds()
    memoryAuthCache.set(uid, creds)
  }

  const userDoc = db?.collection(ROOT).doc(uid)
  const credsDoc = userDoc?.collection('auth_state').doc('creds')
  const keysCol = userDoc?.collection('auth_state')

  const saveCreds = async () => {
    memoryAuthCache.set(uid, creds)
    if (!useMemoryOnly && db && credsDoc) {
      try {
        await withTimeout(credsDoc.set({ json: writeJSON(creds), updatedAt: Date.now() }))
      } catch (e) {
        logger.warn(`[wa-auth] Failed to save creds to Firestore for ${uid}: ${e}`)
        if (isQuotaError(e)) useMemoryOnly = true
      }
    }
  }

  async function getKey<T extends keyof SignalDataTypeMap>(
    type: T,
    id: string
  ): Promise<SignalDataTypeMap[T] | null> {
    const docId = `${type}_${sanitizeId(id)}`
    if (userKeyCache.has(docId)) {
      return userKeyCache.get(docId) as SignalDataTypeMap[T]
    }
    if (!db || !keysCol || useMemoryOnly) return null
    try {
      const doc = await withTimeout(keysCol.doc(docId).get())
      if (!doc.exists) return null
      const data = doc.data() as { json?: string } | undefined
      if (!data?.json) return null
      const parsed = readJSON<SignalDataTypeMap[T]>(data.json)
      userKeyCache.set(docId, parsed)
      return parsed
    } catch (e) {
      logger.warn(`[wa-auth] Failed to get key ${type}/${id}: ${e}`)
      if (isQuotaError(e)) useMemoryOnly = true
      return null
    }
  }

  async function setKeys(data: SignalDataSet): Promise<void> {
    if (!db || !keysCol || useMemoryOnly) return
    try {
      // Use batched writes per type for efficiency
      const ops: Promise<admin.firestore.WriteResult>[] = []
      for (const [type, records] of Object.entries(data) as [
        keyof SignalDataTypeMap,
        Record<string, unknown>
      ][]) {
        if (!records) continue
        for (const [id, value] of Object.entries(records)) {
          const docId = `${type}_${sanitizeId(id)}`
          const ref = keysCol.doc(docId)
          if (value) {
            userKeyCache.set(docId, value)
            ops.push(ref.set({ json: writeJSON(value), updatedAt: Date.now() }))
          } else {
            userKeyCache.delete(docId)
            ops.push(ref.delete())
          }
        }
      }
      await withTimeout(Promise.all(ops))
    } catch (e) {
      logger.warn(`[wa-auth] Failed to set keys for ${uid}: ${e}`)
      if (isQuotaError(e)) useMemoryOnly = true
    }
  }

  const state: AuthenticationState = {
    creds,
    keys: {
      get: async (type, ids) => {
        const data: Record<string, SignalDataTypeMap[typeof type]> = {}
        await Promise.all(
          ids.map(async (id) => {
            const v = await getKey(type, id)
            if (v !== null && v !== undefined) {
              data[id] = v
            }
          })
        )
        return data as never
      },
      set: async (data) => {
        await setKeys(data as SignalDataSet)
      },
    },
  }

  const clear = async () => {
    logger.warn(`[wa-auth] clearing stored auth for ${uid}`)
    memoryAuthCache.delete(uid)
    memoryKeyCache.delete(uid)
    if (db && keysCol && credsDoc) {
      try {
        const keysSnap = await keysCol.listDocuments()
        await Promise.all(keysSnap.filter((d) => d.id !== 'creds').map((d) => d.delete()))
        await credsDoc.delete().catch(() => undefined)
      } catch (e) {
        logger.warn(`[wa-auth] Failed to clear Firestore auth for ${uid}: ${e}`)
      }
    }
  }

  return { state, saveCreds, clear }
}
