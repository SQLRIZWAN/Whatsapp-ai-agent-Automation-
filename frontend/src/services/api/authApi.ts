import axiosInstance from './apiClient'
import { ApiResponse, User, LoginCredentials, RegisterCredentials } from '@type/common.types'

interface LoginResponse {
  user: User
  token: string
}

export const login = async (credentials: LoginCredentials) => {
  return axiosInstance.post<ApiResponse<LoginResponse>>(
    '/api/auth/login',
    credentials
  )
}

export const register = async (credentials: RegisterCredentials) => {
  return axiosInstance.post<ApiResponse<LoginResponse>>(
    '/api/auth/register',
    credentials
  )
}

export const logout = async () => {
  return axiosInstance.post<ApiResponse<null>>('/api/auth/logout')
}

export const refreshToken = async () => {
  return axiosInstance.post<ApiResponse<{ token: string }>>(
    '/api/auth/refresh'
  )
}

export const getCurrentUser = async () => {
  return axiosInstance.get<ApiResponse<User>>('/api/auth/me')
}

export const updateProfile = async (data: Partial<User>) => {
  return axiosInstance.put<ApiResponse<User>>(
    '/api/auth/profile',
    data
  )
}
