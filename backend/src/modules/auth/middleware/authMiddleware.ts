import { Request, Response, NextFunction } from 'express'
import tokenService from '../services/tokenService'
import { AppError } from '@shared/utils/errorHandler'
import { ErrorCode } from '@shared/types/common.types'
import logger from '@shared/utils/logger'

declare global {
  namespace Express {
    interface Request {
      uid?: string
      email?: string
    }
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError(
        ErrorCode.UNAUTHORIZED,
        'Authorization header missing or invalid',
        401
      )
    }

    const token = authHeader.substring(7)
    const decoded = tokenService.verifyToken(token)

    req.uid = decoded.uid
    req.email = decoded.email

    next()
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
        error: error.code,
        timestamp: new Date().toISOString()
      })
    }

    logger.error('Auth middleware error:', error)
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
      error: ErrorCode.UNAUTHORIZED,
      timestamp: new Date().toISOString()
    })
  }
}

export default authMiddleware
