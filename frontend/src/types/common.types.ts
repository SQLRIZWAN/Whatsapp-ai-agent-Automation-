export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
  error?: string
  timestamp?: string
}

export interface User {
  uid: string
  email: string
  displayName: string
  createdAt: string
  updatedAt: string
  status: 'active' | 'inactive' | 'suspended'
  preferences: {
    timezone: string
    notifications: boolean
    theme: 'light' | 'dark'
  }
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials extends LoginCredentials {
  displayName: string
}

export interface Session {
  sessionId: string
  uid: string
  whatsappPhone: string
  connectionStatus: 'disconnected' | 'connecting' | 'connected'
  createdAt: string
  lastActivityAt: string
}

export interface Configuration {
  uid: string
  systemPrompt: string
  aiModel: 'gemini-pro' | 'gemini-pro-vision'
  temperature: number
  maxOutputTokens: number
  callForwarding: {
    enabled: boolean
    phoneNumber: string
    forwardOnNo: boolean
    forwardOnBusy: boolean
  }
  messageProcessing: {
    enabled: boolean
    processImages: boolean
    processVideos: boolean
    maxFileSize: number
  }
  responseSettings: {
    autoRespond: boolean
    delaySeconds: number
    typing: boolean
  }
  createdAt: string
  updatedAt: string
}

export interface ChatMessage {
  messageId: string
  from: string
  to: string
  content: string
  type: 'text' | 'image' | 'video' | 'audio'
  isFromAI: boolean
  status: 'sent' | 'delivered' | 'read' | 'failed'
  timestamp: string
}

export interface Call {
  callId: string
  from: string
  to: string
  callType: 'incoming' | 'outgoing'
  status: 'missed' | 'declined' | 'forwarded' | 'handled' | 'failed'
  duration: number
  forwardedTo?: string
  timestamp: string
}
