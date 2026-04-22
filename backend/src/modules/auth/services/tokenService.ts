import jwt from 'jsonwebtoken'
import { CONFIG } from '@shared/constants/config'
import { JwtPayload } from '@shared/types/common.types'
import logger from '@shared/utils/logger'

export class TokenService {
  generateToken(payload: JwtPayload, expiresIn = CONFIG.JWT_EXPIRY): string {
    try {
      return jwt.sign(payload, CONFIG.JWT_SECRET, { expiresIn })
    } catch (error) {
      logger.error('Error generating token:', error)
      throw error
    }
  }

  verifyToken(token: string): JwtPayload {
    try {
      return jwt.verify(token, CONFIG.JWT_SECRET) as JwtPayload
    } catch (error) {
      logger.error('Token verification failed:', error)
      throw error
    }
  }

  decodeToken(token: string): JwtPayload | null {
    try {
      return jwt.decode(token) as JwtPayload | null
    } catch (error) {
      logger.error('Token decode failed:', error)
      return null
    }
  }

  isTokenExpired(token: string): boolean {
    const decoded = this.decodeToken(token)
    if (!decoded || !decoded.exp) {
      return true
    }
    return decoded.exp * 1000 < Date.now()
  }

  refreshToken(oldToken: string): string {
    try {
      const decoded = this.decodeToken(oldToken)
      if (!decoded || !decoded.uid || !decoded.email) {
        throw new Error('Invalid token format')
      }

      return this.generateToken({
        uid: decoded.uid,
        email: decoded.email
      })
    } catch (error) {
      logger.error('Token refresh failed:', error)
      throw error
    }
  }
}

export default new TokenService()
