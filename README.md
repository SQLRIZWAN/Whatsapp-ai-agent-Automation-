# WhatsApp AI Agent Automation

24/7 WhatsApp AI bot — backend runs on Render (Node.js), frontend dashboard on GitHub Pages.
Chrome/browser closing has zero effect on the bot.

## Live Links

- **Frontend (Dashboard):** `https://sqlrizwan.github.io/Whatsapp-ai-agent-Automation-/`
- **Backend API:** `https://whatsapp-ai-backend-8ylf.onrender.com`
- **Health check:** `https://whatsapp-ai-backend-8ylf.onrender.com/health`
- **Keep-alive ping:** `https://whatsapp-ai-backend-8ylf.onrender.com/ping`

## Architecture

```
GitHub Pages (Frontend)          Render (Backend — always on)
┌─────────────────────┐          ┌──────────────────────────────┐
│  React dashboard    │  HTTPS   │  Express + Socket.IO          │
│  - QR scan UI       │ ◄──────► │  - Baileys WhatsApp client    │
│  - Message history  │          │  - Gemini / Groq / OpenAI AI  │
│  - Settings         │          │  - Google TTS voice notes     │
│  - AI config        │          │  - Firestore session store    │
└─────────────────────┘          └──────────────────────────────┘
```

The backend keeps WhatsApp connected 24/7 independent of any browser.
Self-ping every 14 minutes prevents Render free-tier cold starts.

## Bot Capabilities

| Feature | How to trigger |
|---------|---------------|
| Text reply | Send any text message |
| Image analysis | Send an image (with or without caption) |
| Image generation | Send "image banao [description]" or "generate image..." |
| Voice note reply | Send a voice note — bot understands and replies with voice |
| Video analysis | Send a video |
| Auto call reject | Incoming call → auto-rejected + voice note sent |
| Call forwarding | Configure forwarding number in Settings |

## Session Persistence

- WhatsApp credentials stored in Firestore after first QR scan
- On backend restart, all sessions auto-reconnect without new QR scan
- Exponential backoff reconnect (max 25 attempts)
- Firestore quota exceeded → graceful memory-only fallback

## AI Providers

- **Gemini** (default): 5-model fallback chain — 2.5-flash → 1.5-flash-latest
- **Groq (xAI):** llama-3.3-70b-versatile
- **OpenAI:** gpt-4o-mini (default)

Provider selection logic:
1. If user saved own API key → use that provider
2. Else → backend Gemini key (fallback chain)

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
- `GET /health` — Server health check
- `GET /ping` — Keep-alive endpoint (returns `{ pong: true }`)

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

### GitHub Secrets (for CI/CD)
- `VITE_API_URL` — Render backend URL
- `RENDER_API_KEY`
- `RENDER_SERVICE_ID`

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
- `GEMINI_API_KEY`
- `ENCRYPTION_KEY` — 32-byte hex string for API key encryption
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

- `deploy-frontend.yml` — Build + deploy to GitHub Pages on push to `main`
- `deploy-backend.yml` — Trigger Render redeploy on push to `main`
- `backend-tests.yml` — TypeScript type check
- `frontend-tests.yml` — TypeScript + Vite build check

---

Last updated: 2026-04-28
