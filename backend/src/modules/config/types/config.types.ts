export interface Configuration {
  uid: string
  systemPrompt: string
  aiProvider?: 'default' | 'gemini' | 'grok' | 'openai'
  aiApiKey?: string
  aiModel?: string
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
  createdAt: number
  updatedAt: number
}

export interface UpdateConfigPayload {
  systemPrompt?: string
  temperature?: number
  maxOutputTokens?: number
  aiProvider?: 'default' | 'gemini' | 'grok' | 'openai'
  aiApiKey?: string
  aiModel?: string
  callForwarding?: Partial<Configuration['callForwarding']>
  messageProcessing?: Partial<Configuration['messageProcessing']>
  responseSettings?: Partial<Configuration['responseSettings']>
}
