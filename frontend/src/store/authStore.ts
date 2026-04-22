import { create } from 'zustand'
import { AuthState, User, LoginCredentials, RegisterCredentials } from '@types/common.types'
import * as authApi from '@services/api/authApi'

interface AuthStore extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>
  register: (credentials: RegisterCredentials) => Promise<void>
  logout: () => Promise<void>
  refreshToken: () => Promise<void>
  clearError: () => void
  setUser: (user: User | null) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token'),
  isLoading: false,
  error: null,

  login: async (credentials: LoginCredentials) => {
    try {
      set({ isLoading: true, error: null })
      const response = await authApi.login(credentials)
      const { user, token } = response.data.data
      localStorage.setItem('token', token)
      set({
        user,
        token,
        isAuthenticated: true,
        isLoading: false
      })
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Login failed'
      set({
        error: errorMessage,
        isLoading: false
      })
      throw error
    }
  },

  register: async (credentials: RegisterCredentials) => {
    try {
      set({ isLoading: true, error: null })
      const response = await authApi.register(credentials)
      const { user, token } = response.data.data
      localStorage.setItem('token', token)
      set({
        user,
        token,
        isAuthenticated: true,
        isLoading: false
      })
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Registration failed'
      set({
        error: errorMessage,
        isLoading: false
      })
      throw error
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true })
      await authApi.logout()
      localStorage.removeItem('token')
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
      })
    } catch (error) {
      localStorage.removeItem('token')
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false
      })
    }
  },

  refreshToken: async () => {
    try {
      const response = await authApi.refreshToken()
      const { token } = response.data
      localStorage.setItem('token', token)
      set({ token })
    } catch (error) {
      set({ isAuthenticated: false })
      localStorage.removeItem('token')
    }
  },

  clearError: () => set({ error: null }),

  setUser: (user: User | null) => set({ user })
}))
