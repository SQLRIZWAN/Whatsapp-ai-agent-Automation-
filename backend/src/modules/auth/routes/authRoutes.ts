import { Router } from 'express'
import * as authController from '../controllers/authController'
import authMiddleware from '../middleware/authMiddleware'

const router = Router()

router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/logout', authMiddleware, authController.logout)
router.post('/refresh', authController.refreshToken)
router.get('/me', authMiddleware, authController.getCurrentUser)
router.put('/profile', authMiddleware, authController.updateProfile)

export default router
