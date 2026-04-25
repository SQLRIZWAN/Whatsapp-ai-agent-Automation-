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
import { synthesizeVoiceNote } from './ttsService'
import aiService from './aiService'
import configService from '../../config/services/configService'
import messageService from './messageService'
import callService from './callService'

type Status = 'disconnected' | 'connecting' | 'qr' | 'connected'

interface SessionRuntime {
  sock: WASocket
  status: Status
  qrDataUrl: string | null
  phone: string | null
  reconnecting: boolean
  attempts: number
  lastError: string | null
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

        // Hard cap reconnect attempts to avoid Render CPU storm.
        if (runtime.attempts >= 8) {
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
          const delay = Math.min(1000 * 2 ** runtime.attempts, 30_000)
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
    try {
      const cfg = await configService.getConfiguration(uid)
      forwardNumber = cfg?.callForwarding?.phoneNumber || ''
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
        {
          decision: 'auto_declined',
          reason: 'baileys cannot answer calls',
          timestamp: Date.now(),
        }
      )
    } catch (e) {
      logger.warn('[wa] saveCall failed', e as Error)
    }

    setTimeout(async () => {
      try {
        const spoken =
          'Main SQL 💉 hoon. Rizwan bhai abhi busy hain. Main live calls support nahi karta. ' +
          'Please apna message yahaan voice note ya text mein bhej dein, main turant reply karunga.'
        const { ogg, durationSec } = await synthesizeVoiceNote(spoken, { lang: 'hi' })
        await r.sock.sendMessage(call.from, {
          audio: ogg,
          ptt: true,
          mimetype: 'audio/ogg; codecs=opus',
          seconds: durationSec,
        })

        const textLine = forwardNumber
          ? `Main SQL 💉 — live calls off hain. Urgent ho to ${forwardNumber} par call kar lein, ya yahin message bhej dein — main reply karunga.`
          : 'Main SQL 💉 — live calls off hain. Apna message yahin bhej dein, main reply karunga.'

        await r.sock.sendMessage(call.from, { text: textLine })
      } catch (e) {
        logger.error('[wa] failed to send post-call voice note', e as Error)
        try {
          await r.sock.sendMessage(call.from, {
            text: 'Main SQL 💉 hoon, live calls support nahi. Apna message yahin bhejiye.',
          })
        } catch {
          // ignore
        }
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

    const cfg = await configService.getConfiguration(uid)
    const systemPrompt: string = cfg?.systemPrompt || ''
    const forwardingNumber: string = cfg?.callForwarding?.phoneNumber || ''
    const prompt = buildPromptWithForwarding(systemPrompt, forwardingNumber)

    const text =
      content.conversation ||
      content.extendedTextMessage?.text ||
      content.imageMessage?.caption ||
      content.videoMessage?.caption ||
      ''

    // Audio → voice reply via Gemini
    if (content.audioMessage) {
      try {
        const buf = (await downloadMediaMessage(msg, 'buffer', {})) as Buffer
        const base64 = buf.toString('base64')
        const mime = content.audioMessage.mimetype || 'audio/ogg'
        const { text: replyText } = await aiService.generateFromAudio(base64, mime, prompt)
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
        logger.error('[wa] audio handling error', e as Error)
        await r.sock.sendMessage(jid, {
          text: 'Voice message process nahi ho saki, please thoda der mein dubara bhej dein.',
        })
        return
      }
    }

    // Image → vision text reply
    if (content.imageMessage) {
      try {
        const buf = (await downloadMediaMessage(msg, 'buffer', {})) as Buffer
        const base64 = buf.toString('base64')
        const { text: replyText } = await aiService.analyzeImage(
          base64,
          text || 'Is image ko dekho aur friendly reply do.',
          prompt
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
        logger.error('[wa] image handling error', e as Error)
      }
    }

    // Text
    if (!text.trim()) return
    try {
      const { text: replyText } = await aiService.generateResponse(text, text, prompt)
      await r.sock.sendMessage(jid, { text: replyText })
      await messageService.saveMessage(uid, jid, uid, text, 'text', false)
      await messageService.saveMessage(uid, uid, jid, replyText, 'text', true, {
        text: replyText,
        model: 'gemini-text',
        tokensUsed: 0,
        processedAt: Date.now(),
      })
    } catch (e) {
      logger.error('[wa] text reply error', e as Error)
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
