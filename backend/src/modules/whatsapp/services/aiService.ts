import { CONFIG } from '@shared/constants/config'
import logger from '@shared/utils/logger'
import { AppError } from '@shared/utils/errorHandler'
import { ErrorCode } from '@shared/types/common.types'
import configService from '../../config/services/configService'
import axios from 'axios'

// REST endpoints (per Google AI for Developers — Gemini API v1beta)
const GEMINI_BASE = 'https://generativelanguage.googleapis.com/v1beta/models'
const GEMINI_FILES_BASE = 'https://generativelanguage.googleapis.com/v1beta/files'
const GEMINI_UPLOAD_BASE = 'https://generativelanguage.googleapis.com/upload/v1beta/files'

// User-specified Gemini fallback chain (highest → lowest preference) +
// recovery aliases verified to exist on the configured GEMINI_API_KEY via
// ListModels. The first 5 entries are the literal user spec; the trailing
// recovery aliases are reached only if everything above 404s/429s.
const GEMINI_FALLBACK_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-preview-05-20',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
  'gemini-1.5-flash-latest',
  // recovery (verified available on the configured key)
  'gemini-2.5-flash-lite',
  'gemini-2.0-flash-001',
  'gemini-2.0-flash-lite-001',
] as const

// Imagen image-generation chain (preferred per Gemini API docs §5).
// Imagen 4 is what the public Gemini API exposes today; Imagen 3 names from
// the doc are kept as fallbacks for keys that still resolve them.
const IMAGEN_MODELS = [
  'imagen-4.0-generate-001',
  'imagen-4.0-fast-generate-001',
  'imagen-4.0-ultra-generate-001',
  'imagen-3.0-generate-002',
  'imagen-3.0-generate-001',
  'imagen-3.0-fast-generate-001',
] as const

// Gemini multimodal image-generation fallback (works with :generateContent).
// gemini-2.5-flash-image is the current GA model on the public API.
const GEMINI_IMAGE_GEN_MODELS = [
  'gemini-2.5-flash-image',
  'gemini-3-pro-image-preview',
  'gemini-3.1-flash-image-preview',
  'gemini-2.5-flash-image-preview',
  'gemini-2.0-flash-preview-image-generation',
  'gemini-2.0-flash-exp-image-generation',
] as const

// Gemini TTS / native-audio-output models (per docs §6)
const GEMINI_TTS_MODELS = [
  'gemini-2.5-flash-preview-tts',
  'gemini-2.5-pro-preview-tts',
  'gemini-3.1-flash-tts-preview',
  'gemini-2.0-flash-preview-tts',
] as const

// Threshold above which we route media through the Files API instead of inline
// data. Doc recommends Files API for total request > 20 MB.
const FILES_API_THRESHOLD_BYTES = 18 * 1024 * 1024

export type AIProvider = 'gemini' | 'grok' | 'openai'

export interface AIConfig {
  provider: AIProvider
  apiKey?: string
  model?: string
}

type GeminiPart =
  | { text: string }
  | { inlineData: { data: string; mimeType: string } }
  | { fileData: { fileUri: string; mimeType: string } }

let preferredModel: string | null = null
let lastAiError: { at: number; tag: string; status: number | string; message: string } | null = null
let lastAiOk: { at: number; model: string } | null = null
let availableModels: string[] = []
let availableModelsAt: number | null = null

export function getAiDiag() {
  return {
    keyPresent: !!CONFIG.GEMINI_API_KEY,
    keyLen: CONFIG.GEMINI_API_KEY ? CONFIG.GEMINI_API_KEY.length : 0,
    preferredModel,
    chain: GEMINI_FALLBACK_MODELS.join(' → '),
    imagen: IMAGEN_MODELS.join(' → '),
    tts: GEMINI_TTS_MODELS.join(' → '),
    availableModels,
    availableModelsAt,
    lastOk: lastAiOk,
    lastError: lastAiError,
  }
}

/**
 * Probe the ListModels endpoint at startup so operators can see which models
 * the configured GEMINI_API_KEY actually has access to. Hugely useful for
 * diagnosing 404s on preview/imagen models — the answer is always "is this
 * model in the available list?".
 */
export async function listAvailableModels(apiKey?: string): Promise<string[]> {
  const key = apiKey || CONFIG.GEMINI_API_KEY
  if (!key) return []
  try {
    const res = await axios.get(
      `https://generativelanguage.googleapis.com/v1beta/models?pageSize=200&key=${key}`,
      { timeout: 8_000 }
    )
    const names = (res.data?.models || [])
      .map((m: any) => (m.name as string)?.replace(/^models\//, ''))
      .filter(Boolean)
      .sort()
    availableModels = names
    availableModelsAt = Date.now()
    return names
  } catch (e: any) {
    logger.warn(`[ai] ListModels failed: ${(e.response?.data?.error?.message || e.message || '').substring(0, 160)}`)
    return []
  }
}

const PER_MODEL_TIMEOUT_MS = 12_000

async function callGeminiREST(
  apiKey: string,
  parts: GeminiPart[],
  tag: string,
  systemInstruction?: string,
  modelOverrideOrder?: readonly string[]
): Promise<{ text: string; model: string }> {
  let lastError = ''

  const baseChain = modelOverrideOrder && modelOverrideOrder.length > 0
    ? [...modelOverrideOrder]
    : [...GEMINI_FALLBACK_MODELS]

  const modelOrder: string[] = preferredModel && baseChain.includes(preferredModel)
    ? [preferredModel, ...baseChain.filter((m) => m !== preferredModel)]
    : baseChain

  for (const modelName of modelOrder) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const body: Record<string, unknown> = {
          contents: [{ role: 'user', parts }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 2048 },
        }
        if (systemInstruction) {
          body.systemInstruction = { parts: [{ text: systemInstruction }] }
        }

        const res = await axios.post(
          `${GEMINI_BASE}/${modelName}:generateContent?key=${apiKey}`,
          body,
          { timeout: PER_MODEL_TIMEOUT_MS, headers: { 'Content-Type': 'application/json' } }
        )

        const text: string =
          res.data?.candidates?.[0]?.content?.parts
            ?.map((p: any) => p.text || '')
            .join('')
            .trim() || ''

        if (!text) {
          const finishReason = res.data?.candidates?.[0]?.finishReason || 'UNKNOWN'
          throw new Error(`empty response (finishReason: ${finishReason})`)
        }

        preferredModel = modelName
        lastAiOk = { at: Date.now(), model: modelName }
        logger.info(`[ai] ${tag} OK via ${modelName}`)
        return { text, model: modelName }
      } catch (e: any) {
        const status = e.response?.status
        const msg: string =
          e.response?.data?.error?.message || e.message || 'unknown'
        lastError = `${modelName}: [${status || 'ERR'}] ${msg.substring(0, 120)}`
        lastAiError = { at: Date.now(), tag, status: status || 'ERR', message: msg.substring(0, 200) }
        logger.warn(`[ai] ${tag} failed — ${lastError}`)

        if (preferredModel === modelName) preferredModel = null

        if (status === 429) {
          const retryMs = (() => {
            const m = msg.match(/retry[^0-9]*(\d+(?:\.\d+)?)\s*s/i)
            return m ? Math.min(parseFloat(m[1]) * 1000, 4000) : 1500
          })()
          if (attempt === 0 && retryMs <= 4000) {
            logger.info(`[ai] ${tag} 429 — waiting ${retryMs}ms before retry`)
            await new Promise((r) => setTimeout(r, retryMs))
            continue
          }
        }
        break
      }
    }
    logger.warn(`[ai] ${tag} — moving to next model after ${modelName}`)
  }

  throw new AppError(
    ErrorCode.INTERNAL_ERROR,
    `AI unavailable (${tag}): ${lastError}`,
    500
  )
}

// ── Files API (per docs §1) ────────────────────────────────────
// Used when a single piece of media exceeds ~18 MB or when we want
// to reuse the same upload across multiple prompts.

export interface UploadedFile {
  uri: string
  name: string
  mimeType: string
  sizeBytes: number
  expirationTime?: string
}

async function uploadFile(
  apiKey: string,
  buffer: Buffer,
  mimeType: string,
  displayName = 'wa-media'
): Promise<UploadedFile> {
  // Two-phase resumable upload: 1) start session, 2) upload bytes.
  const startRes = await axios.post(
    `${GEMINI_UPLOAD_BASE}?key=${apiKey}`,
    { file: { displayName } },
    {
      headers: {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': String(buffer.length),
        'X-Goog-Upload-Header-Content-Type': mimeType,
        'Content-Type': 'application/json',
      },
      timeout: 30_000,
    }
  )
  const uploadUrl = startRes.headers['x-goog-upload-url'] as string | undefined
  if (!uploadUrl) {
    throw new Error('Files API: missing upload URL in start response')
  }

  const uploadRes = await axios.post(uploadUrl, buffer, {
    headers: {
      'Content-Length': String(buffer.length),
      'X-Goog-Upload-Offset': '0',
      'X-Goog-Upload-Command': 'upload, finalize',
    },
    maxBodyLength: Infinity,
    maxContentLength: Infinity,
    timeout: 90_000,
  })

  const f = uploadRes.data?.file
  if (!f?.uri) throw new Error('Files API: empty file response')

  // Poll until ACTIVE (file processing for audio/video can take a few seconds).
  for (let i = 0; i < 12; i++) {
    if (f.state === 'ACTIVE' || !f.state) break
    await new Promise((r) => setTimeout(r, 1000))
    const meta = await axios.get(
      `${GEMINI_FILES_BASE}/${f.name.replace(/^files\//, '')}?key=${apiKey}`,
      { timeout: 10_000 }
    )
    if (meta.data?.state === 'ACTIVE') {
      f.state = 'ACTIVE'
      break
    }
    if (meta.data?.state === 'FAILED') {
      throw new Error(`Files API: file processing FAILED (${meta.data?.error?.message || 'unknown'})`)
    }
  }

  return {
    uri: f.uri as string,
    name: f.name as string,
    mimeType: (f.mimeType as string) || mimeType,
    sizeBytes: parseInt((f.sizeBytes as string) || String(buffer.length), 10),
    expirationTime: f.expirationTime,
  }
}

async function deleteFile(apiKey: string, name: string): Promise<void> {
  try {
    await axios.delete(
      `${GEMINI_FILES_BASE}/${name.replace(/^files\//, '')}?key=${apiKey}`,
      { timeout: 8_000 }
    )
  } catch (e) {
    logger.warn(`[ai] file delete failed (will auto-expire in 48h): ${(e as Error).message}`)
  }
}

async function callGroqAPI(
  apiKey: string,
  model: string,
  messages: Array<{ role: string; content: string }>,
  tag: string
): Promise<{ text: string; model: string }> {
  const response = await axios.post(
    'https://api.groq.com/openai/v1/chat/completions',
    { model: model || 'llama-3.3-70b-versatile', messages, temperature: 0.7, max_tokens: 2048 },
    { headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' }, timeout: 30000 }
  )
  const text = response.data.choices?.[0]?.message?.content?.trim()
  if (!text) throw new Error('empty response')
  logger.info(`[ai] ${tag} OK via Groq/${model}`)
  return { text, model }
}

async function callOpenAIAPI(
  apiKey: string,
  model: string,
  messages: Array<{ role: string; content: string }>,
  tag: string
): Promise<{ text: string; model: string }> {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    { model: model || 'gpt-4o-mini', messages, temperature: 0.7, max_tokens: 2048 },
    { headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' }, timeout: 30000 }
  )
  const text = response.data.choices?.[0]?.message?.content?.trim()
  if (!text) throw new Error('empty response')
  logger.info(`[ai] ${tag} OK via OpenAI/${model}`)
  return { text, model }
}

export interface GeneratedImage {
  data: string
  mimeType: string
  model: string
}

export interface GeneratedAudio {
  data: Buffer
  mimeType: string
  model: string
}

export class AIService {
  private apiKey: string

  constructor() {
    this.apiKey = CONFIG.GEMINI_API_KEY || ''
    if (this.apiKey) {
      logger.info(`[ai] Gemini REST ready — chain: ${GEMINI_FALLBACK_MODELS.join(' → ')}`)
      logger.info(`[ai] Imagen chain: ${IMAGEN_MODELS.join(' → ')}`)
      logger.info(`[ai] TTS chain: ${GEMINI_TTS_MODELS.join(' → ')}`)
    } else {
      logger.error('[ai] GEMINI_API_KEY missing — AI will be disabled!')
    }
  }

  private getApiKey(): string {
    if (!this.apiKey) throw new AppError(ErrorCode.INTERNAL_ERROR, 'GEMINI_API_KEY not configured', 500)
    return this.apiKey
  }

  isReady(): boolean {
    return !!this.apiKey
  }

  async getAIConfig(uid: string): Promise<AIConfig> {
    try {
      const stored = await configService.getUserAIConfig(uid)
      if (stored?.apiKey) {
        return { provider: stored.provider as AIProvider, apiKey: stored.apiKey, model: stored.model || undefined }
      }
    } catch {
      logger.warn('[ai] Could not fetch user AI config, using defaults')
    }
    return { provider: 'gemini', apiKey: this.apiKey }
  }

  /**
   * Build a media part from a buffer — uses inline data when small,
   * Files API when larger than the threshold (per docs §1).
   */
  private async mediaPart(
    apiKey: string,
    buffer: Buffer,
    mimeType: string,
    displayName: string
  ): Promise<{ part: GeminiPart; uploadedName?: string }> {
    if (buffer.length <= FILES_API_THRESHOLD_BYTES) {
      return {
        part: { inlineData: { data: buffer.toString('base64'), mimeType } },
      }
    }
    logger.info(`[ai] media ${buffer.length}b > ${FILES_API_THRESHOLD_BYTES}b — uploading via Files API`)
    const uploaded = await uploadFile(apiKey, buffer, mimeType, displayName)
    return {
      part: { fileData: { fileUri: uploaded.uri, mimeType: uploaded.mimeType } },
      uploadedName: uploaded.name,
    }
  }

  async generateResponse(
    prompt: string,
    userMessage: string,
    systemPrompt?: string,
    uid?: string
  ): Promise<{ text: string; tokensUsed: number; model: string }> {
    if (uid) {
      try {
        const cfg = await this.getAIConfig(uid)
        if (cfg.provider === 'grok' && cfg.apiKey) {
          const msgs = [
            { role: 'system', content: systemPrompt || 'You are a helpful AI assistant.' },
            { role: 'user', content: userMessage },
          ]
          const r = await callGroqAPI(cfg.apiKey, cfg.model || 'llama-3.3-70b-versatile', msgs, 'text')
          return { text: r.text, tokensUsed: 0, model: r.model }
        }
        if (cfg.provider === 'openai' && cfg.apiKey) {
          const msgs = [
            { role: 'system', content: systemPrompt || 'You are a helpful AI assistant.' },
            { role: 'user', content: userMessage },
          ]
          const r = await callOpenAIAPI(cfg.apiKey, cfg.model || 'gpt-4o-mini', msgs, 'text')
          return { text: r.text, tokensUsed: 0, model: r.model }
        }
        if (cfg.provider === 'gemini' && cfg.apiKey && cfg.apiKey !== this.apiKey) {
          const r = await callGeminiREST(cfg.apiKey, [{ text: userMessage }], 'text', systemPrompt)
          return { text: r.text, tokensUsed: 0, model: r.model }
        }
      } catch (e) {
        logger.warn('[ai] User config failed, using backend key:', (e as Error).message)
      }
    }

    const r = await callGeminiREST(this.getApiKey(), [{ text: userMessage }], 'text', systemPrompt)
    return { text: r.text, tokensUsed: 0, model: r.model }
  }

  /**
   * Vision — accepts either a base64 string (legacy) or a raw Buffer.
   * Auto-promotes to Files API when buffer exceeds 18 MB.
   */
  async analyzeImage(
    imageInput: string | Buffer,
    prompt: string,
    systemPrompt?: string,
    mimeType = 'image/jpeg'
  ): Promise<{ text: string; tokensUsed: number; model: string }> {
    const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/heic', 'image/heif']
    const cleanMime = mimeType.split(';')[0].trim()
    const safeMime = allowed.includes(cleanMime) ? cleanMime : 'image/jpeg'

    let part: GeminiPart
    let uploadedName: string | undefined
    const apiKey = this.getApiKey()

    if (Buffer.isBuffer(imageInput)) {
      const r = await this.mediaPart(apiKey, imageInput, safeMime, 'wa-image')
      part = r.part
      uploadedName = r.uploadedName
    } else {
      part = { inlineData: { data: imageInput, mimeType: safeMime } }
    }

    try {
      const r = await callGeminiREST(apiKey, [part, { text: prompt }], 'image', systemPrompt)
      return { text: r.text, tokensUsed: 0, model: r.model }
    } finally {
      if (uploadedName) await deleteFile(apiKey, uploadedName)
    }
  }

  /**
   * Audio understanding — accepts base64 (legacy) or Buffer.
   * Auto-uses Files API for files > 18 MB. Doc §4 supports
   * transcription, summarization, emotion detection, and timestamp queries.
   */
  async generateFromAudio(
    audioInput: string | Buffer,
    systemPrompt: string,
    _uid?: string,
    mimeType = 'audio/mp3'
  ): Promise<{ text: string; model: string }> {
    const apiKey = this.getApiKey()
    const allowed = ['audio/wav', 'audio/mp3', 'audio/mpeg', 'audio/aiff', 'audio/aac', 'audio/ogg', 'audio/flac']
    const cleanMime = mimeType.split(';')[0].trim()
    const safeMime = allowed.includes(cleanMime) ? cleanMime : 'audio/mp3'

    let part: GeminiPart
    let uploadedName: string | undefined

    if (Buffer.isBuffer(audioInput)) {
      const r = await this.mediaPart(apiKey, audioInput, safeMime, 'wa-voice')
      part = r.part
      uploadedName = r.uploadedName
    } else {
      part = { inlineData: { data: audioInput, mimeType: safeMime } }
    }

    const instruction =
      'User ne ek voice message bheja hai. Usse samjho aur short natural Hinglish mein reply karo. No transcription labels.'

    try {
      return await callGeminiREST(apiKey, [part, { text: instruction }], 'audio', systemPrompt)
    } finally {
      if (uploadedName) await deleteFile(apiKey, uploadedName)
    }
  }

  async analyzeVideo(
    videoInput: string | Buffer,
    caption: string,
    systemPrompt?: string,
    mimeType = 'video/mp4'
  ): Promise<{ text: string; model: string }> {
    const apiKey = this.getApiKey()
    const allowed = ['video/mp4', 'video/mpeg', 'video/webm', 'video/quicktime', 'video/3gpp']
    const cleanMime = mimeType.split(';')[0].trim()
    const safeMime = allowed.includes(cleanMime) ? cleanMime : 'video/mp4'

    let part: GeminiPart
    let uploadedName: string | undefined

    if (Buffer.isBuffer(videoInput)) {
      const r = await this.mediaPart(apiKey, videoInput, safeMime, 'wa-video')
      part = r.part
      uploadedName = r.uploadedName
    } else {
      part = { inlineData: { data: videoInput, mimeType: safeMime } }
    }

    const instruction = `User ne ek video bheja hai${caption ? ` with caption: "${caption}"` : ''}. Describe karo aur Hinglish mein reply karo.`
    try {
      return await callGeminiREST(apiKey, [part, { text: instruction }], 'video', systemPrompt)
    } finally {
      if (uploadedName) await deleteFile(apiKey, uploadedName)
    }
  }

  async makeDecision(context: string, systemPrompt: string): Promise<{ decision: string; model: string }> {
    const r = await callGeminiREST(
      this.getApiKey(),
      [{ text: `Context: ${context}\n\nMake a decision.` }],
      'decision',
      systemPrompt
    )
    return { decision: r.text, model: r.model }
  }

  /**
   * Image generation — try Gemini multimodal image-gen first (gemini-2.5-flash-image
   * is GA on the public API and just works), then Imagen via :predict as a
   * fallback. Each model is tried with a few invocation variants because
   * different generations of the API expect slightly different request shapes.
   * Returns null when every model + variant fails.
   */
  async generateImage(prompt: string): Promise<GeneratedImage | null> {
    const apiKey = this.apiKey
    if (!apiKey) return null

    const errors: string[] = []

    // Layer 1 — Gemini multimodal image-gen via :generateContent.
    // Try a few generationConfig shapes because the modality requirement
    // varies between model generations (some require ['IMAGE'], some
    // ['IMAGE','TEXT'], some just respond without a config).
    const geminiVariants = [
      { responseModalities: ['IMAGE'] },
      { responseModalities: ['IMAGE', 'TEXT'] },
      undefined,
    ]
    for (const modelName of GEMINI_IMAGE_GEN_MODELS) {
      for (const generationConfig of geminiVariants) {
        try {
          logger.info(`[ai] image gen via Gemini: ${modelName} (cfg=${generationConfig ? generationConfig.responseModalities?.join('+') : 'none'})`)
          const body: Record<string, unknown> = {
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
          }
          if (generationConfig) body.generationConfig = generationConfig

          const res = await axios.post(
            `${GEMINI_BASE}/${modelName}:generateContent?key=${apiKey}`,
            body,
            { timeout: 60_000, headers: { 'Content-Type': 'application/json' } }
          )
          for (const part of res.data?.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData?.data) {
              logger.info(`[ai] image generated via ${modelName} (${part.inlineData.mimeType || 'image/png'}, ${part.inlineData.data.length}b)`)
              return {
                data: part.inlineData.data,
                mimeType: part.inlineData.mimeType || 'image/png',
                model: modelName,
              }
            }
          }
          const finishReason = res.data?.candidates?.[0]?.finishReason || 'no-image-part'
          errors.push(`${modelName}: ${finishReason}`)
          logger.warn(`[ai] ${modelName} returned no image data (finishReason=${finishReason})`)
        } catch (e: any) {
          const status = e.response?.status || 'ERR'
          const msg = e.response?.data?.error?.message || e.message || 'unknown'
          errors.push(`${modelName}: [${status}] ${msg.substring(0, 100)}`)
          logger.warn(`[ai] Gemini image-gen ${modelName} failed [${status}]: ${msg.substring(0, 160)}`)
          // 400 on invalid argument typically means this variant is wrong —
          // try the next variant. For 404, skip ahead to the next model.
          if (status === 404) break
        }
      }
    }

    // Layer 2 — Imagen via :predict. Try with minimal params first (Imagen 4
    // doesn't always accept personGeneration) then with the full param set.
    const imagenVariants = [
      { sampleCount: 1 },
      { sampleCount: 1, aspectRatio: '1:1' },
      { sampleCount: 1, aspectRatio: '1:1', personGeneration: 'allow_adult' },
    ]
    for (const modelName of IMAGEN_MODELS) {
      for (const parameters of imagenVariants) {
        try {
          logger.info(`[ai] image gen via Imagen: ${modelName} (params=${Object.keys(parameters).join(',')})`)
          const res = await axios.post(
            `${GEMINI_BASE}/${modelName}:predict?key=${apiKey}`,
            { instances: [{ prompt }], parameters },
            { timeout: 60_000, headers: { 'Content-Type': 'application/json' } }
          )
          const pred = res.data?.predictions?.[0]
          const b64 = pred?.bytesBase64Encoded || pred?.image?.bytesBase64Encoded
          if (b64) {
            logger.info(`[ai] image generated via ${modelName}`)
            return { data: b64, mimeType: pred?.mimeType || 'image/png', model: modelName }
          }
          errors.push(`${modelName}: no predictions`)
          logger.warn(`[ai] ${modelName} returned no predictions`)
        } catch (e: any) {
          const status = e.response?.status || 'ERR'
          const msg = e.response?.data?.error?.message || e.message || 'unknown'
          errors.push(`${modelName}: [${status}] ${msg.substring(0, 100)}`)
          logger.warn(`[ai] Imagen ${modelName} failed [${status}]: ${msg.substring(0, 160)}`)
          if (status === 404) break
          if (status === 400 && /personGeneration|aspectRatio/i.test(msg)) {
            // try next param variant
            continue
          }
        }
      }
    }

    logger.error(`[ai] all image generation models failed: ${errors.slice(0, 6).join(' | ')}`)
    return null
  }

  /**
   * Native Gemini audio output (TTS). Returns raw bytes + mime type so the
   * caller can wrap into WAV / convert to OGG/Opus for WhatsApp.
   * Tries the preview-tts models first, then plain gemini-2.0-flash with
   * AUDIO modality (per docs §6).
   */
  async generateSpeech(
    text: string,
    voice = 'Charon'
  ): Promise<GeneratedAudio | null> {
    const apiKey = this.apiKey
    if (!apiKey) return null

    for (const modelName of GEMINI_TTS_MODELS) {
      try {
        const res = await axios.post(
          `${GEMINI_BASE}/${modelName}:generateContent?key=${apiKey}`,
          {
            contents: [{ role: 'user', parts: [{ text }] }],
            generationConfig: {
              responseModalities: ['AUDIO'],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: { voiceName: voice },
                },
              },
            },
          },
          { timeout: 30_000, headers: { 'Content-Type': 'application/json' } }
        )
        for (const part of res.data?.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData?.data) {
            logger.info(`[ai] tts OK via ${modelName} (voice=${voice})`)
            return {
              data: Buffer.from(part.inlineData.data, 'base64'),
              mimeType: (part.inlineData.mimeType as string) || 'audio/L16;codec=pcm;rate=24000',
              model: modelName,
            }
          }
        }
        logger.warn(`[ai] tts ${modelName} returned no audio`)
      } catch (e: any) {
        const msg = e.response?.data?.error?.message || e.message || 'unknown'
        logger.warn(`[ai] tts ${modelName} failed: ${msg.substring(0, 160)}`)
      }
    }
    return null
  }

  getAvailableModels() {
    return {
      gemini: [...GEMINI_FALLBACK_MODELS],
      imagen: [...IMAGEN_MODELS],
      geminiImageGen: [...GEMINI_IMAGE_GEN_MODELS],
      geminiTTS: [...GEMINI_TTS_MODELS],
      grok: ['grok-beta'],
      openai: ['gpt-4o', 'gpt-4o-mini', 'gpt-4-turbo', 'gpt-3.5-turbo'],
      fallbackChain: GEMINI_FALLBACK_MODELS.join(' → '),
    }
  }
}

export default new AIService()
