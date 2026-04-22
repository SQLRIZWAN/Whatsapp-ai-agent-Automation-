import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import userRepository from '../../database/repositories/userRepository'
import tokenService from './tokenService'
import { RegisterPayload, LoginPayload, AuthResponse } from '../types/auth.types'
import { ErrorCode } from '@shared/types/common.types'
import { AppError } from '@shared/utils/errorHandler'
import logger from '@shared/utils/logger'
import { MESSAGES } from '@shared/constants/config'

export class AuthService {
  async register(payload: RegisterPayload): Promise<AuthResponse> {
    try {
      const { email, password, displayName } = payload

      // Validate input
      if (!email || !password || !displayName) {
        throw new AppError(
          ErrorCode.VALIDATION_ERROR,
          'Email, password, and displayName are required',
          400
        )
      }

      // Check if user exists
      const existingUser = await userRepository.getUserByEmail(email)
      if (existingUser) {
        throw new AppError(
          ErrorCode.VALIDATION_ERROR,
          'Email already registered',
          409
        )
      }

      // Hash password
      const salt = await bcrypt.genSalt(10)
      const passwordHash = await bcrypt.hash(password, salt)

      // Generate UID
      const uid = uuidv4()

      // Create user in database
      const user = await userRepository.createUser(uid, {
        email,
        displayName,
        status: 'active'
      })

      // Store password hash in separate field
      const db = require('../../database/firestore').getFirestore()
      await db.collection('users').doc(uid).update({ passwordHash })

      // Generate token
      const token = tokenService.generateToken({ uid, email })

      logger.info(`User registered: ${email}`)

      return {
        user: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          status: user.status
        },
        token
      }
    } catch (error) {
      if (error instanceof AppError) throw error
      logger.error('Registration error:', error)
      throw new AppError(ErrorCode.INTERNAL_ERROR, 'Registration failed', 500)
    }
  }

  async login(payload: LoginPayload): Promise<AuthResponse> {
    try {
      const { email, password } = payload

      // Validate input
      if (!email || !password) {
        throw new AppError(
          ErrorCode.VALIDATION_ERROR,
          'Email and password are required',
          400
        )
      }

      // Find user
      const user = await userRepository.getUserByEmail(email)
      if (!user) {
        throw new AppError(
          ErrorCode.UNAUTHORIZED,
          MESSAGES.INVALID_CREDENTIALS,
          401
        )
      }

      // Get password hash from database
      const db = require('../../database/firestore').getFirestore()
      const userDoc = await db.collection('users').doc(user.uid).get()
      const passwordHash = userDoc.data()?.passwordHash

      if (!passwordHash) {
        throw new AppError(
          ErrorCode.UNAUTHORIZED,
          MESSAGES.INVALID_CREDENTIALS,
          401
        )
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, passwordHash)
      if (!isPasswordValid) {
        throw new AppError(
          ErrorCode.UNAUTHORIZED,
          MESSAGES.INVALID_CREDENTIALS,
          401
        )
      }

      // Check if user is active
      if (user.status !== 'active') {
        throw new AppError(
          ErrorCode.FORBIDDEN,
          'User account is not active',
          403
        )
      }

      // Generate token
      const token = tokenService.generateToken({ uid: user.uid, email })

      logger.info(`User logged in: ${email}`)

      return {
        user: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          status: user.status
        },
        token
      }
    } catch (error) {
      if (error instanceof AppError) throw error
      logger.error('Login error:', error)
      throw new AppError(ErrorCode.INTERNAL_ERROR, 'Login failed', 500)
    }
  }

  async getCurrentUser(uid: string) {
    try {
      const user = await userRepository.getUserByUid(uid)
      if (!user) {
        throw new AppError(ErrorCode.NOT_FOUND, 'User not found', 404)
      }
      return user
    } catch (error) {
      if (error instanceof AppError) throw error
      throw new AppError(ErrorCode.INTERNAL_ERROR, 'Failed to get user', 500)
    }
  }

  async updateProfile(uid: string, updates: any) {
    try {
      const allowedUpdates = ['displayName', 'preferences']
      const updateData: any = {}

      allowedUpdates.forEach(key => {
        if (key in updates) {
          updateData[key] = updates[key]
        }
      })

      const user = await userRepository.updateUser(uid, updateData)
      logger.info(`User profile updated: ${uid}`)
      return user
    } catch (error) {
      if (error instanceof AppError) throw error
      throw new AppError(ErrorCode.INTERNAL_ERROR, 'Failed to update profile', 500)
    }
  }
}

export default new AuthService()
