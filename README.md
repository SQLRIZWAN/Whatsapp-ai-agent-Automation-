# WhatsApp AI Agent Automation

WhatsApp automation system with:
- backend on Render
- frontend on GitHub Pages
- WhatsApp session persistence in Firestore
- user AI API keys for Gemini, xAI Grok, and OpenAI
- dashboard for QR connect, messages, calls, AI config, and forwarding

## Current Setup

- Backend deploy target: Render
- Frontend deploy target: GitHub Pages
- Main branch: `main`
- Frontend URL:
  `https://sqlrizwan.github.io/Whatsapp-ai-agent-Automation-/`
- Backend URL:
  `https://whatsapp-ai-backend.onrender.com`

## Main Features

- WhatsApp QR connect flow
- Firestore-based WhatsApp auth/session storage
- auto reconnect support after restart
- live status updates with Socket.IO
- message history view
- call history view
- AI configuration page
- call forwarding settings
- encrypted user API key storage
- provider switching:
  `Backend Default`, `Gemini`, `Grok`, `OpenAI`

## Frontend Pages

- `/` or `/dashboard`
- `/connect`
- `/messages`
- `/calls`
- `/ai-config`
- `/call-forwarding`
- `/settings`
- `/analytics`

## AI Providers

- Google Gemini
- xAI Grok
- OpenAI

Logic:
- if user saved own API key, that provider is used
- if no user key exists, backend Gemini key is used as fallback

## Important Backend Changes

- CORS updated for GitHub Pages
- QR endpoint available at `/api/whatsapp/qr`
- QR cache stored in Firestore
- WhatsApp auth state stored in Firestore instead of local disk
- self-ping runs only when `NODE_ENV=production` to avoid resource waste in dev
- API key endpoints added:
  - `POST /api/config/api-keys`
  - `GET /api/config/api-keys`
  - `DELETE /api/config/api-keys/:provider`
- process exits with code 1 on uncaughtException / unhandledRejection so the container restarts cleanly
- logs go to stdout only in production — file logging is dev-only (avoids container disk issues)
- Docker image upgraded to Node.js 22 LTS

## GitHub Actions

Workflows now used:
- `backend-tests.yml`
- `frontend-tests.yml`
- `deploy-backend.yml`
- `deploy-frontend.yml`

Legacy workflow removed:
- `auto-deploy-production.yml`

## Required Secrets / Env

### GitHub Secrets

- `VITE_API_URL`
- `RENDER_API_KEY`
- `RENDER_SERVICE_ID`

### Render Environment Variables

- `NODE_ENV`
- `PORT`
- `API_URL`
- `FRONTEND_URL`
- `JWT_SECRET`
- `JWT_EXPIRY`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `GEMINI_API_KEY`
- `ENCRYPTION_KEY`
- `LOG_LEVEL`

## Local Run

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Current Note

If GitHub Actions shows red, check the build step first.
At the moment the failing runs are failing at `Build`, not at install, lint, or test.

## Repository Cleanup

- only one markdown file is intentionally kept:
  `README.md`

Last updated: 2026-04-28
