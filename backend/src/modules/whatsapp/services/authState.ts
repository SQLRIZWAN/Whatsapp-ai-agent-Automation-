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

// Firestore document path: whatsappAuth/{uid} holds creds + keys as subcollections
// Keys are sharded by type to keep documents small.

const ROOT = 'whatsappAuth'

function sanitizeId(raw: string): string {
  // Firestore doc IDs can't contain '/', and shouldn't be too long.
  return raw.replace(/\//g, '_').replace(/\./g, '_')
}

function writeJSON(value: unknown): string {
  return JSON.stringify(value, BufferJSON.replacer)
}

function readJSON<T>(raw: string): T {
  return JSON.parse(raw, BufferJSON.reviver) as T
}

export async function useFirestoreAuthState(
  uid: string
): Promise<{
  state: AuthenticationState
  saveCreds: () => Promise<void>
  clear: () => Promise<void>
}> {
  const db = getFirestore()
  if (!db) {
    throw new Error('Firestore not initialized — cannot persist WA auth state')
  }

  const userDoc = db.collection(ROOT).doc(uid)
  const credsDoc = userDoc.collection('state').doc('creds')
  const keysCol = userDoc.collection('keys')

  // Load or init creds
  let creds: AuthenticationCreds
  const snap = await credsDoc.get()
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

  const saveCreds = async () => {
    await credsDoc.set({ json: writeJSON(creds), updatedAt: Date.now() })
  }

  async function getKey<T extends keyof SignalDataTypeMap>(
    type: T,
    id: string
  ): Promise<SignalDataTypeMap[T] | null> {
    const docId = `${type}_${sanitizeId(id)}`
    const doc = await keysCol.doc(docId).get()
    if (!doc.exists) return null
    const data = doc.data() as { json?: string } | undefined
    if (!data?.json) return null
    return readJSON<SignalDataTypeMap[T]>(data.json)
  }

  async function setKeys(data: SignalDataSet): Promise<void> {
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
          ops.push(ref.set({ json: writeJSON(value), updatedAt: Date.now() }))
        } else {
          ops.push(ref.delete())
        }
      }
    }
    await Promise.all(ops)
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
    const keysSnap = await keysCol.listDocuments()
    await Promise.all(keysSnap.map((d) => d.delete()))
    await credsDoc.delete().catch(() => undefined)
  }

  return { state, saveCreds, clear }
}
