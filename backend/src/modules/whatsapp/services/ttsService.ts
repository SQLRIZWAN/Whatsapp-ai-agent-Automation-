import { GoogleGenerativeAI } from '@google/generative-ai'
import googleTTS from 'google-tts-api'
import ffmpeg from 'fluent-ffmpeg'
import ffmpegStatic from 'ffmpeg-static'
import { PassThrough, Readable } from 'stream'
import logger from '@shared/utils/logger'
import { CONFIG } from '@shared/constants/config'

if (ffmpegStatic) {
  ffmpeg.setFfmpegPath(ffmpegStatic as unknown as string)
}

// ── Gemini TTS (primary — works reliably on Render) ───────────

const GEMINI_TTS_MODELS = [
  'gemini-2.5-flash-preview-tts',
  'gemini-2.0-flash-preview-tts',
]

async function synthesizeWithGeminiTTS(text: string, apiKey: string): Promise<Buffer> {
  const genAI = new GoogleGenerativeAI(apiKey)
  let lastErr: Error | null = null

  for (const modelName of GEMINI_TTS_MODELS) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName } as never)
      const result = await (model as any).generateContent({
        contents: [{ role: 'user', parts: [{ text }] }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Charon' }, // Deep male voice
            },
          },
        },
      })
      const parts = result.response.candidates?.[0]?.content?.parts || []
      for (const part of parts) {
        if (part.inlineData?.data) {
          logger.info(`[tts] Gemini TTS OK via ${modelName}`)
          return Buffer.from(part.inlineData.data, 'base64')
        }
      }
      throw new Error('No audio data in response')
    } catch (e) {
      lastErr = e as Error
      logger.warn(`[tts] Gemini TTS ${modelName} failed: ${(e as Error).message.substring(0, 100)}`)
    }
  }
  throw lastErr || new Error('All Gemini TTS models failed')
}

// Convert raw PCM/WAV buffer (from Gemini TTS) → OGG/Opus for WhatsApp PTT
async function rawToOpus(input: Buffer, inputFormat = 'wav'): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const src = Readable.from(input)
    const out = new PassThrough()
    const chunks: Buffer[] = []
    out.on('data', (c) => chunks.push(c as Buffer))
    out.on('end', () => resolve(Buffer.concat(chunks)))
    out.on('error', reject)

    ffmpeg(src)
      .inputFormat(inputFormat)
      .audioCodec('libopus')
      .audioBitrate('64k')
      .format('ogg')
      .on('error', (err) => {
        logger.error('[tts] rawToOpus error', err)
        reject(err)
      })
      .pipe(out, { end: true })
  })
}

// ── ElevenLabs TTS (layer 2 fallback) ───────────────────────

async function synthesizeWithElevenLabs(text: string): Promise<Buffer> {
  const key = CONFIG.ELEVENLABS_API_KEY
  if (!key) throw new Error('ELEVENLABS_API_KEY not set — skipping')

  const voiceId = CONFIG.ELEVENLABS_VOICE_ID
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream?output_format=mp3_44100_64`

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 8000)
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'xi-api-key': key,
        'Content-Type': 'application/json',
        Accept: 'audio/mpeg',
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: { stability: 0.5, similarity_boost: 0.75 },
      }),
      signal: controller.signal,
    })
    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      throw new Error(`ElevenLabs HTTP ${res.status}: ${detail.substring(0, 120)}`)
    }
    const buf = Buffer.from(new Uint8Array(await res.arrayBuffer()))
    if (!buf.length) throw new Error('ElevenLabs returned empty audio')
    logger.info(`[tts] ElevenLabs OK (${buf.length}b)`)
    return buf
  } finally {
    clearTimeout(timer)
  }
}

async function elevenMp3ToOpus(mp3: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const input = Readable.from(mp3)
    const output = new PassThrough()
    const chunks: Buffer[] = []
    output.on('data', (c) => chunks.push(c as Buffer))
    output.on('end', () => resolve(Buffer.concat(chunks)))
    output.on('error', reject)
    ffmpeg(input)
      .inputFormat('mp3')
      .audioCodec('libopus')
      .audioBitrate('64k')
      .format('ogg')
      .on('error', (err) => {
        logger.error('[tts] elevenMp3ToOpus error', err)
        reject(err)
      })
      .pipe(output, { end: true })
  })
}

// ── Google Translate TTS (layer 3 fallback) ──────────────────

async function fetchTtsUrl(url: string, retries = 3): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'Referer': 'https://translate.google.com/',
          'Accept': 'audio/mpeg,audio/*;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9,hi;q=0.8',
        },
      })
      if (res.ok) return res
      if (i < retries - 1) await new Promise(r => setTimeout(r, 600 * (i + 1)))
    } catch (e) {
      if (i === retries - 1) throw e
      await new Promise(r => setTimeout(r, 600 * (i + 1)))
    }
  }
  throw new Error('TTS fetch failed after all retries')
}

async function fetchMp3Chunks(text: string, lang: string): Promise<Buffer> {
  const urls = googleTTS.getAllAudioUrls(text, {
    lang,
    slow: false,
    host: 'https://translate.google.com',
    splitPunct: ',.?!',
  })
  const buffers: Buffer[] = []
  for (const item of urls) {
    const res = await fetchTtsUrl(item.url)
    if (!res.ok) throw new Error(`TTS fetch failed: ${res.status}`)
    buffers.push(Buffer.from(new Uint8Array(await res.arrayBuffer())))
  }
  return Buffer.concat(buffers)
}

async function mp3ToOpusMale(mp3: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const input = Readable.from(mp3)
    const output = new PassThrough()
    const chunks: Buffer[] = []
    output.on('data', (c) => chunks.push(c as Buffer))
    output.on('end', () => resolve(Buffer.concat(chunks)))
    output.on('error', reject)

    ffmpeg(input)
      .inputFormat('mp3')
      .audioFilters(['asetrate=44100*0.87', 'aresample=44100', 'atempo=1.15'])
      .audioCodec('libopus')
      .audioBitrate('64k')
      .format('ogg')
      .on('error', (err) => {
        logger.error('[tts] ffmpeg error', err)
        reject(err)
      })
      .pipe(output, { end: true })
  })
}

// ── Public API ────────────────────────────────────────────────

export interface TTSResult {
  ogg: Buffer
  durationSec: number
}

// Convert any audio buffer (OGG/Opus from WhatsApp) to MP3 for Gemini audio input.
export async function convertToMp3(input: Buffer, inputFormat = 'ogg'): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const src = Readable.from(input)
    const out = new PassThrough()
    const chunks: Buffer[] = []
    out.on('data', (c) => chunks.push(c as Buffer))
    out.on('end', () => resolve(Buffer.concat(chunks)))
    out.on('error', reject)

    ffmpeg(src)
      .inputFormat(inputFormat)
      .audioCodec('libmp3lame')
      .audioBitrate('64k')
      .format('mp3')
      .on('error', (err) => {
        logger.error('[tts] convertToMp3 error', err)
        reject(err)
      })
      .pipe(out, { end: true })
  })
}

export async function synthesizeVoiceNote(
  text: string,
  opts: { lang?: string; apiKey?: string } = {}
): Promise<TTSResult> {
  const clipped = text.length > 900 ? text.slice(0, 897) + '…' : text
  const durationSec = Math.max(1, Math.round(clipped.length / 16))
  const errors: string[] = []

  // Layer 1 — Gemini TTS (best quality on server IPs)
  if (opts.apiKey) {
    try {
      const rawBuf = await synthesizeWithGeminiTTS(clipped, opts.apiKey)
      const ogg = await rawToOpus(rawBuf, 'wav')
      return { ogg, durationSec }
    } catch (e) {
      const m = (e as Error).message
      errors.push(`gemini: ${m.substring(0, 80)}`)
      logger.warn(`[tts] layer1 Gemini failed: ${m}`)
    }
  } else {
    errors.push('gemini: no apiKey provided')
  }

  // Layer 2 — ElevenLabs (if key configured)
  if (CONFIG.ELEVENLABS_API_KEY) {
    try {
      const mp3 = await synthesizeWithElevenLabs(clipped)
      const ogg = await elevenMp3ToOpus(mp3)
      return { ogg, durationSec }
    } catch (e) {
      const m = (e as Error).message
      errors.push(`elevenlabs: ${m.substring(0, 80)}`)
      logger.warn(`[tts] layer2 ElevenLabs failed: ${m}`)
    }
  } else {
    logger.debug('[tts] layer2 ElevenLabs skipped — no key')
  }

  // Layer 3 — Google Translate TTS
  try {
    const lang = opts.lang || detectLang(text)
    logger.info(`[tts] layer3 gTTS (${lang}, ${clipped.length} chars)`)
    const mp3 = await fetchMp3Chunks(clipped, lang)
    const ogg = await mp3ToOpusMale(mp3)
    return { ogg, durationSec }
  } catch (e) {
    const m = (e as Error).message
    errors.push(`gtts: ${m.substring(0, 80)}`)
    logger.error(`[tts] layer3 gTTS failed: ${m}`)
  }

  throw new Error(`[tts] all layers failed — ${errors.join(' | ')}`)
}

// Lightweight liveness probe for /health — checks if at least one layer is wired.
export function ttsReadiness(): { gemini: boolean; elevenlabs: boolean; gtts: boolean } {
  return {
    gemini: !!CONFIG.GEMINI_API_KEY,
    elevenlabs: !!CONFIG.ELEVENLABS_API_KEY,
    gtts: true, // gTTS has no key — always nominally "ready"
  }
}

function detectLang(text: string): string {
  if (/[ऀ-ॿ]/.test(text)) return 'hi'
  return 'hi'
}
