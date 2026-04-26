import {
  makeWASocket,
  DisconnectReason,
  WASocket,
  proto,
  downloadMediaMessage,
  Browsers,
  WAMessage,
  fetchLatestBaileysVersion,
} from '@whiskeysockets/baileys'
import { Boom } from '@hapi/boom'
import pino from 'pino'
import QRCode from 'qrcode'
import logger from '@shared/utils/logger'
import { getFirestore } from '../../database/firestore'
import { COLLECTIONS, SESSION_STATUS } from '@shared/constants/config'
import { useFirestoreAuthState } from './authState'
import qrService from './qrService'
import { synthesizeVoiceNote, convertToMp3 } from './ttsService'
import aiService from './aiService'
import configService from '../../config/services/configService'
import messageService from './messageService'
import callService from './callService'

type Status = 'disconnected' | 'connecting' | 'qr' | 'connected'

const MAX_RECONNECT_ATTEMPTS = 25

interface SessionRuntime {
  sock: WASocket
  status: Status
  qrDataUrl: string | null
  qrGeneratedAt: number | null
  phone: string | null
  reconnecting: boolean
  attempts: number
  lastError: string | null
  connectedAt: number | null
}

class BaileyService {
  private runtimes = new Map<string, SessionRuntime>()
  private spawning = new Set<string>()
  private io: unknown
  private waLogger = pino({ level: 'silent' })

  setIO(io: unknown) {
    this.io = io
  }

  private emitStatus(uid: string) {
    const r = this.runtimes.get(uid)
    if (!r) return
    const anyIO = this.io as
      | { to?: (room: string) => { emit: (event: string, payload: unknown) => void } }
      | undefined
    if (anyIO?.to) {
      anyIO.to(`user_${uid}`).emit('whatsapp:status', {
        status: r.status,
        qrCode: r.qrDataUrl,
        phone: r.phone,
        attempts: r.attempts,
        lastError: r.lastError,
        connectedAt: r.connectedAt,
      })
    }
  }

  private emitNewMessage(uid: string, msg: unknown) {
    const anyIO = this.io as
      | { to?: (room: string) => { emit: (event: string, payload: unknown) => void } }
      | undefined
    if (anyIO?.to) {
      anyIO.to(`user_${uid}`).emit('whatsapp:message:new', msg)
    }
  }

  getStatusSnapshot(uid: string) {
    const r = this.runtimes.get(uid)
    return {
      status: r?.status || 'disconnected',
      qrCode: r?.qrDataUrl || null,
      phone: r?.phone || null,
      attempts: r?.attempts || 0,
      lastError: r?.lastError || null,
      connectedAt: r?.connectedAt || null,
    }
  }

  async start(uid: string) {
    // 1. If already connected or connecting, don't restart
    const existing = this.runtimes.get(uid)
    if (existing && (existing.status === 'connected' || existing.status === 'qr' || existing.status === 'connecting')) {
      return this.getStatusSnapshot(uid)
    }

    // 2. Check for stored credentials
    const hasCreds = await this.userHasStoredCreds(uid)
    if (hasCreds) {
      logger.info(`[wa] ${uid} has stored creds — reconnecting silently`)
      this.spawn(uid).catch(e => logger.error('[wa] background spawn error', e))
      return {
        status: 'connecting' as Status,
        qrCode: null,
        phone: null,
        attempts: 0,
        lastError: null,
        connectedAt: null,
      }
    }

    // 3. No creds — check for a valid QR in DB (less than 1 min old)
    const cachedQR = await qrService.getQRCode(uid)
    if (cachedQR) {
      logger.info(`[wa] Found valid cached QR in Firestore for ${uid}`)
      // Start connection in background if not already started
      this.spawn(uid).catch(e => logger.error('[wa] background spawn error', e))
      return {
        status: 'qr' as Status,
        qrCode: cachedQR,
        phone: null,
        attempts: 0,
        lastError: null,
        connectedAt: null,
      }
    }

    // 4. Fresh start
    await this.spawn(uid)
    return this.getStatusSnapshot(uid)
  }

  private async userHasStoredCreds(uid: string): Promise<boolean> {
    try {
      const db = getFirestore()
      if (!db) return false
      const credsDoc = await db
        .collection('whatsappAuth')
        .doc(uid)
        .collection('state')
        .doc('creds')
        .get()
      return credsDoc.exists
    } catch {
      return false
    }
  }

  async stop(uid: string): Promise<void> {
    const r = this.runtimes.get(uid)
    if (!r) return
    try {
      r.sock.ev.removeAllListeners('connection.update')
      r.sock.end(undefined)
    } catch (e) {
      logger.warn('[wa] stop error', e as Error)
    }
    this.runtimes.delete(uid)
    await this.persistSessionStatus(uid, SESSION_STATUS.DISCONNECTED, null)
  }

  async logout(uid: string): Promise<void> {
    const r = this.runtimes.get(uid)
    try {
      if (r) {
        await r.sock.logout().catch(() => undefined)
        r.sock.end(undefined)
      }
    } finally {
      this.runtimes.delete(uid)
      try {
        const db = getFirestore()
        if (db) await db.collection(COLLECTIONS.QR_CODES).doc(uid).delete().catch(() => undefined)
      } catch { /* ignore */ }
      try {
        const { clear } = await useFirestoreAuthState(uid)
        await clear()
      } catch (e) {
        logger.warn('[wa] failed to clear auth state', e as Error)
      }
      await this.persistSessionStatus(uid, SESSION_STATUS.DISCONNECTED, null)
      logger.info(`[wa] ${uid} fully logged out`)
    }
  }

  private async persistSessionStatus(uid: string, status: string, phone: string | null) {
    try {
      const db = getFirestore()
      if (!db) return
      await db.collection(COLLECTIONS.SESSIONS).doc(uid).set(
        {
          connectionStatus: status,
          whatsappPhone: phone,
          updatedAt: Date.now(),
        },
        { merge: true }
      )
    } catch (e) {
      logger.warn('[wa] persistSessionStatus failed', e as Error)
    }
  }

  private cachedWAVersion: [number, number, number] | null = null

  private async getWAVersion(): Promise<[number, number, number]> {
    if (this.cachedWAVersion) return this.cachedWAVersion
    try {
      const { version } = await fetchLatestBaileysVersion()
      this.cachedWAVersion = version as [number, number, number]
    } catch (e) {
      this.cachedWAVersion = [2, 3000, 1015901307]
    }
    return this.cachedWAVersion
  }

  private async spawn(uid: string, prevAttempts = 0): Promise<void> {
    if (this.spawning.has(uid)) return
    this.spawning.add(uid)

    try {
      const { state, saveCreds } = await useFirestoreAuthState(uid)
      const version = await this.getWAVersion()

      const sock = makeWASocket({
        version,
        auth: state,
        printQRInTerminal: false,
        logger: this.waLogger as never,
        browser: Browsers.ubuntu('Chrome'),
        syncFullHistory: false,
        markOnlineOnConnect: true,
        connectTimeoutMs: 60_000,
        defaultQueryTimeoutMs: 60_000,
        keepAliveIntervalMs: 30_000,
      })

      const runtime: SessionRuntime = {
        sock,
        status: 'connecting',
        qrDataUrl: null,
        qrGeneratedAt: null,
        phone: null,
        reconnecting: false,
        attempts: prevAttempts + 1,
        lastError: null,
        connectedAt: null,
      }
      this.runtimes.set(uid, runtime)

      sock.ev.on('creds.update', saveCreds)

      sock.ev.on('connection.update', async (u) => {
        const { connection, lastDisconnect, qr } = u

        if (qr) {
          const dataUrl = await QRCode.toDataURL(qr, { margin: 1, width: 360 })
          runtime.qrDataUrl = dataUrl
          runtime.qrGeneratedAt = Date.now()
          runtime.status = 'qr'
          this.emitStatus(uid)
          await qrService.saveQRCode(uid, dataUrl)
        }

        if (connection === 'open') {
          runtime.status = 'connected'
          runtime.qrDataUrl = null
          runtime.phone = sock.user?.id?.split(':')[0] || null
          runtime.connectedAt = Date.now()
          runtime.attempts = 0
          this.emitStatus(uid)
          await qrService.markQRAsScanned(uid)
          await this.persistSessionStatus(uid, SESSION_STATUS.CONNECTED, runtime.phone)
        }

        if (connection === 'close') {
          const code = (lastDisconnect?.error as Boom | undefined)?.output?.statusCode
          const errMsg = (lastDisconnect?.error as Error | undefined)?.message || String(code)
          
          runtime.status = 'disconnected'
          runtime.lastError = errMsg
          this.emitStatus(uid)
          this.runtimes.delete(uid)

          if (code === DisconnectReason.loggedOut) {
            await this.logout(uid)
            return
          }

          // Automatic reconnection for other reasons
          if (runtime.attempts < MAX_RECONNECT_ATTEMPTS) {
            const delay = Math.min(1000 * 2 ** Math.min(runtime.attempts, 5), 30_000)
            setTimeout(() => this.spawn(uid, runtime.attempts).catch(() => {}), delay)
          }
        }
      })

      sock.ev.on('call', async (calls) => {
        for (const call of calls) {
          if (call.status !== 'offer') continue
          await this.handleIncomingCall(uid, call).catch(() => {})
        }
      })

      sock.ev.on('messages.upsert', async ({ messages, type }) => {
        if (type !== 'notify') return
        for (const msg of messages) {
          if (!msg.message || msg.key.fromMe) continue
          await this.handleIncomingMessage(uid, msg).catch(() => {})
        }
      })

    } finally {
      this.spawning.delete(uid)
    }
  }

  private async handleIncomingCall(uid: string, call: any) {
    const r = this.runtimes.get(uid)
    if (!r) return
    try { await r.sock.rejectCall(call.id, call.from) } catch (e) { /* ignore */ }

    const cfg = await configService.getConfiguration(uid).catch(() => null)
    const forwardNumber = cfg?.callForwarding?.phoneNumber || ''
    const systemPrompt = cfg?.systemPrompt || ''

    await callService.saveCall(uid, call.from, uid, 'incoming', 'declined', 0, undefined, { decision: 'auto_declined' }, !!call.isVideo).catch(() => {})

    setTimeout(async () => {
      const prompt = buildPromptWithForwarding(systemPrompt, forwardNumber)
      const context = `User called. Reject politely. Explain you can't answer calls. Ask for text/voice. Hinglish.`
      const { text: spoken } = await aiService.generateResponse(context, context, prompt)
      try {
        const { ogg, durationSec } = await synthesizeVoiceNote(spoken, { lang: 'hi' })
        await r.sock.sendMessage(call.from, { audio: ogg, ptt: true, mimetype: 'audio/ogg; codecs=opus', seconds: durationSec })
      } catch {
        await r.sock.sendMessage(call.from, { text: spoken }).catch(() => {})
      }
    }, 1500)
  }

  private async handleIncomingMessage(uid: string, msg: WAMessage) {
    const r = this.runtimes.get(uid)
    if (!r) return
    const jid = msg.key.remoteJid
    if (!jid || jid.endsWith('@g.us') || jid === 'status@broadcast') return

    const m = msg.message
    if (!m) return
    const content: proto.IMessage = m.ephemeralMessage?.message || m.viewOnceMessage?.message || m.viewOnceMessageV2?.message || m

    const cfg = await configService.getConfiguration(uid).catch(() => null)
    const systemPrompt = cfg?.systemPrompt || ''
    const forwardNumber = cfg?.callForwarding?.phoneNumber || ''
    const prompt = buildPromptWithForwarding(systemPrompt, forwardNumber)

    const text = content.conversation || content.extendedTextMessage?.text || content.imageMessage?.caption || content.videoMessage?.caption || ''

    if (content.audioMessage) {
      await r.sock.sendPresenceUpdate('composing', jid)
      const buf = await downloadMediaMessage(msg, 'buffer', {}) as Buffer
      const mp3Buf = await convertToMp3(buf, 'ogg')
      const { text: replyText } = await aiService.generateFromAudio(mp3Buf.toString('base64'), prompt)
      await this.sendVoiceReply(uid, jid, replyText)
      return
    }

    if (content.imageMessage) {
      await r.sock.sendPresenceUpdate('composing', jid)
      const buf = await downloadMediaMessage(msg, 'buffer', {}) as Buffer
      const { text: replyText } = await aiService.analyzeImage(buf.toString('base64'), text || 'Describe', prompt)
      await r.sock.sendMessage(jid, { text: replyText })
      return
    }

    if (!text.trim()) return
    await r.sock.sendPresenceUpdate('composing', jid)
    const { text: replyText, model } = await aiService.generateResponse(text, text, prompt)
    await r.sock.sendMessage(jid, { text: replyText })
  }

  private async sendVoiceReply(uid: string, jid: string, text: string) {
    const r = this.runtimes.get(uid)
    if (!r) return
    try {
      const { ogg, durationSec } = await synthesizeVoiceNote(text, { lang: 'hi' })
      await r.sock.sendMessage(jid, { audio: ogg, ptt: true, mimetype: 'audio/ogg; codecs=opus', seconds: durationSec })
    } catch {
      await r.sock.sendMessage(jid, { text }).catch(() => {})
    }
  }

  async sendMessage(uid: string, to: string, message: string) {
    const r = this.runtimes.get(uid)
    if (!r || r.status !== 'connected') return false
    await r.sock.sendMessage(normalizeJid(to), { text: message })
    return true
  }
}

function normalizeJid(input: string): string {
  if (input.includes('@')) return input
  return `${input.replace(/\D/g, '')}@s.whatsapp.net`
}

function buildPromptWithForwarding(systemPrompt: string, forward: string): string {
  const base = systemPrompt?.trim() || 'My name is SQL 💉. Created by SQL RIZWAN.'
  const urgent = forward ? `- If urgent, tell them to call ${forward}.` : ''
  return `${base}\nRules:\n- Short Hinglish.\n- Stay in character.\n${urgent}`
}

export default new BaileyService()
