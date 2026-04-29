# WhatsApp AI Agent Automation

24/7 multimodal WhatsApp AI bot — backend on Render (Node.js), frontend dashboard on GitHub Pages.
Closing your browser has zero effect on the bot.

## Live Links

- **Frontend (Dashboard):** `https://sqlrizwan.github.io/Whatsapp-ai-agent-Automation-/`
- **Backend API:** `https://whatsapp-ai-backend-8ylf.onrender.com`
- **Health check:** `https://whatsapp-ai-backend-8ylf.onrender.com/health`
- **Live AI probe:** `https://whatsapp-ai-backend-8ylf.onrender.com/api/diag/ai`
- **Keep-alive ping:** `https://whatsapp-ai-backend-8ylf.onrender.com/ping`

`/health` returns per-subsystem booleans plus an `ai_diag` block so the deploy
workflow and operators can detect partial failure without dashboard access:

```json
{
  "status": "ok",
  "firestore": true,
  "ai": true,
  "tts": true,
  "ttsLayers": { "gemini": true, "elevenlabs": false, "gtts": true },
  "ai_diag": {
    "keyPresent": true,
    "preferredModel": "gemini-2.5-flash",
    "chain": "gemini-2.5-flash → gemini-2.5-flash-preview-05-20 → gemini-2.0-flash → gemini-2.0-flash-lite → gemini-1.5-flash-latest",
    "imagen": "imagen-3.0-generate-002 → imagen-3.0-fast-generate-001",
    "tts": "gemini-2.5-flash-preview-tts → gemini-2.0-flash-preview-tts → gemini-2.0-flash"
  }
}
```

If any layer fails the bot drops down the chain instead of going silent.

## Architecture

```
GitHub Pages (Frontend)          Render (Backend — always on)
┌─────────────────────┐          ┌────────────────────────────────┐
│  React dashboard    │  HTTPS   │  Express + Socket.IO            │
│  - QR scan UI       │ ◄──────► │  - Baileys WhatsApp client      │
│  - Message history  │          │  - Gemini multimodal (REST)     │
│  - Settings         │          │  - Imagen 3 image generation    │
│  - AI config        │          │  - Gemini native AUDIO TTS      │
└─────────────────────┘          │  - Gemini Files API (>18 MB)    │
                                 │  - Firestore session store      │
                                 └────────────────────────────────┘
```

Self-ping every 14 minutes prevents Render free-tier cold starts.

## Bot Capabilities (Multimodal — per Gemini API docs)

| Feature           | Trigger                                                    | Backend implementation                                  |
|-------------------|------------------------------------------------------------|---------------------------------------------------------|
| Text reply        | Send any text                                              | `models/{flash}:generateContent`                        |
| Image analysis    | Send a JPEG / PNG / WEBP / HEIC image                      | inline data <18 MB, else Files API upload               |
| Video analysis    | Send a short MP4 / WEBM / 3GP video                        | inline data <18 MB, else Files API upload               |
| Voice note reply  | Send a voice note (.ogg)                                   | OGG → MP3 → Gemini → reply audio (Gemini TTS)           |
| Image generation  | "image banao …", "generate image …", "draw …"              | Imagen 3 first, Gemini image-gen as fallback            |
| Voice output      | Bot replies to voice with voice automatically              | Gemini AUDIO modality (`Charon` voice) → PCM → OGG/Opus |
| Auto call reject  | Incoming call → declined + voice-note explanation          | Baileys + Gemini TTS                                    |
| Call forwarding   | Configure forwarding number in Settings                    | Persisted in Firestore                                  |

### Files API auto-routing

The bot inlines media smaller than ~18 MB (within the 20 MB request budget per
the docs). Any larger media is uploaded via the Gemini Files API
(`/upload/v1beta/files` resumable session), referenced by `fileUri`, then
deleted after the response so the project's 20 GB quota is never burned.

## Model Fallback Chain (per modality)

The first 5 entries of the text chain are the user's spec, verbatim. The
trailing recovery aliases are appended after live verification via the
`v1beta/models` ListModels endpoint so that 404'd preview/-latest aliases
don't dead-end the chain. The image and TTS chains are sourced from the same
ListModels output.

| Task                    | Chain                                                                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text / Vision / Audio   | `gemini-2.5-flash` → `gemini-2.5-flash-preview-05-20` → `gemini-2.0-flash` → `gemini-2.0-flash-lite` → `gemini-1.5-flash-latest` → `gemini-2.5-flash-lite` → `gemini-2.0-flash-001` → `gemini-2.0-flash-lite-001` |
| Image generation        | `imagen-4.0-generate-001` → `imagen-4.0-fast-generate-001` → `imagen-4.0-ultra-generate-001` → `imagen-3.0-generate-002` → `imagen-3.0-generate-001` → `imagen-3.0-fast-generate-001` (Imagen first); then Gemini multimodal: `gemini-2.5-flash-image` → `gemini-3-pro-image-preview` → `gemini-3.1-flash-image-preview` → `gemini-2.5-flash-image-preview` → `gemini-2.0-flash-preview-image-generation` → `gemini-2.0-flash-exp-image-generation` |
| Audio output (TTS)      | `gemini-2.5-flash-preview-tts` → `gemini-2.5-pro-preview-tts` → `gemini-3.1-flash-tts-preview` → `gemini-2.0-flash-preview-tts`                                                          |

Per-model timeout is 12 s. The first model that returns OK is cached as
`preferredModel` so subsequent requests skip dead/slow models. On 429 the bot
honours the `retry` hint up to 4 s before moving to the next model.

At server startup, `ListModels` is called once and the result is logged + made
available on `/health` under `ai_diag.availableModels`. If your bot is
returning the canned "thoda issue aaya" reply, check that endpoint — most
silent failures are quota (429) on the active model or a 404 because the
preview alias was retired by Google.

## Default System Prompt

```
My name is SQL 💉. I am a highly advanced multimodal AI created by SQL RIZWAN.
I manage this WhatsApp account 24/7.

What I can do:
- Read and reply to text messages.
- See images you send and describe / analyze them in detail.
- Watch short videos and tell you what's happening.
- Listen to voice notes and reply with my own voice note.
- Generate fresh images from your description (try: "image banao a sunset on a
  beach" or "generate image of a cat astronaut").

Personality:
- Reply in friendly Hinglish by default.
- Be concise, warm, and helpful.
- Never claim to be a human — I'm SQL, the AI manager.
```

You can override this per-user from `/settings → System Prompt` in the
dashboard. The runtime appends a small "multimodal capability rules" block on
top of whatever you save so the model never forgets it can see / hear.

## Session Persistence

- WhatsApp credentials stored in Firestore after first QR scan
- On backend restart, all sessions auto-reconnect without new QR scan
- Exponential backoff reconnect (max 25 attempts)
- Firestore quota exceeded → graceful memory-only fallback

## Message Persistence & Live Counters

Every inbound and outbound message (text, image, audio, video, image-gen,
canned fallback) is persisted via `messageService.saveMessage` and broadcast
on the `whatsapp:message:new` Socket.IO event so the dashboard message count
and the `/messages` page update in real time. If Firestore is unavailable, the
service keeps a rolling 500-message in-memory buffer per user so the UI never
shows zero just because the database is offline.

## AI Providers

- **Gemini** (default): per-modality fallback chain above. Working model is
  cached so subsequent requests skip dead models.
- **Groq:** `llama-3.3-70b-versatile` (used only when user saves their own Groq key, text-only)
- **OpenAI:** `gpt-4o-mini` (used only when user saves their own OpenAI key, text-only)

Provider selection logic:
1. If user saved own API key → use that provider
2. Else → backend Gemini key (full multimodal stack)
3. If every layer fails → bot sends a short canned text fallback

## TTS Fallback Chain (voice notes)

1. **Gemini native AUDIO modality** — primary, best quality.
   - Returns raw 16-bit PCM (24 kHz mono) which is wrapped to WAV then transcoded to OGG/Opus by ffmpeg.
   - Voice defaults to `Charon` (informative). Other doc voices: `Puck`, `Kore`, `Zephyr`, `Aoede`, `Enceladus`, `Iapetus`.
2. **ElevenLabs** (`eleven_multilingual_v2`) — used only if `ELEVENLABS_API_KEY` is set.
3. **Google Translate TTS** — last-resort free fallback.

## Frontend Pages

- `/dashboard` — Live status, QR code, stats
- `/connect` — WhatsApp QR connect
- `/messages` — Message history
- `/calls` — Call history
- `/ai-config` — API key management per provider
- `/call-forwarding` — Call forwarding rules
- `/settings` — AI persona, system prompt, call settings
- `/analytics` — Usage analytics

## API Endpoints

### Health
- `GET /health` — Server health check (per-subsystem booleans + `ai_diag`)
- `GET /api/diag/ai` — Live Gemini probe — returns the verbatim error if it fails
- `GET /ping` — Keep-alive endpoint

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/refresh`
- `GET  /api/auth/me`

### WhatsApp
- `GET  /api/whatsapp/status` — Connection status (does NOT spawn new session)
- `POST /api/whatsapp/connect` — Start/reconnect WhatsApp session
- `POST /api/whatsapp/disconnect` — Stop session
- `POST /api/whatsapp/logout` — Fully unlink device + clear Firestore creds
- `GET  /api/whatsapp/qr` — Current QR code (base64)
- `GET  /api/whatsapp/messages` — Message history
- `GET  /api/whatsapp/calls` — Call history
- `POST /api/whatsapp/send-message` — Send a message

### Config
- `GET  /api/config` — Full config
- `PUT  /api/config/system-prompt` — Update AI persona
- `PUT  /api/config/forwarding` — Call forwarding rules
- `PUT  /api/config/ai-provider` — Switch AI provider
- `POST /api/config/api-keys` — Save encrypted API key
- `GET  /api/config/api-keys` — List saved keys (masked)
- `DELETE /api/config/api-keys/:provider` — Remove key

## Required Secrets & Env Vars

### GitHub Secrets (CI/CD)
- `RENDER_API_KEY` — needed by `.github/workflows/deploy.yml` to trigger redeploys
- `RENDER_SERVICE_ID` — optional, looked up by name otherwise

### Render Environment Variables
- `NODE_ENV=production`
- `PORT=5000`
- `API_URL` — Full URL of this backend (for self-ping)
- `FRONTEND_URL` — GitHub Pages URL (for CORS)
- `JWT_SECRET`
- `JWT_EXPIRY=7d`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `GEMINI_API_KEY` — required, drives every modality
- `ENCRYPTION_KEY` — 32-byte hex string for API key encryption
- `ELEVENLABS_API_KEY` — *(optional)* enables layer-2 TTS fallback
- `ELEVENLABS_VOICE_ID` — *(optional)* defaults to `pNInz6obpgDQGcFmaJgB` (Adam)
- `LOG_LEVEL=info`

## Local Development

```bash
# Backend
cd backend && npm install && npm run dev

# Frontend (new terminal)
cd frontend && npm install && npm run dev
```

Frontend dev server proxies `/api/*` to `localhost:5000` automatically.

## GitHub Actions Workflows

- `deploy.yml` — Build + deploy frontend to GitHub Pages, trigger Render redeploy, validate `/health` post-deploy, commit Render logs to `diagnostics/render-log.md`
- `backend-tests.yml` — TypeScript type check
- `frontend-tests.yml` — TypeScript + Vite build check

---

Last updated: 2026-04-29
