# WhatsApp AI Automation System

A comprehensive WhatsApp automation platform powered by Multi-Provider AI (Gemini, Groq, OpenAI) that handles messages, calls, images, and videos with intelligent responses and call forwarding capabilities.

## Features

✨ **Message Automation**
- Automatic text message responses powered by **Multi-Provider AI** (Gemini, Groq, OpenAI)
- **User-provided API Keys**: Users can use their own Gemini, Groq, or OpenAI keys
- Image and video understanding with AI analysis (via Gemini)
- Configurable system prompts for custom AI behavior

📞 **Call Management**
- WhatsApp voice call handling with AI agent
- WhatsApp video call support with AI avatar
- Intelligent call forwarding to configured numbers
- Call history and logs

🌐 **Web Dashboard**
- Live QR code for WhatsApp connection
- Real-time chat interface
- Call history and statistics
- **Multi-tab Settings Panel**: Organized UI for AI, Persona, and Calls
- **Smart API Routing**: Automatically uses user API keys if provided, else falls back to backend defaults

🔐 **Security & Authentication**
- Email/password user registration and login
- JWT-based session management
- UID-based multi-session support
- Firestore security rules for data isolation

💾 **Data Persistence**
- Google Firestore for scalable storage
- Message history and conversation logs
- Call logs and forwarding records
- User configurations and preferences

⚡ **Real-time Updates**
- WebSocket (Socket.IO) for instant updates
- Live message synchronization
- Call notifications
- Connection status tracking

## Tech Stack

### Backend
- **Framework:** Node.js + Express (TypeScript)
- **WhatsApp Integration:** Baileys (free, no API costs)
- **AI Providers:** Google Gemini, Groq (Llama 3), OpenAI (GPT-4o)
- **Database:** Google Firestore
- **Real-time:** Socket.IO
- **Authentication:** JWT tokens

### Frontend
- **Framework:** React 18 (TypeScript)
- **Build Tool:** Vite
- **State Management:** Zustand
- **HTTP Client:** Axios
- **WebSocket:** Socket.IO Client
- **Routing:** React Router

## Project Structure

```
.
├── backend/                 # Node.js + Express backend
│   ├── src/
│   │   ├── modules/        # Feature modules
│   │   │   ├── auth/       # Authentication
│   │   │   ├── whatsapp/   # WhatsApp integration
│   │   │   ├── config/     # Configuration management
│   │   │   ├── session/    # Session management
│   │   │   └── database/   # Firestore repositories
│   │   ├── websocket/      # Socket.IO setup
│   │   └── shared/         # Utilities, types, constants
│   └── tests/              # Backend tests
│
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API & socket clients
│   │   ├── hooks/          # Custom React hooks
│   │   ├── store/          # Zustand stores
│   │   ├── types/          # TypeScript types
│   │   └── utils/          # Utilities
│   └── tests/              # Frontend tests
│
└── docs/                    # Documentation
```

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm or yarn
- Google Firebase Project
- Gemini API key (from Google AI Studio or via GitHub Secrets)

### Backend Setup

```bash
cd backend
npm install
cp .env .env.local  # Update with your credentials
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
cp .env .env.local  # Update API URL
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=5000
JWT_SECRET=your_secret_key
FIREBASE_PROJECT_ID=your_project
FIREBASE_PRIVATE_KEY=your_key
FIREBASE_CLIENT_EMAIL=your_email
GEMINI_API_KEY=your_gemini_key
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

## Development Phases

### Phase 1: Foundation ✅
- Project structure and tooling
- TypeScript and build configuration
- Environment setup

### Phase 2: Authentication (In Progress)
- User registration and login
- JWT token management
- Protected routes

### Phase 3: WhatsApp Connection
- Baileys integration
- QR code generation
- Session management

### Phase 4: Message Processing
- Message receiving
- Gemini AI integration
- Message history

### Phase 5: Call Handling
- Voice and video call handling
- Call forwarding logic
- Call logging

### Phase 6: Configuration System
- System prompt editor
- AI behavior settings
- Call forwarding configuration

### Phase 7: Real-time Updates
- WebSocket setup
- Live message updates
- Status notifications

### Phase 8: Dashboard
- Analytics and statistics
- Message and call history
- User dashboard

### Phase 9: Testing & Security
- Unit and integration tests
- Security rules
- Rate limiting

### Phase 10: Deployment
- Docker containerization
- CI/CD pipeline
- Production setup

## API Documentation

See [docs/API.md](docs/API.md) for complete API endpoint documentation.

## Database Schema

See [docs/DATABASE_SCHEMA.md](docs/DATABASE_SCHEMA.md) for Firestore collection structure.

## Contributing

1. Create a feature branch from `main`
2. Commit your changes
3. Push to your branch
4. Open a pull request

## Security

- **Secrets Management:** API keys stored in GitHub secrets
- **Data Isolation:** Firestore rules ensure user data isolation
- **Rate Limiting:** Endpoint protection against abuse
- **Input Validation:** All inputs validated before processing

## License

MIT

## Support

For issues, feature requests, or questions:
- Create an issue on GitHub
- Check existing documentation in `/docs`
- Review the master plan in `.claude/plans/`

## Roadmap

- [ ] WhatsApp Status automation
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Mobile app (React Native)
- [ ] Backup and restore functionality
- [ ] Team collaboration features
- [ ] Advanced AI prompt templates

---

**Last Updated:** 2026-04-27
