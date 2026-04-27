import { Router, Request, Response } from 'express'
import authMiddleware from '@modules/auth/middleware/authMiddleware'
import configService from '../services/configService'
import { asyncHandler } from '@shared/utils/errorHandler'

const router = Router()

router.use(authMiddleware)

router.get('/', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const config = await configService.getConfiguration(req.uid)
  res.json({
    success: true,
    message: 'Configuration retrieved',
    data: config,
    timestamp: new Date().toISOString()
  })
}))

router.put('/', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const config = await configService.updateConfiguration(req.uid, req.body)
  res.json({
    success: true,
    message: 'Configuration updated',
    data: config,
    timestamp: new Date().toISOString()
  })
}))

router.put('/system-prompt', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const { systemPrompt } = req.body
  const updated = await configService.updateSystemPrompt(req.uid, systemPrompt)
  res.json({
    success: true,
    message: 'System prompt updated',
    data: { systemPrompt: updated },
    timestamp: new Date().toISOString()
  })
}))

router.put('/forwarding', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const { enabled, phoneNumber } = req.body
  const config = await configService.updateCallForwarding(
    req.uid,
    enabled,
    phoneNumber
  )
  res.json({
    success: true,
    message: 'Call forwarding updated',
    data: config,
    timestamp: new Date().toISOString()
  })
}))

router.put('/ai-settings', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const { temperature, maxOutputTokens } = req.body
  const config = await configService.updateAISettings(
    req.uid,
    temperature,
    maxOutputTokens
  )
  res.json({
    success: true,
    message: 'AI settings updated',
    data: config,
    timestamp: new Date().toISOString()
  })
}))

/**
 * Update AI provider (Gemini, Groq, or OpenAI)
 * Users can set their own API keys to use their preferred AI
 */
router.put('/ai-provider', asyncHandler(async (req: Request, res: Response) => {
  if (!req.uid) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const { provider, apiKey, model } = req.body
  const config = await configService.updateAIProvider(
    req.uid,
    provider,
    apiKey,
    model
  )
  res.json({
    success: true,
    message: 'AI provider updated',
    data: config,
    timestamp: new Date().toISOString()
  })
}))

export default router
