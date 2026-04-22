import { Request, Response } from 'express'
import authService from '../services/authService'
import tokenService from '../services/tokenService'
import { asyncHandler } from '@shared/utils/errorHandler'
import logger from '@shared/utils/logger'
import { MESSAGES } from '@shared/constants/config'

export const register = asyncHandler(async (req: Request, res: Response) => {
  const result = await authService.register(req.body)
  res.status(201).json({
    success: true,
    message: MESSAGES.REGISTRATION_SUCCESS,
    data: result,
    timestamp: new Date().toISOString()
  })
})

export const login = asyncHandler(async (req: Request, res: Response) => {
  const result = await authService.login(req.body)
  res.status(200).json({
    success: true,
    message: MESSAGES.LOGIN_SUCCESS,
    data: result,
    timestamp: new Date().toISOString()
  })
})

export const logout = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: MESSAGES.LOGOUT_SUCCESS,
    timestamp: new Date().toISOString()
  })
})

export const refreshToken = asyncHandler(async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Authorization header missing',
      error: 'UNAUTHORIZED'
    })
  }

  const oldToken = authHeader.substring(7)
  const token = tokenService.refreshToken(oldToken)

  res.status(200).json({
    success: true,
    message: MESSAGES.TOKEN_REFRESHED,
    data: { token },
    timestamp: new Date().toISOString()
  })
})

export const getCurrentUser = asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized'
    })
  }

  const user = await authService.getCurrentUser(req.uid)
  res.status(200).json({
    success: true,
    message: MESSAGES.SUCCESS,
    data: user,
    timestamp: new Date().toISOString()
  })
})

export const updateProfile = asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized'
    })
  }

  const user = await authService.updateProfile(req.uid, req.body)
  res.status(200).json({
    success: true,
    message: 'Profile updated successfully',
    data: user,
    timestamp: new Date().toISOString()
  })
})
