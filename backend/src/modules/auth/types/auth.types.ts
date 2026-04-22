export interface RegisterPayload {
  email: string
  password: string
  displayName: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface AuthResponse {
  user: {
    uid: string
    email: string
    displayName: string
    status: string
  }
  token: string
  refreshToken?: string
}

export interface VerifyEmailPayload {
  email: string
  code: string
}
