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
import { CONFIG, COLLECTIONS, SESSION_STATUS, MESSAGE_TYPE } from '@shared/constants/config'
import { useFirestoreAuthState } from './authState'
import qrService from './qrService'
import { synthesizeVoiceNote, convertToMp3 } from './ttsService'
import aiService from './aiService'
import configService from '../../config/services/configService'
import messageService from './messageService'
import callService from './callService'

type Status = 'disconnected' | 'connecting' | 'qr' | 'connected'

const MAX_RECONNECT_ATTEMPTS = 25
const FIRESTORE_OP_TIMEOUT_MS = 5000

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
  private reconnectTimers = new Map<string, NodeJS.Timeout>()
  private consecutiveFailures = new Map<string, number>()
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
      if (r.qrDataUrl) {
        anyIO.to(`user_${uid}`).emit('qr-code', { qr: r.qrDataUrl })
      }
      if (r.status === 'connected') {
        anyIO.to(`user_${uid}`).emit('whatsapp-connected', { connected: true })
      }
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

    // 3. Fresh start (memory-first QR to avoid Firestore quota pressure)
    await this.spawn(uid)
    return this.getStatusSnapshot(uid)
  }

  private async userHasStoredCreds(uid: string): Promise<boolean> {
    try {
      const db = getFirestore()
      if (!db) return false
      const credsDoc = await db
        .collection(COLLECTIONS.WHATSAPP_SESSIONS)
        .doc(uid)
        .collection('auth_state')
        .doc('creds')
        .get()
      return credsDoc.exists
    } catch {
      return false
    }
  }

  async stop(uid: string): Promise<void> {
    this.clearReconnectTimer(uid)
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
    this.clearReconnectTimer(uid)
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
      this.consecutiveFailures.delete(uid)
      logger.info(`[wa] ${uid} fully logged out`)
    }
  }

  private clearReconnectTimer(uid: string) {
    const t = this.reconnectTimers.get(uid)
    if (t) clearTimeout(t)
    this.reconnectTimers.delete(uid)
  }

  private scheduleReconnect(uid: string, attempt: number) {
    this.clearReconnectTimer(uid)
    const delay = Math.min(1000 * 2 ** Math.min(attempt, 5), 30_000)
    logger.info(`[wa] Reconnecting ${uid} in ${delay}ms (attempt ${attempt + 1})`)
    const t = setTimeout(() => {
      this.reconnectTimers.delete(uid)
      this.spawn(uid, attempt).catch(() => {})
    }, delay)
    this.reconnectTimers.set(uid, t)
  }

  private async resetAuthAndRestart(uid: string) {
    logger.warn(`[wa] ${uid} repeated connection failures; clearing auth and forcing fresh QR`)
    this.clearReconnectTimer(uid)
    this.runtimes.delete(uid)
    try {
      const { clear } = await useFirestoreAuthState(uid)
      await clear()
    } catch (e) {
      logger.warn('[wa] failed to clear auth during recovery', e as Error)
    }
    try {
      const db = getFirestore()
      if (db) await db.collection(COLLECTIONS.QR_CODES).doc(uid).delete().catch(() => undefined)
    } catch { /* ignore */ }
    this.consecutiveFailures.delete(uid)
    await this.persistSessionStatus(uid, SESSION_STATUS.DISCONNECTED, null)
    this.scheduleReconnect(uid, 0)
  }

  private async persistSessionStatus(uid: string, status: string, phone: string | null) {
    try {
      const db = getFirestore()
      if (!db) return
      // Use batch write with timeout to avoid quota exhaustion
      const batch = db.batch()
      batch.set(
        db.collection(COLLECTIONS.SESSIONS).doc(uid),
        {
          connectionStatus: status,
          whatsappPhone: phone,
          updatedAt: Date.now(),
        },
        { merge: true }
      )
      await Promise.race([
        batch.commit(),
        new Promise((_, reject) => setTimeout(() => reject(new Error(`Firestore timeout after ${FIRESTORE_OP_TIMEOUT_MS}ms`)), FIRESTORE_OP_TIMEOUT_MS)),
      ])
    } catch (e) {
      logger.warn('[wa] persistSessionStatus failed', e as Error)
    }
  }

  private cachedWAVersion: [number, number, number] | null = null
  private waVersionFetchedAt: number | null = null

  private async getWAVersion(): Promise<[number, number, number] | undefined> {
    const now = Date.now()
    if (this.cachedWAVersion && this.waVersionFetchedAt && now - this.waVersionFetchedAt < 10 * 60_000) {
      return this.cachedWAVersion
    }
    try {
      const latest = await fetchLatestBaileysVersion()
      this.cachedWAVersion = latest.version
      this.waVersionFetchedAt = now
      return this.cachedWAVersion
    } catch (e) {
      logger.warn('[wa] unable to fetch latest WA version, using package defaults', e as Error)
      return this.cachedWAVersion || undefined
    }
  }

  private async spawn(uid: string, prevAttempts = 0): Promise<void> {
    if (this.spawning.has(uid)) {
      logger.info(`[wa] spawn already in progress for ${uid}`)
      return
    }
    const existing = this.runtimes.get(uid)
    if (existing && (existing.status === 'connecting' || existing.status === 'qr' || existing.status === 'connected')) {
      logger.info(`[wa] existing runtime already active for ${uid} (${existing.status}), skip spawn`)
      return
    }
    logger.info(`[wa] spawning connection for ${uid} (attempt ${prevAttempts + 1})`)
    this.spawning.add(uid)

    try {
      const { state, saveCreds } = await useFirestoreAuthState(uid)
      const version = await this.getWAVersion()

      const sock = makeWASocket({
        ...(version ? { version } : {}),
        auth: state,
        printQRInTerminal: false,
        logger: this.waLogger as never,
        browser: Browsers.windows('Chrome'),
        syncFullHistory: false,
        markOnlineOnConnect: true,
        connectTimeoutMs: 120_000,
        defaultQueryTimeoutMs: 120_000,
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
        logger.info(`[wa] connection.update for ${uid}: connection=${connection}, qr=${!!qr}, lastDisconnect=${!!lastDisconnect}`)

        if (qr) {
          try {
            logger.info(`[wa] QR code received for ${uid}`)
            const dataUrl = await QRCode.toDataURL(qr, { margin: 1, width: 360 })
            runtime.qrDataUrl = dataUrl
            runtime.qrGeneratedAt = Date.now()
            runtime.status = 'qr'
            await qrService.saveQRCode(uid, dataUrl)
            this.emitStatus(uid)
            logger.info(`[wa] QR code emitted for ${uid}`)
          } catch (e) {
            runtime.lastError = (e as Error).message
            logger.error(`[wa] QR generation failed for ${uid}`, e as Error)
          }
        }

        if (connection === 'open') {
          logger.info(`[wa] Connection opened for ${uid}`)
          runtime.status = 'connected'
          runtime.qrDataUrl = null
          runtime.phone = sock.user?.id?.split(':')[0] || null
          runtime.connectedAt = Date.now()
          runtime.attempts = 0
          this.consecutiveFailures.delete(uid)
          this.clearReconnectTimer(uid)
          await qrService.markQRAsScanned(uid)
          this.emitStatus(uid)
          await this.persistSessionStatus(uid, SESSION_STATUS.CONNECTED, runtime.phone)
          logger.info(`[wa] Connected as ${runtime.phone}`)
        }

        if (connection === 'close') {
          const code = (lastDisconnect?.error as Boom | undefined)?.output?.statusCode
          const errMsg = (lastDisconnect?.error as Error | undefined)?.message || String(code)
          logger.warn(`[wa] Connection closed for ${uid}: code=${code}, error=${errMsg}`)
          
          runtime.status = 'disconnected'
          runtime.lastError = errMsg
          this.emitStatus(uid)
          this.runtimes.delete(uid)
          await this.persistSessionStatus(uid, SESSION_STATUS.DISCONNECTED, runtime.phone)

          if (code === DisconnectReason.loggedOut) {
            logger.info(`[wa] User logged out: ${uid}`)
            await this.logout(uid)
            return
          }

          const failures = (this.consecutiveFailures.get(uid) || 0) + 1
          this.consecutiveFailures.set(uid, failures)

          // 405 loops usually indicate stale/invalid creds; force reset after a few retries.
          if (code === 405 && failures >= 3) {
            await this.resetAuthAndRestart(uid)
            return
          }

          // Automatic reconnection for transient reasons
          if (runtime.attempts < MAX_RECONNECT_ATTEMPTS) {
            this.scheduleReconnect(uid, runtime.attempts)
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
      const { text: spoken } = await aiService.generateResponse(context, context, prompt, uid)
      try {
        const { ogg, durationSec } = await synthesizeVoiceNote(spoken, { lang: 'hi', apiKey: CONFIG.GEMINI_API_KEY })
        await r.sock.sendMessage(call.from, { audio: ogg, ptt: true, mimetype: 'audio/ogg; codecs=opus', seconds: durationSec })
      } catch {
        await r.sock.sendMessage(call.from, { text: spoken }).catch(() => {})
      }
    }, 1500)
  }

  private async persistInbound(uid: string, from: string, content: string, type: string) {
    try {
      const saved = await messageService.saveMessage(uid, from, uid, content, type, false)
      this.emitNewMessage(uid, saved)
    } catch (e) {
      logger.warn('[wa] persistInbound failed:', (e as Error).message)
    }
  }

  private async persistOutbound(uid: string, to: string, content: string, type: string, model?: string) {
    try {
      const saved = await messageService.saveMessage(uid, uid, to, content, type, true, {
        text: content,
        model: model || '',
        tokensUsed: 0,
        processedAt: Date.now(),
      })
      this.emitNewMessage(uid, saved)
    } catch (e) {
      logger.warn('[wa] persistOutbound failed:', (e as Error).message)
    }
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
    const systemPrompt = cfg?.systemPrompt || DEFAULT_SYSTEM_PROMPT
    const forwardNumber = cfg?.callForwarding?.phoneNumber || ''
    const prompt = buildPromptWithForwarding(systemPrompt, forwardNumber)

    const text = content.conversation || content.extendedTextMessage?.text || content.imageMessage?.caption || content.videoMessage?.caption || ''

    try {
      if (content.audioMessage) {
        logger.info(`[wa] audio received from ${jid} mime=${content.audioMessage.mimetype}`)
        await this.persistInbound(uid, jid, text || '🎙️ voice note', MESSAGE_TYPE.AUDIO)
        await r.sock.sendPresenceUpdate('composing', jid).catch(() => undefined)
        try {
          const buf = await downloadMediaMessage(msg, 'buffer', {}) as Buffer
          logger.info(`[wa] audio ${buf.length}b — converting → mp3`)
          const mp3Buf = await convertToMp3(buf, 'ogg')
          logger.info(`[wa] mp3 ${mp3Buf.length}b — sending to Gemini`)
          const { text: replyText, model } = await aiService.generateFromAudio(mp3Buf, prompt, uid, 'audio/mp3')
          logger.info(`[wa] audio reply via ${model}`)
          await this.sendVoiceReply(uid, jid, replyText)
          await this.persistOutbound(uid, jid, replyText, MESSAGE_TYPE.AUDIO, model)
        } catch (e) {
          logger.error('[wa] audio failed:', (e as Error).message)
          await this.sendFallbackReply(uid, jid)
        }
        return
      }

      if (content.imageMessage) {
        logger.info(`[wa] image received from ${jid} mime=${content.imageMessage.mimetype}`)
        await this.persistInbound(uid, jid, text || '🖼️ image', MESSAGE_TYPE.IMAGE)
        await r.sock.sendPresenceUpdate('composing', jid).catch(() => undefined)
        try {
          const buf = await downloadMediaMessage(msg, 'buffer', {}) as Buffer
          logger.info(`[wa] image ${buf.length}b — sending to Gemini`)
          const mime = content.imageMessage.mimetype || 'image/jpeg'
          const { text: replyText, model } = await aiService.analyzeImage(
            buf,
            text || 'Is image mein kya hai? Detail mein, natural Hinglish mein batao.',
            prompt,
            mime
          )
          logger.info(`[wa] image reply via ${model}`)
          await r.sock.sendMessage(jid, { text: replyText })
          await this.persistOutbound(uid, jid, replyText, MESSAGE_TYPE.TEXT, model)
        } catch (e) {
          logger.error('[wa] image failed:', (e as Error).message)
          await this.sendFallbackReply(uid, jid)
        }
        return
      }

      if (content.videoMessage) {
        logger.info(`[wa] video received from ${jid} mime=${content.videoMessage.mimetype}`)
        await this.persistInbound(uid, jid, text || '📹 video', MESSAGE_TYPE.VIDEO)
        await r.sock.sendPresenceUpdate('composing', jid).catch(() => undefined)
        try {
          const buf = await downloadMediaMessage(msg, 'buffer', {}) as Buffer
          const mime = content.videoMessage.mimetype || 'video/mp4'
          const { text: replyText, model } = await aiService.analyzeVideo(buf, text || '', prompt, mime)
          logger.info(`[wa] video reply via ${model}`)
          await r.sock.sendMessage(jid, { text: replyText })
          await this.persistOutbound(uid, jid, replyText, MESSAGE_TYPE.TEXT, model)
        } catch (e) {
          logger.error('[wa] video failed:', (e as Error).message)
          await this.sendFallbackReply(uid, jid)
        }
        return
      }

      if (!text.trim()) return
      await this.persistInbound(uid, jid, text, MESSAGE_TYPE.TEXT)
      await r.sock.sendPresenceUpdate('composing', jid).catch(() => undefined)

      // Image generation detection — check before regular AI response
      if (isImageGenRequest(text)) {
        try {
          const cleanedPrompt = stripImageGenTriggers(text) || text
          const imgResult = await aiService.generateImage(cleanedPrompt)
          if (imgResult) {
            await r.sock.sendMessage(jid, {
              image: Buffer.from(imgResult.data, 'base64'),
              mimetype: imgResult.mimeType,
              caption: `🎨 ${imgResult.model}`,
            })
            await this.persistOutbound(uid, jid, `🎨 generated image (${imgResult.model})`, MESSAGE_TYPE.IMAGE, imgResult.model)
          } else {
            const { text: reply, model } = await aiService.generateResponse(text, text, prompt, uid)
            await r.sock.sendMessage(jid, { text: reply })
            await this.persistOutbound(uid, jid, reply, MESSAGE_TYPE.TEXT, model)
          }
        } catch (e) {
          logger.error('[wa] image gen failed:', (e as Error).message)
          await this.sendFallbackReply(uid, jid)
        }
        return
      }

      try {
        const { text: replyText, model } = await aiService.generateResponse(text, text, prompt, uid)
        await r.sock.sendMessage(jid, { text: replyText })
        await this.persistOutbound(uid, jid, replyText, MESSAGE_TYPE.TEXT, model)
      } catch (e) {
        logger.error('[wa] text AI failed:', (e as Error).message)
        await this.sendFallbackReply(uid, jid)
      }
    } catch (outer) {
      logger.error('[wa] handleIncomingMessage outer failure:', (outer as Error).message)
      await this.sendFallbackReply(uid, jid)
    }
  }

  private async sendFallbackReply(uid: string, jid: string) {
    const r = this.runtimes.get(uid)
    if (!r || r.status !== 'connected') return
    const fallback = '⚠️ thoda issue aaya, please dobara try karein. — SQL 💉'
    try {
      await r.sock.sendMessage(jid, { text: fallback })
      await this.persistOutbound(uid, jid, fallback, MESSAGE_TYPE.TEXT, 'fallback')
    } catch (e) {
      logger.warn('[wa] fallback reply send failed:', (e as Error).message)
    }
  }

  private async sendVoiceReply(uid: string, jid: string, text: string) {
    const r = this.runtimes.get(uid)
    if (!r) return
    try {
      const { ogg, durationSec } = await synthesizeVoiceNote(text, {
        lang: 'hi',
        apiKey: CONFIG.GEMINI_API_KEY,
      })
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

const IMG_GEN_TRIGGERS = [
  'generate image', 'create image', 'make image', 'make a picture', 'draw ', 'paint ',
  'image banao', 'image bana do', 'image bana de', 'ek image', 'photo banao', 'photo bana',
  'picture banao', 'picture bana', 'tasveer', 'tasweer', 'wallpaper banao', 'illustration',
  'ek photo', 'design banao', 'logo banao', 'art banao',
]

function isImageGenRequest(text: string): boolean {
  const t = text.toLowerCase()
  return IMG_GEN_TRIGGERS.some(kw => t.includes(kw))
}

function stripImageGenTriggers(text: string): string {
  let out = text
  for (const kw of IMG_GEN_TRIGGERS) {
    out = out.replace(new RegExp(kw, 'ig'), '')
  }
  return out.replace(/\s+/g, ' ').trim()
}

function buildPromptWithForwarding(systemPrompt: string, forward: string): string {
  const base = systemPrompt?.trim() || DEFAULT_SYSTEM_PROMPT
  const urgent = forward ? `- If urgent, tell them to call ${forward}.` : ''
  return `${base}

Multimodal capability rules:
- Reply in short, natural Hinglish unless the user clearly writes in another language.
- Stay in character — never break role.
- You can read text, see images, watch short videos, and hear voice notes.
- For voice notes, reply with a voice note (text → TTS handles this automatically).
- For image generation, the system intercepts requests with words like "image banao",
  "generate image", "draw", "photo banao" and renders via Imagen 3 / Gemini image-gen.
${urgent}`
}

export const DEFAULT_SYSTEM_PROMPT = `My name is SQL 💉. I am a highly advanced multimodal AI created by SQL RIZWAN. I manage this WhatsApp account 24/7.

What I can do:
- Read and reply to text messages.
- See images you send and describe / analyze them in detail.
- Watch short videos and tell you what's happening.
- Listen to voice notes and reply with my own voice note.
- Generate fresh images from your description (try: "image banao a sunset on a beach" or "generate image of a cat astronaut").

Personality:
- Reply in friendly Hinglish by default.
- Be concise, warm, and helpful.
- Never claim to be a human — I'm SQL, the AI manager.`


export default new BaileyService()
