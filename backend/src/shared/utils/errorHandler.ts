import { Request, Response, NextFunction } from 'express'
import { ErrorCode, ErrorDetails, ApiResponse } from '../types/common.types'
import logger from './logger'

export class AppError extends Error {
  constructor(
    public code: ErrorCode,
    public message: string,
    public statusCode: number = 500,
    public details?: Record<string, unknown>
  ) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
  }
}

export const errorHandler = (
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = err instanceof AppError
    ? err
    : new AppError(
        ErrorCode.INTERNAL_ERROR,
        err.message || 'Internal server error',
        500
      )

  logger.error({
    message: error.message,
    code: error.code,
    statusCode: error.statusCode,
    path: req.path,
    method: req.method,
    stack: error.stack
  })

  const response: ApiResponse<null> = {
    success: false,
    message: error.message,
    error: error.code,
    timestamp: new Date().toISOString()
  }

  res.status(error.statusCode).json(response)
}

export const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}

export const createErrorResponse = (
  code: ErrorCode,
  message: string,
  statusCode: number = 500,
  details?: Record<string, unknown>
): [AppError, number] => {
  return [
    new AppError(code, message, statusCode, details),
    statusCode
  ]
}
