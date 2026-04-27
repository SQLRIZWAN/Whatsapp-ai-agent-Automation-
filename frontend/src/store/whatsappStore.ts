import { create } from 'zustand'
import * as whatsappApi from '@services/api/whatsappApi'
import type { WhatsappSnapshot } from '@services/api/whatsappApi'

interface WhatsappStore extends WhatsappSnapshot {
  messages: any[]
  calls: any[]
  fetchStatus: () => Promise<void>
  fetchQR: () => Promise<void>
  fetchMessages: () => Promise<void>
  fetchCalls: () => Promise<void>
}

const initialState: WhatsappSnapshot = {
  status: 'disconnected',
  qrCode: null,
  phone: null,
  attempts: 0,
  lastError: null,
  connectedAt: null,
}

export const useWhatsappStore = create<WhatsappStore>((set) => ({
  ...initialState,
  messages: [],
  calls: [],
  fetchStatus: async () => {
    const res = await whatsappApi.getStatus()
    set(res.data.data)
  },
  fetchQR: async () => {
    const res = await whatsappApi.getQR()
    set((state) => ({ ...state, qrCode: res.data.data.qrCode, status: res.data.data.status }))
  },
  fetchMessages: async () => {
    const res = await whatsappApi.getMessages()
    set({ messages: res.data.data.messages || [] })
  },
  fetchCalls: async () => {
    const res = await whatsappApi.getCalls()
    set({ calls: res.data.data.calls || [] })
  },
}))
