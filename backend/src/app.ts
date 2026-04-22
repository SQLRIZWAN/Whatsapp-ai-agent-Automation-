import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { CONFIG } from '@shared/constants/config'
import { errorHandler, AppError, asyncHandler } from '@shared/utils/errorHandler'
import { ErrorCode } from '@shared/types/common.types'
import logger from '@shared/utils/logger'

export const createApp = (): Express => {
  const app = express()

  // Security middleware
  app.use(helmet())

  // CORS configuration
  app.use(cors({
    origin: CONFIG.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }))

  // Body parser middleware
  app.use(express.json({ limit: '50mb' }))
  app.use(express.urlencoded({ limit: '50mb', extended: true }))

  // Request logging middleware
  app.use((req: Request, res: Response, next: NextFunction) => {
    const start = Date.now()
    res.on('finish', () => {
      const duration = Date.now() - start
      logger.info({
        method: req.method,
        path: req.path,
        status: res.statusCode,
        duration: `${duration}ms`,
        ip: req.ip
      })
    })
    next()
  })

  // Health check endpoint
  app.get('/health', asyncHandler(async (req: Request, res: Response) => {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    })
  }))

  // API routes will be mounted here
  app.use('/api', express.Router())

  // 404 handler
  app.use((req: Request, res: Response) => {
    throw new AppError(
      ErrorCode.NOT_FOUND,
      `Route ${req.originalUrl} not found`,
      404
    )
  })

  // Global error handler (must be last)
  app.use(errorHandler)

  return app
}

export default createApp
