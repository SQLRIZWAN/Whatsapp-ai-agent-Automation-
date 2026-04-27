import { create } from 'zustand'
import * as configApi from '@services/api/configApi'

export type AIProvider = 'gemini' | 'grok' | 'openai'

export interface APIKeySummary {
  provider: AIProvider
  model?: string
  savedAt: number
  isActive: boolean
  maskedKey: string
}

interface SettingsStore {
  apiKeys: APIKeySummary[]
  loading: boolean
  fetchAPIKeys: () => Promise<void>
  saveAPIKey: (provider: AIProvider, key: string, model?: string) => Promise<void>
  deleteAPIKey: (provider: AIProvider) => Promise<void>
  testAPIKey: (provider: AIProvider, key: string) => Promise<boolean>
}

export const useSettingsStore = create<SettingsStore>((set, get) => ({
  apiKeys: [],
  loading: false,
  fetchAPIKeys: async () => {
    set({ loading: true })
    try {
      const res = await configApi.listAPIKeys()
      set({ apiKeys: res.data.data.keys, loading: false })
    } catch {
      set({ loading: false })
    }
  },
  saveAPIKey: async (provider, key, model) => {
    await configApi.saveAPIKey(provider, key, model)
    await get().fetchAPIKeys()
  },
  deleteAPIKey: async (provider) => {
    await configApi.deleteAPIKey(provider)
    await get().fetchAPIKeys()
  },
  testAPIKey: async (provider, key) => !!provider && !!key.trim(),
}))
