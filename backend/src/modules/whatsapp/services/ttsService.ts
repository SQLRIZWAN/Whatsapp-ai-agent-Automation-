import { GoogleGenerativeAI } from '@google/generative-ai'
import googleTTS from 'google-tts-api'
import ffmpeg from 'fluent-ffmpeg'
import ffmpegStatic from 'ffmpeg-static'
import { PassThrough, Readable } from 'stream'
import logger from '@shared/utils/logger'

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

// ── Google Translate TTS (fallback) ──────────────────────────

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

  // Primary: Gemini TTS — reliable on server IPs, no rate-limit issues
  if (opts.apiKey) {
    try {
      const rawBuf = await synthesizeWithGeminiTTS(clipped, opts.apiKey)
      const ogg = await rawToOpus(rawBuf, 'wav')
      return { ogg, durationSec }
    } catch (e) {
      logger.warn(`[tts] Gemini TTS failed, falling back to Google Translate: ${(e as Error).message}`)
    }
  }

  // Fallback: Google Translate TTS
  const lang = opts.lang || detectLang(text)
  logger.info(`[tts] Google Translate TTS (${lang}, ${clipped.length} chars)`)
  const mp3 = await fetchMp3Chunks(clipped, lang)
  const ogg = await mp3ToOpusMale(mp3)
  return { ogg, durationSec }
}

function detectLang(text: string): string {
  if (/[ऀ-ॿ]/.test(text)) return 'hi'
  return 'hi'
}
