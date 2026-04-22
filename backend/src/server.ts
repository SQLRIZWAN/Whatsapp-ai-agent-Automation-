import http from 'http'
import { Server as SocketIOServer } from 'socket.io'
import { Express } from 'express'
import { CONFIG } from '@shared/constants/config'
import logger from '@shared/utils/logger'
import { initializeFirestore } from '@modules/database/firestore'

export const startServer = async (app: Express): Promise<http.Server> => {
  try {
    // Initialize Firestore
    await initializeFirestore()

    // Create HTTP server
    const httpServer = http.createServer(app)

    // Initialize Socket.IO
    const io = new SocketIOServer(httpServer, {
      cors: {
        origin: CONFIG.FRONTEND_URL,
        credentials: true
      }
    })

    // Socket.IO connection handling
    io.on('connection', (socket) => {
      logger.info(`Client connected: ${socket.id}`)

      socket.on('disconnect', () => {
        logger.info(`Client disconnected: ${socket.id}`)
      })

      socket.on('error', (error) => {
        logger.error(`Socket error for ${socket.id}:`, error)
      })
    })

    // Store io instance in app for use in routes
    app.locals.io = io

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

    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      logger.error('Uncaught Exception:', error)
      process.exit(1)
    })

    process.on('unhandledRejection', (reason, promise) => {
      logger.error('Unhandled Rejection at:', promise, 'reason:', reason)
    })

    return httpServer
  } catch (error) {
    logger.error('Failed to start server:', error)
    throw error
  }
}

export default startServer
