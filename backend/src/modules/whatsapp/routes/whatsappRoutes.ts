import { Router, Request, Response } from 'express'
import authMiddleware from '@modules/auth/middleware/authMiddleware'
import baileyService from '../services/baileyService'
import messageService from '../services/messageService'
import callService from '../services/callService'
import { asyncHandler } from '@shared/utils/errorHandler'

const router = Router()

router.use(authMiddleware)

router.post('/connect', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) return res.status(401).json({ success: false, message: 'Unauthorized' })
  const snap = await baileyService.start(req.uid)
  res.json({
    success: true,
    message: 'WhatsApp session started',
    data: snap,
    timestamp: new Date().toISOString(),
  })
}))

router.get('/status', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) return res.status(401).json({ success: false, message: 'Unauthorized' })
  await baileyService.start(req.uid)
  const snap = baileyService.getStatusSnapshot(req.uid)
  res.json({
    success: true,
    message: 'Status',
    data: snap,
    timestamp: new Date().toISOString(),
  })
}))

router.post('/logout', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) return res.status(401).json({ success: false, message: 'Unauthorized' })
  await baileyService.logout(req.uid)
  res.json({
    success: true,
    message: 'Logged out of WhatsApp',
    timestamp: new Date().toISOString(),
  })
}))

router.post('/disconnect', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) return res.status(401).json({ success: false, message: 'Unauthorized' })
  await baileyService.stop(req.uid)
  res.json({
    success: true,
    message: 'Session stopped (creds preserved)',
    timestamp: new Date().toISOString(),
  })
}))

router.get('/messages', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) return res.status(401).json({ success: false, message: 'Unauthorized' })
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 50
  const messages = await messageService.getMessages(req.uid, limit)
  res.json({
    success: true,
    message: 'Messages retrieved',
    data: { messages },
    timestamp: new Date().toISOString(),
  })
}))

router.get('/calls', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) return res.status(401).json({ success: false, message: 'Unauthorized' })
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 50
  const calls = await callService.getCalls(req.uid, limit)
  res.json({
    success: true,
    message: 'Calls retrieved',
    data: { calls },
    timestamp: new Date().toISOString(),
  })
}))

router.post('/send-message', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) return res.status(401).json({ success: false, message: 'Unauthorized' })
  const { to, message } = req.body
  if (!to || !message) {
    return res.status(400).json({ success: false, message: 'to and message required' })
  }
  const sent = await baileyService.sendMessage(req.uid, to, message)
  res.json({
    success: sent,
    message: sent ? 'Message sent' : 'Failed to send (is WhatsApp connected?)',
    timestamp: new Date().toISOString(),
  })
}))

export default router
