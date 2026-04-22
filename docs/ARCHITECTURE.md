# System Architecture

## Overview

WhatsApp AI Automation System is a full-stack application designed to handle WhatsApp messages, calls, and media processing using Google Gemini AI. The system is built with a modular architecture supporting easy scaling and maintenance.

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Web Browsers                           │
│              (React Frontend on Localhost:5173)             │
└────────────────────────┬────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
    REST API         WebSocket        Local Storage
        │                │                │
┌───────┴────────────────┴────────────────┴──────────────────┐
│              Express Backend Server                        │
│                (Port 5000)                                 │
│  ┌───────────────────────────────────────────────────────┐ │
│  │ Middleware: Auth, Logging, Error Handling            │ │
│  └───────────────────────────────────────────────────────┘ │
│  ┌─────────────┬─────────────┬──────────┬──────────────┐  │
│  │ Auth Module │ WhatsApp    │ Config   │ Session      │  │
│  │             │ Module      │ Module   │ Module       │  │
│  ├─────────────┼─────────────┼──────────┼──────────────┤  │
│  │ - Register  │ - Baileys   │ - System │ - QR codes   │  │
│  │ - Login     │ - Message   │   Prompt │ - Device     │  │
│  │ - JWT       │   Handler   │ - AI     │   Management │  │
│  │ - Token     │ - Call      │   Settings│ - Session    │  │
│  │   Management│   Handler   │ - Call   │   Tracking   │  │
│  │             │ - AI Service│   Forward│              │  │
│  │             │ - QR Service│         │              │  │
│  └─────────────┴─────────────┴──────────┴──────────────┘  │
│  ┌───────────────────────────────────────────────────────┐ │
│  │ Socket.IO Real-time Event Manager                    │ │
│  │ - Message events, Call notifications, Status updates │ │
│  └───────────────────────────────────────────────────────┘ │
└───────┬────────────────┬──────────────────┬────────────────┘
        │                │                  │
        │        ┌───────┴──────────┐      │
        │        │                  │      │
   ┌────┴────┐  ┌┴──────────────┐  │  ┌───┴─────────┐
   │ Baileys │  │  Gemini AI    │  │  │ Google      │
   │WhatsApp │  │     API       │  │  │ Firestore   │
   │  Client │  │               │  │  │ Database    │
   │         │  │ - Text Model  │  │  │             │
   │ - Voice │  │ - Vision Model│  │  │ - Users     │
   │ - Video │  │ - Decision    │  │  │ - Sessions  │
   │ - Media │  │   Logic       │  │  │ - Messages  │
   └─────────┘  └───────────────┘  │  │ - Calls     │
                                    │  │ - Config    │
                                    │  │ - QR Codes  │
                                    │  │ - Audit Logs│
                                    │  └─────────────┘
                                    │
                                    └──────────────────
                                         (Authentication:
                                          Service Account
                                          Credentials)
```

## Module Architecture

### Backend Structure

```
backend/
├── src/
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── controllers/      - Request handlers
│   │   │   ├── services/         - Business logic
│   │   │   ├── middleware/       - JWT verification
│   │   │   ├── routes/           - Route definitions
│   │   │   └── types/            - TypeScript types
│   │   │
│   │   ├── whatsapp/
│   │   │   ├── services/
│   │   │   │   ├── baileyService.ts      - WhatsApp connection
│   │   │   │   ├── qrService.ts          - QR code management
│   │   │   │   ├── messageService.ts     - Message persistence
│   │   │   │   ├── callService.ts        - Call handling
│   │   │   │   └── aiService.ts          - Gemini integration
│   │   │   ├── handlers/
│   │   │   │   ├── messageHandler.ts     - Message processing
│   │   │   │   ├── callHandler.ts        - Call processing
│   │   │   │   └── mediaHandler.ts       - Media handling
│   │   │   ├── routes/           - WhatsApp API routes
│   │   │   └── types/            - WhatsApp types
│   │   │
│   │   ├── config/
│   │   │   ├── services/         - Config management
│   │   │   ├── routes/           - Config API routes
│   │   │   └── types/            - Config types
│   │   │
│   │   ├── session/
│   │   │   ├── services/         - Session management
│   │   │   ├── routes/           - Session API routes
│   │   │   └── types/            - Session types
│   │   │
│   │   ├── database/
│   │   │   ├── firestore.ts      - Firestore initialization
│   │   │   └── repositories/     - Data access layer
│   │   │       ├── userRepository.ts
│   │   │       ├── messageRepository.ts
│   │   │       ├── callRepository.ts
│   │   │       └── configRepository.ts
│   │   │
│   │   └── shared/
│   │       ├── utils/            - Utility functions
│   │       ├── constants/        - App constants
│   │       └── types/            - Common types
│   │
│   ├── websocket/
│   │   ├── socketManager.ts      - Socket.IO management
│   │   └── events/               - Event handlers
│   │
│   ├── app.ts                    - Express app setup
│   ├── server.ts                 - HTTP server startup
│   └── index.ts                  - Application entry point
│
├── tests/
│   ├── unit/                     - Unit tests
│   └── integration/              - Integration tests
│
└── package.json, tsconfig.json, etc.
```

### Frontend Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── auth/                - Login/Register forms
│   │   ├── whatsapp/            - WhatsApp UI components
│   │   ├── config/              - Configuration UI
│   │   ├── dashboard/           - Dashboard components
│   │   ├── common/              - Shared components
│   │   └── layout/              - Layout components
│   │
│   ├── pages/                   - Page components
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── ChatPage.tsx
│   │   ├── ConfigPage.tsx
│   │   └── SessionPage.tsx
│   │
│   ├── services/
│   │   ├── api/
│   │   │   ├── apiClient.ts     - HTTP client setup
│   │   │   ├── authApi.ts       - Auth API calls
│   │   │   ├── whatsappApi.ts   - WhatsApp API calls
│   │   │   ├── configApi.ts     - Config API calls
│   │   │   └── sessionApi.ts    - Session API calls
│   │   │
│   │   ├── socket/
│   │   │   └── socketClient.ts  - WebSocket client
│   │   │
│   │   └── storage/
│   │       └── localStorage.ts  - Local storage utilities
│   │
│   ├── hooks/
│   │   ├── useAuth.ts           - Authentication hook
│   │   ├── useSocket.ts         - WebSocket hook
│   │   ├── useMessages.ts       - Messages state
│   │   ├── useConfig.ts         - Configuration state
│   │   └── useSession.ts        - Session state
│   │
│   ├── store/
│   │   ├── authStore.ts         - Zustand auth store
│   │   ├── messageStore.ts      - Message state
│   │   ├── sessionStore.ts      - Session state
│   │   ├── configStore.ts       - Config state
│   │   └── uiStore.ts           - UI state
│   │
│   ├── types/
│   │   ├── auth.types.ts
│   │   ├── whatsapp.types.ts
│   │   ├── config.types.ts
│   │   └── common.types.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── components/
│   │
│   ├── utils/
│   │   ├── formatters.ts        - Data formatting
│   │   ├── validators.ts        - Form validation
│   │   └── helpers.ts           - Helper functions
│   │
│   ├── App.tsx                  - Root component
│   └── index.tsx                - React entry point
│
├── tests/
│   ├── unit/
│   └── integration/
│
└── package.json, tsconfig.json, vite.config.ts, etc.
```

## Data Flow

### Message Processing Flow

```
1. User sends WhatsApp message
   │
   ├─ Baileys receives message
   │
   ├─ messageHandler processes
   │   ├─ Fetch user config
   │   ├─ Save incoming message
   │   └─ Check if auto-respond enabled
   │
   ├─ aiService.generateResponse()
   │   └─ Call Gemini API with system prompt
   │
   ├─ messageService.saveMessage()
   │   └─ Store AI response in Firestore
   │
   ├─ baileyService.sendMessage()
   │   └─ Send response via WhatsApp
   │
   └─ socketManager.emitMessageUpdate()
       └─ Notify frontend via WebSocket
```

### Call Handling Flow

```
1. Incoming WhatsApp call
   │
   ├─ Baileys detects call
   │
   ├─ callHandler.handleIncomingCall()
   │   ├─ Fetch user config
   │   ├─ aiService.makeDecision()
   │   │  └─ Apply system prompt logic
   │   │
   │   ├─ Decision: Forward | Handle | Decline
   │   │   ├─ Forward: Forward to configured number
   │   │   ├─ Handle: AI agent answers
   │   │   └─ Decline: Reject call
   │
   ├─ callService.saveCall()
   │   └─ Log call to Firestore
   │
   └─ socketManager.emitCallNotification()
       └─ Alert frontend of call decision
```

## Technology Stack

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** Google Firestore
- **WhatsApp:** Baileys
- **AI:** Google Generative AI (Gemini)
- **Auth:** JWT
- **Real-time:** Socket.IO
- **Logging:** Winston

### Frontend
- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **State Management:** Zustand
- **HTTP Client:** Axios
- **Real-time:** Socket.IO Client
- **Routing:** React Router

### Deployment
- **GitHub:** Repository & CI/CD
- **Hosting:** Cloud Run / Firebase Hosting
- **Database:** Firestore
- **Storage:** Cloud Storage

## Security Architecture

```
┌─────────────────────────────────────────────────────┐
│            User Authentication Layer                │
│  ┌───────────────────────────────────────────────┐  │
│  │ Email/Password Registration & Login (bcrypt)  │  │
│  │ JWT Token Generation & Verification           │  │
│  │ Token Refresh Mechanism                       │  │
│  └───────────────────────────────────────────────┘  │
└──────────────────┬──────────────────────────────────┘
                   │
┌──────────────────┴──────────────────────────────────┐
│          API Request Authorization                  │
│  ┌───────────────────────────────────────────────┐  │
│  │ Bearer Token Validation in Headers            │  │
│  │ UID Verification in Request Context           │  │
│  │ Rate Limiting per User                        │  │
│  └───────────────────────────────────────────────┘  │
└──────────────────┬──────────────────────────────────┘
                   │
┌──────────────────┴──────────────────────────────────┐
│          Database Access Control                    │
│  ┌───────────────────────────────────────────────┐  │
│  │ Firestore Security Rules                      │  │
│  │ UID-Based Data Isolation                      │  │
│  │ Collection-Level Access Control               │  │
│  └───────────────────────────────────────────────┘  │
└──────────────────┬──────────────────────────────────┘
                   │
┌──────────────────┴──────────────────────────────────┐
│          API Transport Security                     │
│  ┌───────────────────────────────────────────────┐  │
│  │ HTTPS/TLS Encryption                         │  │
│  │ CORS Configuration                           │  │
│  │ Helmet Security Headers                      │  │
│  │ Input Validation & Sanitization              │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

## Performance Considerations

### Backend Optimization
- Message batching for high volume
- Database indexing on frequently queried fields
- Caching of user configurations
- QR code caching to reduce generation

### Frontend Optimization
- Code splitting and lazy loading
- Component memoization
- Local state caching
- Debounced event handlers

### Database Optimization
- Composite indexes for common queries
- Data partitioning by user ID
- Cleanup jobs for expired data
- Batch operations for bulk updates

## Scalability

### Horizontal Scaling
- Stateless backend services (can run multiple instances)
- Load balancing via Cloud Run
- Database auto-scaling with Firestore
- Distributed WebSocket via Socket.IO adapter

### Vertical Scaling
- Efficient database queries
- Memory management for large payloads
- Request pooling and connection management

## Error Handling & Monitoring

```
Error Handling Hierarchy:
1. Input Validation Layer
   ├─ Validates user input
   └─ Returns 400 Bad Request

2. Business Logic Layer
   ├─ Processes requests
   └─ Returns 500 on failures

3. Database Layer
   ├─ Manages data operations
   └─ Logs errors for debugging

4. Global Error Handler
   ├─ Catches all errors
   ├─ Logs to Winston
   └─ Returns standardized response

Monitoring:
- Application logs (Winston)
- Firebase Console monitoring
- Error tracking via Sentry (optional)
- Performance metrics via Cloud Trace
```

---

**Last Updated:** 2026-04-22
