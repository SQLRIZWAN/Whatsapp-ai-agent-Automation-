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
import { synthesizeVoiceNote, convertToMp3 } from './ttsService'
import aiService from './aiService'
import configService from '../../config/services/configService'
import messageService from './messageService'
import callService from './callService'

type Status = 'disconnected' | 'connecting' | 'qr' | 'connected'

// After this many consecutive failures we give up and wait for manual restart.
const MAX_RECONNECT_ATTEMPTS = 25

interface SessionRuntime {
  sock: WASocket
  status: Status
  qrDataUrl: string | null
  phone: string | null
  reconnecting: boolean
  attempts: number
  lastError: string | null
  connectedAt: number | null
}

class BaileyService {
  private runtimes = new Map<string, SessionRuntime>()
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
    if (this.runtimes.has(uid)) {
      return this.getStatusSnapshot(uid)
    }
    await this.spawn(uid)
    return this.getStatusSnapshot(uid)
  }

  async stop(uid: string): Promise<void> {
    const r = this.runtimes.get(uid)
    if (!r) return
    try {
      r.sock.end(new Error('user_requested_stop'))
    } catch (e) {
      logger.warn('[wa] sock.end error', e as Error)
    }
    this.runtimes.delete(uid)
    await this.persistSessionStatus(uid, SESSION_STATUS.DISCONNECTED, null)
  }

  async logout(uid: string): Promise<void> {
    const r = this.runtimes.get(uid)
    try {
      if (r) await r.sock.logout().catch(() => undefined)
    } finally {
      this.runtimes.delete(uid)
      try {
        const { clear } = await useFirestoreAuthState(uid)
        await clear()
      } catch (e) {
        logger.warn('[wa] failed to clear auth state', e as Error)
      }
      await this.persistSessionStatus(uid, SESSION_STATUS.DISCONNECTED, null)
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
      logger.info(`[wa] using WA web version ${this.cachedWAVersion.join('.')}`)
    } catch (e) {
      logger.warn('[wa] fetchLatestBaileysVersion failed, falling back to 2.3000.x', e as Error)
      this.cachedWAVersion = [2, 3000, 1027054683]
    }
    return this.cachedWAVersion
  }

  private async spawn(uid: string, prevAttempts = 0): Promise<void> {
    logger.info(`[wa] spawning connection for ${uid} (attempt ${prevAttempts + 1})`)
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
      keepAliveIntervalMs: 25_000,
    })

    const runtime: SessionRuntime = {
      sock,
      status: 'connecting',
      qrDataUrl: null,
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
        try {
          const dataUrl = await QRCode.toDataURL(qr, { margin: 1, width: 360 })
          runtime.qrDataUrl = dataUrl
          runtime.status = 'qr'
          logger.info(`[wa] QR generated for ${uid}`)
          this.emitStatus(uid)
          await this.persistSessionStatus(uid, SESSION_STATUS.CONNECTING, null)
        } catch (e) {
          logger.error('[wa] QR encode error', e as Error)
        }
      }

      if (connection === 'open') {
        runtime.status = 'connected'
        runtime.qrDataUrl = null
        runtime.phone = sock.user?.id?.split(':')[0] || null
        runtime.connectedAt = Date.now()
        // Reset attempt counter so future disconnects get a fresh slate.
        runtime.attempts = 0
        logger.info(`[wa] connected as ${runtime.phone} for ${uid}`)
        this.emitStatus(uid)
        await this.persistSessionStatus(uid, SESSION_STATUS.CONNECTED, runtime.phone)
      }

      if (connection === 'close') {
        const code = (lastDisconnect?.error as Boom | undefined)?.output?.statusCode
        const errMsg = (lastDisconnect?.error as Error | undefined)?.message || String(code)
        const loggedOut = code === DisconnectReason.loggedOut
        runtime.status = 'disconnected'
        runtime.lastError = errMsg
        runtime.connectedAt = null
        this.emitStatus(uid)
        logger.warn(`[wa] connection closed for ${uid} (code=${code}, msg=${errMsg})`)
        this.runtimes.delete(uid)

        if (loggedOut) {
          logger.warn(`[wa] user logged out (${uid}); clearing auth state`)
          try {
            const { clear } = await useFirestoreAuthState(uid)
            await clear()
          } catch {
            // ignore
          }
          await this.persistSessionStatus(uid, SESSION_STATUS.DISCONNECTED, null)
          return
        }

        if (runtime.attempts >= MAX_RECONNECT_ATTEMPTS) {
          logger.error(`[wa] giving up after ${runtime.attempts} attempts for ${uid}`)
          await this.persistSessionStatus(uid, SESSION_STATUS.DISCONNECTED, null)
          return
        }

        // 405 (methodNotAllowed) often means stale auth — clear it once.
        if (code === 405 && runtime.attempts === 1) {
          logger.warn('[wa] got 405; clearing stored creds and retrying fresh')
          try {
            const { clear } = await useFirestoreAuthState(uid)
            await clear()
          } catch {
            // ignore
          }
        }

        if (!runtime.reconnecting) {
          runtime.reconnecting = true
          const delay = Math.min(1000 * 2 ** Math.min(runtime.attempts, 6), 60_000)
          logger.info(`[wa] reconnecting in ${delay}ms (attempt ${runtime.attempts + 1})`)
          setTimeout(() => {
            this.spawn(uid, runtime.attempts).catch((e) =>
              logger.error('[wa] respawn failed', e)
            )
          }, delay)
        }
      }
    })

    sock.ev.on('call', async (calls) => {
      for (const call of calls) {
        if (call.status !== 'offer') continue
        await this.handleIncomingCall(uid, call).catch((e) =>
          logger.error('[wa] call handler error', e)
        )
      }
    })

    sock.ev.on('messages.upsert', async ({ messages, type }) => {
      if (type !== 'notify') return
      for (const msg of messages) {
        if (!msg.message || msg.key.fromMe) continue
        await this.handleIncomingMessage(uid, msg).catch((e) =>
          logger.error('[wa] message handler error', e)
        )
      }
    })
  }

  private async handleIncomingCall(
    uid: string,
    call: { id: string; from: string; isVideo?: boolean; status: string }
  ): Promise<void> {
    const r = this.runtimes.get(uid)
    if (!r) return
    logger.info(`[wa] incoming ${call.isVideo ? 'video' : 'voice'} call from ${call.from}`)

    try {
      await r.sock.rejectCall(call.id, call.from)
    } catch (e) {
      logger.warn('[wa] rejectCall failed', e as Error)
    }

    let forwardNumber = ''
    let systemPrompt = ''
    try {
      const cfg = await configService.getConfiguration(uid)
      forwardNumber = cfg?.callForwarding?.phoneNumber || ''
      systemPrompt = cfg?.systemPrompt || ''
    } catch {
      // ignore
    }

    try {
      await callService.saveCall(
        uid,
        call.from,
        uid,
        'incoming',
        'declined',
        0,
        undefined,
        { decision: 'auto_declined', reason: 'baileys cannot answer calls', timestamp: Date.now() },
        !!call.isVideo
      )
    } catch (e) {
      logger.warn('[wa] saveCall failed', e as Error)
    }

    setTimeout(async () => {
      const callType = call.isVideo ? 'video' : 'voice'
      const forwardHint = forwardNumber
        ? `Agar bahut urgent hai to ${forwardNumber} pe call kar sakte ho.`
        : ''

      // AI-generated call rejection — no fallback, silence if AI fails
      try {
        const prompt = buildPromptWithForwarding(systemPrompt, forwardNumber)
        const context = `The user just made a ${callType} call. Reject it politely, explain you can't answer live calls, ask them to send a voice note or text. Keep it under 40 words in Hinglish. ${forwardHint}`
        const { text: spoken } = await aiService.generateResponse(context, context, prompt)
        try {
          const { ogg, durationSec } = await synthesizeVoiceNote(spoken, { lang: 'hi' })
          await r.sock.sendMessage(call.from, {
            audio: ogg,
            ptt: true,
            mimetype: 'audio/ogg; codecs=opus',
            seconds: durationSec,
          })
        } catch {
          await r.sock.sendMessage(call.from, { text: spoken }).catch(() => undefined)
        }
      } catch (e) {
        logger.error('[wa] post-call AI reply failed', e as Error)
      }
    }, 1500)
  }

  private async handleIncomingMessage(uid: string, msg: WAMessage): Promise<void> {
    const r = this.runtimes.get(uid)
    if (!r) return
    const jid = msg.key.remoteJid
    if (!jid) return
    if (jid.endsWith('@g.us') || jid === 'status@broadcast') return

    const m = msg.message
    if (!m) return

    const content: proto.IMessage =
      m.ephemeralMessage?.message ||
      m.viewOnceMessage?.message ||
      m.viewOnceMessageV2?.message ||
      m.viewOnceMessageV2Extension?.message ||
      m

    const cfg = await configService.getConfiguration(uid).catch(() => null)
    const systemPrompt: string = cfg?.systemPrompt || ''
    const forwardingNumber: string = cfg?.callForwarding?.phoneNumber || ''
    const prompt = buildPromptWithForwarding(systemPrompt, forwardingNumber)

    const text =
      content.conversation ||
      content.extendedTextMessage?.text ||
      content.imageMessage?.caption ||
      content.videoMessage?.caption ||
      ''

    // ── Audio → convert OGG→MP3, then Gemini audio reply ──────────────────
    if (content.audioMessage) {
      try {
        await r.sock.sendPresenceUpdate('composing', jid)
        const buf = (await downloadMediaMessage(msg, 'buffer', {})) as Buffer
        const mp3Buf = await convertToMp3(buf, 'ogg')
        const base64 = mp3Buf.toString('base64')
        const { text: replyText } = await aiService.generateFromAudio(base64, prompt)
        await this.sendVoiceReply(uid, jid, replyText)
        await messageService.saveMessage(uid, jid, uid, '[voice message]', 'audio', false)
        await messageService.saveMessage(uid, uid, jid, replyText, 'audio', true, {
          text: replyText,
          model: 'gemini-audio',
          tokensUsed: 0,
          processedAt: Date.now(),
        })
        return
      } catch (e) {
        logger.error('[wa] audio handling error:', (e as Error)?.message || e)
        return
      }
    }

    // ── Image → vision reply ───────────────────────────────────────────────
    if (content.imageMessage) {
      try {
        await r.sock.sendPresenceUpdate('composing', jid)
        const buf = (await downloadMediaMessage(msg, 'buffer', {})) as Buffer
        const base64 = buf.toString('base64')
        const imageMime = content.imageMessage.mimetype || 'image/jpeg'
        const { text: replyText } = await aiService.analyzeImage(
          base64,
          text || 'Is image ko dekho aur friendly reply do.',
          prompt,
          imageMime
        )
        await r.sock.sendMessage(jid, { text: replyText })
        await messageService.saveMessage(uid, jid, uid, text || '[image]', 'image', false)
        await messageService.saveMessage(uid, uid, jid, replyText, 'text', true, {
          text: replyText,
          model: 'gemini-vision',
          tokensUsed: 0,
          processedAt: Date.now(),
        })
        return
      } catch (e) {
        logger.error('[wa] image handling error:', (e as Error)?.message || e)
        return
      }
    }

    // ── Video → vision reply ───────────────────────────────────────────────
    if (content.videoMessage) {
      try {
        await r.sock.sendPresenceUpdate('composing', jid)
        const buf = (await downloadMediaMessage(msg, 'buffer', {})) as Buffer
        // Only send to Gemini if size is reasonable (< 15 MB to stay in free tier).
        if (buf.byteLength > 15 * 1024 * 1024) {
          return
        }
        const base64 = buf.toString('base64')
        const videoMime = content.videoMessage.mimetype || 'video/mp4'
        const { text: replyText } = await aiService.analyzeVideo(
          base64,
          text || '',
          prompt,
          videoMime
        )
        await r.sock.sendMessage(jid, { text: replyText })
        await messageService.saveMessage(uid, jid, uid, text || '[video]', 'video', false)
        await messageService.saveMessage(uid, uid, jid, replyText, 'text', true, {
          text: replyText,
          model: 'gemini-vision',
          tokensUsed: 0,
          processedAt: Date.now(),
        })
        return
      } catch (e) {
        logger.error('[wa] video handling error:', (e as Error)?.message || e)
        return
      }
    }

    // ── Text ───────────────────────────────────────────────────────────────
    if (!text.trim()) return
    try {
      await r.sock.sendPresenceUpdate('composing', jid)
      logger.info(`[wa] text message from ${jid}: "${text.substring(0, 50)}"`)
      const { text: replyText, model } = await aiService.generateResponse(text, text, prompt)
      logger.info(`[wa] AI reply via ${model}: "${replyText.substring(0, 50)}"`)
      await r.sock.sendMessage(jid, { text: replyText })
      await messageService.saveMessage(uid, jid, uid, text, 'text', false)
      await messageService.saveMessage(uid, uid, jid, replyText, 'text', true, {
        text: replyText,
        model: 'gemini-text',
        tokensUsed: 0,
        processedAt: Date.now(),
      })
    } catch (e) {
      logger.error('[wa] text reply error:', (e as Error)?.message || e)
    }
  }

  private async sendVoiceReply(uid: string, jid: string, text: string): Promise<void> {
    const r = this.runtimes.get(uid)
    if (!r) return
    try {
      const { ogg, durationSec } = await synthesizeVoiceNote(text, { lang: 'hi' })
      await r.sock.sendMessage(jid, {
        audio: ogg,
        ptt: true,
        mimetype: 'audio/ogg; codecs=opus',
        seconds: durationSec,
      })
    } catch (e) {
      logger.error('[wa] voice reply failed, falling back to text', e as Error)
      await r.sock.sendMessage(jid, { text })
    }
  }

  async sendMessage(uid: string, to: string, message: string): Promise<boolean> {
    const r = this.runtimes.get(uid)
    if (!r || r.status !== 'connected') return false
    const jid = normalizeJid(to)
    await r.sock.sendMessage(jid, { text: message })
    return true
  }
}

function normalizeJid(input: string): string {
  if (input.includes('@')) return input
  const digits = input.replace(/\D/g, '')
  return `${digits}@s.whatsapp.net`
}

function buildPromptWithForwarding(systemPrompt: string, forward: string): string {
  const basePersona =
    systemPrompt?.trim() ||
    'My name is SQL 💉. I am a highly advanced AI, and I was created by SQL RIZWAN. I manage this WhatsApp account.'

  const urgentLine = forward
    ? `- If the user sounds urgent — uses words like "urgent", "emergency", "zaroori", "jaldi", "important" — include this line at the end: "Agar bahut urgent hai to Rizwan bhai ko ${forward} pe call kar lein."`
    : '- If the user sounds urgent, politely say you will flag it to Rizwan bhai.'

  const rules = [
    '',
    'Rules you must follow:',
    '- Always reply in short, natural Hinglish (Hindi in Roman script, simple, friendly).',
    '- Stay in character as "SQL 💉". Never say you are Google or Gemini.',
    '- If user asks why you don\'t answer calls, reply: "Abhi Rizwan bhai mujhe bana rahe hain, mera development aur update ka kaam abhi chal raha hai. Isliye aap mujhse voice message ya text mein baat kar sakte hain."',
    urgentLine,
    '- Keep replies under 60 words unless the user specifically asks for details.',
  ].join('\n')

  return `${basePersona}\n${rules}`
}

export default new BaileyService()
