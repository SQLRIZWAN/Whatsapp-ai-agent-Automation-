import googleTTS from 'google-tts-api'
import ffmpeg from 'fluent-ffmpeg'
import ffmpegStatic from 'ffmpeg-static'
import { PassThrough, Readable } from 'stream'
import logger from '@shared/utils/logger'
import { CONFIG } from '@shared/constants/config'
import aiService from './aiService'

if (ffmpegStatic) {
  ffmpeg.setFfmpegPath(ffmpegStatic as unknown as string)
}

// ── Gemini TTS (primary — via REST helper in aiService) ───────

// Gemini TTS returns raw 16-bit PCM (signed little-endian, mono, 24 kHz by
// default). Headers must be added before ffmpeg can transcode it.
function pcmRateFromMime(mime: string): number {
  const m = mime.match(/rate=(\d+)/i)
  return m ? parseInt(m[1], 10) : 24_000
}

function wrapPcmAsWav(pcm: Buffer, sampleRate = 24_000, channels = 1, bitsPerSample = 16): Buffer {
  const byteRate = sampleRate * channels * (bitsPerSample / 8)
  const blockAlign = channels * (bitsPerSample / 8)
  const dataSize = pcm.length
  const header = Buffer.alloc(44)
  header.write('RIFF', 0)
  header.writeUInt32LE(36 + dataSize, 4)
  header.write('WAVE', 8)
  header.write('fmt ', 12)
  header.writeUInt32LE(16, 16)            // fmt chunk size
  header.writeUInt16LE(1, 20)             // PCM
  header.writeUInt16LE(channels, 22)
  header.writeUInt32LE(sampleRate, 24)
  header.writeUInt32LE(byteRate, 28)
  header.writeUInt16LE(blockAlign, 32)
  header.writeUInt16LE(bitsPerSample, 34)
  header.write('data', 36)
  header.writeUInt32LE(dataSize, 40)
  return Buffer.concat([header, pcm])
}

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

export interface SynthOpts {
  lang?: string
  apiKey?: string
  voice?: string
}

export async function synthesizeVoiceNote(
  text: string,
  opts: SynthOpts = {}
): Promise<TTSResult> {
  const clipped = text.length > 900 ? text.slice(0, 897) + '…' : text
  const durationSec = Math.max(1, Math.round(clipped.length / 16))
  const errors: string[] = []
  const voice = opts.voice || 'Charon'

  // Layer 1 — Gemini AUDIO modality via REST (covered by aiService).
  if (opts.apiKey || CONFIG.GEMINI_API_KEY) {
    try {
      const audio = await aiService.generateSpeech(clipped, voice)
      if (audio) {
        // Gemini returns raw signed-16-bit PCM mono. Wrap to WAV first.
        const sampleRate = pcmRateFromMime(audio.mimeType)
        const wav = wrapPcmAsWav(audio.data, sampleRate)
        const ogg = await rawToOpus(wav, 'wav')
        logger.info(`[tts] layer1 Gemini OK via ${audio.model} (${ogg.length}b ogg)`)
        return { ogg, durationSec }
      }
      errors.push('gemini: no audio returned')
    } catch (e) {
      const m = (e as Error).message
      errors.push(`gemini: ${m.substring(0, 100)}`)
      logger.warn(`[tts] layer1 Gemini failed: ${m}`)
    }
  } else {
    errors.push('gemini: no apiKey configured')
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

export function ttsReadiness(): { gemini: boolean; elevenlabs: boolean; gtts: boolean } {
  return {
    gemini: !!CONFIG.GEMINI_API_KEY,
    elevenlabs: !!CONFIG.ELEVENLABS_API_KEY,
    gtts: true,
  }
}

function detectLang(text: string): string {
  if (/[ऀ-ॿ]/.test(text)) return 'hi'
  return 'hi'
}
