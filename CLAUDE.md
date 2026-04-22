# WhatsApp AI Automation System - Development Guide

## Project Overview

A complete WhatsApp automation platform powered by Google Gemini AI that handles messages, calls, images, and videos with intelligent responses and call forwarding capabilities.

**Repository:** SQLRIZWAN/whatsapp-ai-agent-automation-
**Branch:** `claude/whatsapp-ai-automation-MBek3`
**Master Plan:** `/root/.claude/plans/bhai-mujko-ek-project-banana-piped-quokka.md`

## Tech Stack

### Backend
- **Framework:** Node.js + Express (TypeScript)
- **WhatsApp Integration:** Baileys (free, no API costs)
- **AI:** Google Gemini API only
- **Database:** Google Firestore with custom auth
- **Real-time:** Socket.IO for WebSocket
- **Authentication:** JWT tokens

### Frontend
- **Framework:** React 18 (TypeScript)
- **Build Tool:** Vite
- **State Management:** Zustand
- **HTTP Client:** Axios
- **Styling:** CSS-in-JS
- **Routing:** React Router

## Project Structure

```
.
├── backend/                  # Node.js Express backend
│   ├── src/
│   │   ├── modules/         # Feature modules (auth, whatsapp, config, etc.)
│   │   ├── websocket/       # Socket.IO setup
│   │   ├── shared/          # Utilities, types, constants
│   │   ├── app.ts           # Express app setup
│   │   ├── server.ts        # HTTP server & Socket.IO
│   │   └── index.ts         # Entry point
│   ├── tests/               # Backend tests
│   ├── package.json
│   ├── tsconfig.json
│   └── .env                 # Environment variables
│
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API & socket clients
│   │   ├── hooks/           # Custom React hooks
│   │   ├── store/           # Zustand stores
│   │   ├── types/           # TypeScript types
│   │   ├── App.tsx          # Root component
│   │   └── index.tsx        # Entry point
│   ├── tests/               # Frontend tests
│   ├── vite.config.ts
│   ├── vitest.config.ts
│   ├── package.json
│   └── .env                 # Environment variables
│
└── docs/                    # Documentation
```

## Development Workflow

### Running Locally

**Backend:**
```bash
cd backend
npm install
npm run dev      # Starts on http://localhost:5000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev      # Starts on http://localhost:5173
```

### Git Workflow

1. Make changes on branch `claude/whatsapp-ai-automation-MBek3`
2. Commit with descriptive messages:
   ```bash
   git add <files>
   git commit -m "feat/fix: description"
   ```
3. Push to remote:
   ```bash
   git push origin claude/whatsapp-ai-automation-MBek3
   ```

## Implementation Phases

### Phase 1: Foundation ✅ COMPLETED
- Project structure and configuration
- TypeScript setup
- Express and React initialization
- Database client (Firestore)
- Logging and error handling
- Basic authentication pages (UI only)

**Files Created:** 27 files
**Commit:** `6bed8a5`

### Phase 2: Authentication (IN PROGRESS)
- User registration endpoint
- User login endpoint with JWT
- Password hashing (bcrypt)
- Token refresh mechanism
- Protected route middleware
- React auth UI and state management

**Critical Files to Create:**
- `backend/src/modules/auth/services/authService.ts`
- `backend/src/modules/auth/routes/authRoutes.ts`
- `backend/src/modules/database/repositories/userRepository.ts`
- `frontend/src/pages/RegisterPage.tsx`
- `frontend/src/hooks/useAuth.ts`

**Database:**
- `users/{uid}` collection with: email, passwordHash, displayName, createdAt, status

### Phase 3: Session & QR (PENDING)
- Session repository in Firestore
- Baileys library initialization
- QR code generation and caching
- QR status endpoint
- React QRDisplay component
- WebSocket status updates

### Phase 4: Message Pipeline (PENDING)
- Message event listener
- Gemini AI integration
- Message processing and logging
- React ChatInterface

### Phase 5: Call Handling (PENDING)
- Call detection and routing
- AI decision logic
- Call forwarding
- Text-to-speech for responses
- AI avatar for video calls

### Phase 6: Configuration System (PENDING)
- System prompt editor
- AI behavior settings
- Call forwarding configuration
- React ConfigPanel

### Phase 7-10: (PENDING)
- Real-time updates, Dashboard, Testing, Deployment

## Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=5000
JWT_SECRET=your_secret
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_key
FIREBASE_CLIENT_EMAIL=your_email
GEMINI_API_KEY=your_key
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

## Key Features

### Architecture Highlights
- **Modular Design:** Each feature in separate module with controllers, services, routes
- **Type Safety:** Full TypeScript with strict mode
- **Error Handling:** Centralized error handler with custom error codes
- **Logging:** Winston logger with file and console output
- **Database:** Firestore with UID-based data isolation
- **Real-time:** Socket.IO for instant updates
- **State Management:** Zustand for simple, effective state

### Security
- JWT-based authentication
- Password hashing with bcrypt
- CORS configuration
- Helmet security headers
- Input validation
- Rate limiting (setup in config)
- Firestore security rules (UID-based access)

## Database Schema (Firestore)

### Core Collections

**users/{uid}**
```
uid, email, passwordHash, displayName, createdAt, updatedAt, status, preferences
```

**sessions/{uid}/active/{sessionId}**
```
sessionId, deviceInfo, qrCode, whatsappPhone, connectionStatus
```

**configurations/{uid}**
```
systemPrompt, aiModel, temperature, callForwarding, messageProcessing, responseSettings
```

**messages/{uid}/history/{messageId}**
```
from, to, content, type, mediaUrl, isFromAI, aiResponse, status, timestamp
```

**calls/{uid}/history/{callId}**
```
from, to, callType, status, duration, forwardedTo, aiDecision, timestamp
```

**qrCodes/{uid}**
```
currentQR, history, lastScannedAt
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - Logout
- `POST /api/auth/refresh` - Refresh JWT token
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### WhatsApp (Phase 3+)
- `GET /api/whatsapp/qr` - Get QR code
- `GET /api/whatsapp/status` - Connection status
- `POST /api/whatsapp/send-message` - Send message
- `GET /api/whatsapp/messages` - Get message history
- `GET /api/whatsapp/calls` - Get call history

### Configuration (Phase 6+)
- `GET /api/config` - Get configuration
- `PUT /api/config/system-prompt` - Update AI prompt
- `PUT /api/config/forwarding` - Update call forwarding

## Important Notes

1. **QR Code Stability:** Server-side caching prevents frequent changes
2. **Single Device:** Enforced via session management, one session per UID
3. **System Prompt:** Stored in Firestore, used by AI for decisions
4. **Call Forwarding:** Configured per user, applied by callHandler
5. **Media Processing:** Images and videos sent to Gemini for analysis
6. **Message History:** All conversations logged in Firestore for learning

## Testing

**Run tests:**
```bash
# Backend
cd backend && npm test

# Frontend
cd frontend && npm test
```

**Coverage:**
```bash
npm run test:coverage
```

## Debugging

**Backend:**
- Check logs: `cat logs/app.log` or `logs/error.log`
- Enable debug mode: `LOG_LEVEL=debug npm run dev`
- Use Firestore Emulator: `USE_FIRESTORE_EMULATOR=true npm run dev`

**Frontend:**
- Check browser console for errors
- Use React DevTools extension
- Check Network tab in DevTools for API calls

## Common Issues

### Port Already in Use
```bash
# Kill process on port
lsof -ti:5000 | xargs kill -9
lsof -ti:5173 | xargs kill -9
```

### Firestore Connection Error
- Ensure Firebase credentials in `.env`
- Check `FIREBASE_PRIVATE_KEY` formatting (escaped newlines: `\n`)
- Use emulator for local dev: `USE_FIRESTORE_EMULATOR=true`

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist && npm run build`

## Useful Resources

- [Baileys GitHub](https://github.com/WhiskeySockets/Baileys)
- [Google Gemini API Docs](https://ai.google.dev/)
- [Firebase Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

## Next Steps

1. **Phase 2 (Authentication):**
   - Implement `authService.ts` with registration, login, JWT logic
   - Create auth routes with input validation
   - Build user repository for Firestore persistence
   - Create React register form and auth context

2. **Testing:**
   - Setup test environment
   - Write unit tests for auth service
   - Integration tests for API endpoints

3. **Documentation:**
   - API specification document
   - Database schema documentation
   - Setup and deployment guide

## Questions or Issues?

Refer to:
- Master plan: `/root/.claude/plans/bhai-mujko-ek-project-banana-piped-quokka.md`
- README.md for overview
- GitHub issues for bug tracking

---

**Last Updated:** 2026-04-22
**Current Phase:** Phase 1 ✅ → Phase 2 🔄
**Next Phase Start:** Phase 2 - Authentication
