import axiosInstance from './apiClient'
import { ApiResponse } from '@type/common.types'

export interface WhatsappSnapshot {
  status: 'disconnected' | 'connecting' | 'qr' | 'connected'
  qrCode: string | null
  phone: string | null
  attempts: number
  lastError: string | null
  connectedAt: number | null
}

export const getStatus = () =>
  axiosInstance.get<ApiResponse<WhatsappSnapshot>>('/api/whatsapp/status')

export const connect = () =>
  axiosInstance.post<ApiResponse<WhatsappSnapshot>>('/api/whatsapp/connect')

export const disconnect = () =>
  axiosInstance.post<ApiResponse<null>>('/api/whatsapp/disconnect')

export const logoutWhatsapp = () =>
  axiosInstance.post<ApiResponse<null>>('/api/whatsapp/logout')

export const sendMessage = (to: string, message: string) =>
  axiosInstance.post<ApiResponse<null>>('/api/whatsapp/send-message', { to, message })
