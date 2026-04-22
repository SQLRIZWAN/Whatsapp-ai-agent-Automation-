import { Server as SocketIOServer, Socket } from 'socket.io'
import tokenService from '@modules/auth/services/tokenService'
import logger from '@shared/utils/logger'

export class SocketManager {
  private io: SocketIOServer
  private userSockets: Map<string, string[]> = new Map()

  constructor(io: SocketIOServer) {
    this.io = io
    this.setupConnectionHandler()
  }

  private setupConnectionHandler(): void {
    this.io.on('connection', (socket: Socket) => {
      logger.info(`Client connected: ${socket.id}`)

      socket.on('authenticate', (token: string) => {
        try {
          const decoded = tokenService.verifyToken(token)
          const uid = decoded.uid

          // Store user socket mapping
          if (!this.userSockets.has(uid)) {
            this.userSockets.set(uid, [])
          }
          this.userSockets.get(uid)!.push(socket.id)

          // Join room for user-specific events
          socket.join(`user_${uid}`)
          logger.info(`User ${uid} authenticated with socket ${socket.id}`)

          socket.emit('authenticated', { success: true })
        } catch (error) {
          logger.error('Socket authentication failed:', error)
          socket.emit('authenticated', { success: false })
          socket.disconnect()
        }
      })

      socket.on('disconnect', () => {
        logger.info(`Client disconnected: ${socket.id}`)
        // Remove from user sockets map
        for (const [uid, sockets] of this.userSockets.entries()) {
          const index = sockets.indexOf(socket.id)
          if (index > -1) {
            sockets.splice(index, 1)
            if (sockets.length === 0) {
              this.userSockets.delete(uid)
            }
          }
        }
      })

      socket.on('error', (error) => {
        logger.error(`Socket error for ${socket.id}:`, error)
      })
    })
  }

  emitToUser(uid: string, event: string, data: any): void {
    this.io.to(`user_${uid}`).emit(event, data)
  }

  emitToRoom(room: string, event: string, data: any): void {
    this.io.to(room).emit(event, data)
  }

  emitMessageUpdate(uid: string, message: any): void {
    this.emitToUser(uid, 'message_received', {
      type: 'message',
      data: message,
      timestamp: new Date().toISOString()
    })
  }

  emitCallNotification(uid: string, call: any): void {
    this.emitToUser(uid, 'call_notification', {
      type: 'call',
      data: call,
      timestamp: new Date().toISOString()
    })
  }

  emitStatusUpdate(uid: string, status: any): void {
    this.emitToUser(uid, 'status_update', {
      type: 'status',
      data: status,
      timestamp: new Date().toISOString()
    })
  }

  emitConfigurationUpdate(uid: string, config: any): void {
    this.emitToUser(uid, 'config_update', {
      type: 'config',
      data: config,
      timestamp: new Date().toISOString()
    })
  }

  getUserSockets(uid: string): string[] {
    return this.userSockets.get(uid) || []
  }

  isUserOnline(uid: string): boolean {
    return (this.userSockets.get(uid) || []).length > 0
  }
}

export default SocketManager
