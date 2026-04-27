import axiosInstance from './apiClient'
import { ApiResponse, Configuration } from '@type/common.types'

export const getConfig = () =>
  axiosInstance.get<ApiResponse<Configuration>>('/api/config')

export const updateSystemPrompt = (systemPrompt: string) =>
  axiosInstance.put<ApiResponse<{ systemPrompt: string }>>(
    '/api/config/system-prompt',
    { systemPrompt }
  )

export const updateForwarding = (enabled: boolean, phoneNumber: string) =>
  axiosInstance.put<ApiResponse<Configuration>>('/api/config/forwarding', {
    enabled,
    phoneNumber,
  })

export const updateAIProvider = (
  provider: string,
  apiKey?: string,
  model?: string
) =>
  axiosInstance.put<ApiResponse<Configuration>>('/api/config/ai-provider', {
    provider,
    apiKey,
    model,
  })
