export interface ApiResponse<T> {
  success: boolean
  message: string
  data?: T
  error?: string
  timestamp?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface User {
  uid: string
  email: string
  displayName: string
  createdAt: Date
  updatedAt: Date
  status: 'active' | 'inactive' | 'suspended'
  preferences: {
    timezone: string
    notifications: boolean
    theme: 'light' | 'dark'
  }
}

export interface JwtPayload {
  uid: string
  email: string
  iat?: number
  exp?: number
}

export interface ErrorDetails {
  code: string
  message: string
  statusCode: number
  details?: Record<string, unknown>
}

export enum ErrorCode {
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  DATABASE_ERROR = 'DATABASE_ERROR',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  RATE_LIMIT = 'RATE_LIMIT',
  INVALID_TOKEN = 'INVALID_TOKEN'
}
