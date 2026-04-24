import googleTTS from 'google-tts-api'
import ffmpeg from 'fluent-ffmpeg'
import ffmpegStatic from 'ffmpeg-static'
import { PassThrough, Readable } from 'stream'
import logger from '@shared/utils/logger'

if (ffmpegStatic) {
  ffmpeg.setFfmpegPath(ffmpegStatic as unknown as string)
}

// Google Translate TTS has a ~200 char limit per request; split & concat.
async function fetchMp3Chunks(text: string, lang: string): Promise<Buffer> {
  const urls = googleTTS.getAllAudioUrls(text, {
    lang,
    slow: false,
    host: 'https://translate.google.com',
    splitPunct: ',.?!',
  })

  const buffers: Buffer[] = []
  for (const item of urls) {
    const res = await fetch(item.url)
    if (!res.ok) {
      throw new Error(`TTS fetch failed: ${res.status}`)
    }
    const arr = new Uint8Array(await res.arrayBuffer())
    buffers.push(Buffer.from(arr))
  }
  return Buffer.concat(buffers)
}

// Convert MP3 buffer to OGG/Opus buffer suitable for WhatsApp PTT,
// and pitch-shift slightly down to sound more masculine.
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
      // Lower pitch ~15% while keeping tempo, to give a deeper/male-sounding voice.
      // atempo 1.15 keeps original speed after the rate-shift.
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

export interface TTSResult {
  ogg: Buffer
  durationSec: number
}

export async function synthesizeVoiceNote(
  text: string,
  opts: { lang?: string } = {}
): Promise<TTSResult> {
  const lang = opts.lang || detectLang(text)
  // Hard cap length so free TTS doesn't choke.
  const clipped = text.length > 900 ? text.slice(0, 897) + '…' : text
  logger.info(`[tts] synthesizing (${lang}, ${clipped.length} chars)`)

  const mp3 = await fetchMp3Chunks(clipped, lang)
  const ogg = await mp3ToOpusMale(mp3)
  // Rough estimate: ~16 chars per second of speech
  const durationSec = Math.max(1, Math.round(clipped.length / 16))
  return { ogg, durationSec }
}

function detectLang(text: string): string {
  // If we see Devanagari, use Hindi; else Hindi (Roman) still speaks well in 'hi'.
  if (/[ऀ-ॿ]/.test(text)) return 'hi'
  // Hindi-in-roman script works better with Hindi TTS than English, tune as needed.
  return 'hi'
}
