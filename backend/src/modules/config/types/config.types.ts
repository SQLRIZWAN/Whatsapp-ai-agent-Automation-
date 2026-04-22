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
  createdAt: number
  updatedAt: number
}

export interface UpdateConfigPayload {
  systemPrompt?: string
  temperature?: number
  maxOutputTokens?: number
  callForwarding?: Partial<Configuration['callForwarding']>
  messageProcessing?: Partial<Configuration['messageProcessing']>
  responseSettings?: Partial<Configuration['responseSettings']>
}
