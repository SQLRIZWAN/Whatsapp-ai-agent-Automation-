export const CONFIG = {
  // Server
  PORT: parseInt(process.env.PORT || '5000', 10),
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_URL: process.env.API_URL || 'http://localhost:5000',

  // CORS
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',

  // JWT
  JWT_SECRET: process.env.JWT_SECRET || '285038287231@RIZWAN786_a4f9c2d7e1b68a35f2c4e9b1d7a8f0c3',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '7d',

  // Database
  FIRESTORE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIRESTORE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
  FIRESTORE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
  USE_FIRESTORE_EMULATOR: process.env.USE_FIRESTORE_EMULATOR === 'true',
  FIRESTORE_EMULATOR_HOST: process.env.FIRESTORE_EMULATOR_HOST,

  // Gemini API
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  ENCRYPTION_KEY: process.env.ENCRYPTION_KEY || '',

  // ElevenLabs (TTS fallback layer 2)
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY || '',
  ELEVENLABS_VOICE_ID: process.env.ELEVENLABS_VOICE_ID || 'pNInz6obpgDQGcFmaJgB',

  // WhatsApp
  QR_CODE_EXPIRY: parseInt(process.env.QR_CODE_EXPIRY || '3600000', 10),

  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
  RATE_LIMIT_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),

  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  LOG_FILE: process.env.LOG_FILE || 'logs/app.log'
}

export const MESSAGES = {
  SUCCESS: 'Operation successful',
  ERROR: 'An error occurred',
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Access forbidden',
  NOT_FOUND: 'Resource not found',
  INVALID_CREDENTIALS: 'Invalid email or password',
  REGISTRATION_SUCCESS: 'User registered successfully',
  LOGIN_SUCCESS: 'Login successful',
  LOGOUT_SUCCESS: 'Logged out successfully',
  TOKEN_REFRESHED: 'Token refreshed successfully'
}

export const COLLECTIONS = {
  USERS: 'users',
  SESSIONS: 'sessions',
  CONFIGURATIONS: 'configurations',
  MESSAGES: 'messages',
  CALLS: 'calls',
  QR_CODES: 'qrCodes',
  WHATSAPP_SESSIONS: 'whatsapp_sessions',
  USER_API_KEYS: 'user_api_keys',
  DEVICE_TOKENS: 'deviceTokens',
  AUDIT_LOGS: 'auditLogs'
}

export const SESSION_STATUS = {
  DISCONNECTED: 'disconnected',
  CONNECTING: 'connecting',
  CONNECTED: 'connected'
}

export const CALL_STATUS = {
  MISSED: 'missed',
  DECLINED: 'declined',
  FORWARDED: 'forwarded',
  HANDLED: 'handled',
  FAILED: 'failed'
}

export const CALL_TYPE = {
  INCOMING: 'incoming',
  OUTGOING: 'outgoing'
}

export const MESSAGE_TYPE = {
  TEXT: 'text',
  IMAGE: 'image',
  VIDEO: 'video',
  AUDIO: 'audio'
}

export const MESSAGE_STATUS = {
  SENT: 'sent',
  DELIVERED: 'delivered',
  READ: 'read',
  FAILED: 'failed'
}
