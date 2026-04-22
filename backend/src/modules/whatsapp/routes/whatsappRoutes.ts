import { Router, Request, Response } from 'express'
import authMiddleware from '@modules/auth/middleware/authMiddleware'
import baileyService from '../services/baileyService'
import qrService from '../services/qrService'
import messageService from '../services/messageService'
import callService from '../services/callService'
import { asyncHandler } from '@shared/utils/errorHandler'

const router = Router()

router.use(authMiddleware)

router.post('/qr', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const { qrCode } = await baileyService.initializeSession(req.uid)
  res.json({
    success: true,
    message: 'QR code generated',
    data: { qrCode },
    timestamp: new Date().toISOString()
  })
}))

router.get('/qr', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const qrCode = await qrService.getQRCode(req.uid)
  if (!qrCode) {
    return res.status(404).json({
      success: false,
      message: 'QR code not found or expired'
    })
  }

  res.json({
    success: true,
    message: 'QR code retrieved',
    data: { qrCode },
    timestamp: new Date().toISOString()
  })
}))

router.get('/status', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const status = await baileyService.getSessionStatus(req.uid)
  res.json({
    success: true,
    message: 'Connection status retrieved',
    data: { status },
    timestamp: new Date().toISOString()
  })
}))

router.post('/disconnect', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  await baileyService.closeSession(req.uid)
  res.json({
    success: true,
    message: 'Disconnected successfully',
    timestamp: new Date().toISOString()
  })
}))

router.get('/messages', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const limit = req.query.limit ? parseInt(req.query.limit as string) : 50
  const messages = await messageService.getMessages(req.uid, limit)
  res.json({
    success: true,
    message: 'Messages retrieved',
    data: { messages },
    timestamp: new Date().toISOString()
  })
}))

router.post('/send-message', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const { to, message } = req.body
  const sent = await baileyService.sendMessage(req.uid, to, message)
  res.json({
    success: sent,
    message: sent ? 'Message sent' : 'Failed to send message',
    timestamp: new Date().toISOString()
  })
}))

router.get('/calls', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const limit = req.query.limit ? parseInt(req.query.limit as string) : 50
  const calls = await callService.getCalls(req.uid, limit)
  res.json({
    success: true,
    message: 'Calls retrieved',
    data: { calls },
    timestamp: new Date().toISOString()
  })
}))

export default router
