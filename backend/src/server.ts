import http from 'http'
import { Server as SocketIOServer } from 'socket.io'
import { Express } from 'express'
import { CONFIG } from '@shared/constants/config'
import { COLLECTIONS } from '@shared/constants/config'
import logger from '@shared/utils/logger'
import { initializeFirestore } from '@modules/database/firestore'
import SocketManager from '@websocket/socketManager'
import baileyService from '@modules/whatsapp/services/baileyService'

export const startServer = async (app: Express): Promise<http.Server> => {
  try {
    // Initialize Firestore
    await initializeFirestore()

    // Create HTTP server
    const httpServer = http.createServer(app)

    // Initialize Socket.IO
    const io = new SocketIOServer(httpServer, {
      cors: {
        origin: [
          CONFIG.FRONTEND_URL,
          'https://sqlrizwan.github.io',
          'https://sqlrizwan.github.io/Whatsapp-ai-agent-Automation-',
          'http://localhost:5173',
        ],
        credentials: true
      }
    })

    // Initialize Socket Manager
    const socketManager = new SocketManager(io)

    // Store io and socket manager in app for use in routes
    app.locals.io = io
    app.locals.socketManager = socketManager

    // Wire Socket.IO into the WhatsApp service so QR / status updates can stream.
    baileyService.setIO(io)

    // Warn early if critical API keys are absent so the issue is visible at boot
    if (!CONFIG.GEMINI_API_KEY) {
      logger.warn('GEMINI_API_KEY is not set — AI features will not work until it is configured')
    }

    // Start server
    httpServer.listen(CONFIG.PORT, () => {
      logger.info(`✅ Server running on http://localhost:${CONFIG.PORT}`)
      logger.info(`Environment: ${CONFIG.NODE_ENV}`)
      logger.info(`API URL: ${CONFIG.API_URL}`)
      logger.info(`Frontend URL: ${CONFIG.FRONTEND_URL}`)
    })

    // Handle graceful shutdown
    process.on('SIGTERM', async () => {
      logger.info('SIGTERM received, shutting down gracefully...')
      httpServer.close(() => {
        logger.info('Server closed')
        process.exit(0)
      })
    })

    process.on('SIGINT', async () => {
      logger.info('SIGINT received, shutting down gracefully...')
      httpServer.close(() => {
        logger.info('Server closed')
        process.exit(0)
      })
    })

    process.on('uncaughtException', (error) => {
      logger.error('Uncaught Exception:', error)
      process.exit(1)
    })

    process.on('unhandledRejection', (reason, promise) => {
      logger.error('Unhandled Rejection at:', promise, 'reason:', reason)
      process.exit(1)
    })

    // Self-ping only on Render (production) to prevent free-tier cold starts
    if (CONFIG.NODE_ENV === 'production') {
      const selfUrl = CONFIG.API_URL || `http://localhost:${CONFIG.PORT}`
      setInterval(() => {
        fetch(`${selfUrl}/health`)
          .then(() => logger.info('[keepalive] ping OK'))
          .catch((e) => logger.warn(`[keepalive] ping failed: ${(e as Error).message}`))
      }, 14 * 60 * 1000)
    }

    // Auto-reconnect any WhatsApp session that has stored credentials in Firestore
    setTimeout(async () => {
      try {
        const db = (await import('@modules/database/firestore')).getFirestore()
        if (!db) return
        const snap = await db.collection(COLLECTIONS.WHATSAPP_SESSIONS).listDocuments()
        for (const ref of snap) {
          const uid = ref.id
          const credsSnap = await ref.collection('auth_state').doc('creds').get()
          if (!credsSnap.exists) continue
          logger.info(`[server] auto-reconnecting WhatsApp for uid=${uid}`)
          baileyService.start(uid).catch((e) => logger.warn('[server] auto-reconnect failed', e as Error))
        }
      } catch (e) {
        logger.warn('[server] auto-reconnect query failed', e as Error)
      }
    }, 3000)

    return httpServer
  } catch (error) {
    logger.error('Failed to start server:', error)
    throw error
  }
}

export default startServer
