import { Router, Request, Response } from 'express'
import authMiddleware from '@modules/auth/middleware/authMiddleware'
import baileyService from '../services/baileyService'
import messageService from '../services/messageService'
import callService from '../services/callService'
import aiService from '../services/aiService'
import { asyncHandler } from '@shared/utils/errorHandler'
import qrService from '../services/qrService'

const router = Router()

router.use(authMiddleware)

// POST /connect — explicitly start/boot a WhatsApp session for this user
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

// GET /status — only reads the current snapshot; does NOT spawn a new session.
// This prevents QR churn when the frontend polls every 4 s.
// If no session is running yet, it returns status=disconnected so the UI
// can prompt the user to click "Connect" explicitly.
router.get('/status', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) return res.status(401).json({ success: false, message: 'Unauthorized' })
  // Do NOT call baileyService.start() here — just read the current state
  const snap = baileyService.getStatusSnapshot(req.uid)
  res.json({
    success: true,
    message: 'Status',
    data: snap,
    timestamp: new Date().toISOString(),
  })
}))

router.get('/qr', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) return res.status(401).json({ success: false, message: 'Unauthorized' })
  let qrCode = await qrService.getQRCode(req.uid)
  if (!qrCode) {
    await baileyService.start(req.uid)
    qrCode = await qrService.getQRCode(req.uid)
  }
  res.json({
    success: true,
    message: 'QR status',
    data: {
      qrCode,
      status: baileyService.getStatusSnapshot(req.uid).status,
    },
    timestamp: new Date().toISOString(),
  })
}))

// POST /logout — fully unlinks WhatsApp (clears creds from DB), does NOT auto-reconnect
router.post('/logout', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) return res.status(401).json({ success: false, message: 'Unauthorized' })
  await baileyService.logout(req.uid)
  res.json({
    success: true,
    message: 'WhatsApp unlinked. Creds cleared from database.',
    timestamp: new Date().toISOString(),
  })
}))

// POST /disconnect — stops the socket but keeps creds in DB (for temporary pause)
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

// GET /test-ai — tests the Gemini fallback chain and returns results for each model
router.get('/test-ai', asyncHandler(async (req: Request, res: Response) => {
  const models = aiService.getAvailableModels()
  const results: Record<string, string> = {}
  for (const model of [...models.gemini]) {
    try {
      const { text } = await aiService.generateResponse('Say OK in one word', 'Say OK in one word')
      results[model] = `OK: ${text.substring(0, 30)}`
      break // stop after first success
    } catch (e) {
      results[model] = `FAIL: ${(e as Error).message?.substring(0, 80)}`
    }
  }
  res.json({ success: true, data: { results, models }, timestamp: new Date().toISOString() })
}))

export default router
