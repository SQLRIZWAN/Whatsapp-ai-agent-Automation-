export interface QRCodeData {
  data: string
  timestamp: number
  expiresAt: number
}

export interface SessionDevice {
  id: string
  name: string
  clientToken: string
}

export interface SessionInfo {
  sessionId: string
  uid: string
  deviceInfo: SessionDevice
  qrCode: {
    data: string
    expiresAt: number
    scanned: boolean
    scannedAt?: number
  }
  whatsappPhone: string
  connectionStatus: 'disconnected' | 'connecting' | 'connected'
  createdAt: number
  lastActivityAt: number
  expiresAt: number
}

export interface IncomingMessage {
  key: {
    remoteJid: string
    id: string
    fromMe: boolean
  }
  message: {
    conversation?: string
    extendedTextMessage?: {
      text: string
    }
    imageMessage?: {
      url: string
      caption?: string
    }
    videoMessage?: {
      url: string
      caption?: string
    }
  }
  messageTimestamp: number
}

export interface AIResponse {
  text: string
  model: string
  tokensUsed: number
  processedAt: number
}

export interface IncomingCall {
  from: string
  to: string
  timestamp: number
  isVideo: boolean
  isGroup: boolean
}

export interface CallDecision {
  decision: 'forward' | 'handle' | 'decline'
  reason: string
  forwardTo?: string
}
