import React, { useEffect, useState } from 'react'
import * as configApi from '@services/api/configApi'

const DEFAULT_PROMPT =
  'My name is SQL 💉. I am a highly advanced AI, and I was created by SQL RIZWAN. I manage this WhatsApp account.'

// AI Provider options
const AI_PROVIDERS = [
  { value: 'gemini', label: 'Google Gemini (Default - Free)', models: ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash'] },
  { value: 'grok', label: 'xAI Grok', models: ['grok-beta'] },
  { value: 'openai', label: 'OpenAI GPT', models: ['gpt-4o', 'gpt-4o-mini', 'gpt-4-turbo'] },
]

const SettingsPage: React.FC = () => {
  // System prompt state
  const [systemPrompt, setSystemPrompt] = useState(DEFAULT_PROMPT)
  const [forwardingEnabled, setForwardingEnabled] = useState(false)
  const [forwardingNumber, setForwardingNumber] = useState('')

  // AI Provider state
  const [aiProvider, setAiProvider] = useState('gemini')
  const [aiApiKey, setAiApiKey] = useState('')
  const [aiModel, setAiModel] = useState('')

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const res = await configApi.getConfig()
        if (cancelled) return
        const cfg = res.data.data as any

        // Load system prompt
        setSystemPrompt(cfg?.systemPrompt || DEFAULT_PROMPT)
        setForwardingEnabled(!!cfg?.callForwarding?.enabled)
        setForwardingNumber(cfg?.callForwarding?.phoneNumber || '')

        // Load AI provider settings
        setAiProvider(cfg?.aiProvider || 'gemini')
        setAiApiKey(cfg?.aiApiKey || '')
        setAiModel(cfg?.aiModel || '')
      } catch (e: any) {
        if (!cancelled) {
          setMsg({
            kind: 'err',
            text: e?.response?.data?.message || 'Failed to load settings',
          })
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  const handleSave = async () => {
    setSaving(true)
    setMsg(null)
    try {
      // Save system prompt
      await configApi.updateSystemPrompt(systemPrompt.trim() || DEFAULT_PROMPT)
      await configApi.updateForwarding(forwardingEnabled, forwardingNumber.trim())

      // Save AI provider settings
      await configApi.updateAIProvider(aiProvider, aiApiKey.trim() || undefined, aiModel || undefined)

      setMsg({ kind: 'ok', text: 'All settings saved to Firestore!' })
    } catch (e: any) {
      setMsg({
        kind: 'err',
        text: e?.response?.data?.message || 'Failed to save settings',
      })
    } finally {
      setSaving(false)
    }
  }

  const handleProviderChange = (provider: string) => {
    setAiProvider(provider)
    setAiModel('') // Reset model when provider changes
  }

  const selectedProvider = AI_PROVIDERS.find(p => p.value === aiProvider)

  const [activeTab, setActiveTab] = useState('ai')

  return (
    <div>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0, color: '#0e3b35' }}>⚙️ Settings</h1>
        <p style={{ margin: '6px 0 0', color: '#666' }}>
          System prompt, AI provider, aur call forwarding configure karein
        </p>
      </header>

      {loading ? (
        <div style={styles.card}>
          <p>Loading settings...</p>
        </div>
      ) : (
        <>
          {/* Tabs Navigation */}
          <div style={styles.tabsContainer}>
            <button 
              style={{...styles.tab, ...(activeTab === 'ai' ? styles.activeTab : {})}} 
              onClick={() => setActiveTab('ai')}
            >
              🤖 AI Provider
            </button>
            <button 
              style={{...styles.tab, ...(activeTab === 'persona' ? styles.activeTab : {})}} 
              onClick={() => setActiveTab('persona')}
            >
              💬 Persona
            </button>
            <button 
              style={{...styles.tab, ...(activeTab === 'calls' ? styles.activeTab : {})}} 
              onClick={() => setActiveTab('calls')}
            >
              📞 Calls
            </button>
          </div>

          {/* AI Provider Tab */}
          {activeTab === 'ai' && (
            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>🤖 AI Provider Settings</h2>
              <p style={styles.helpText}>
                Apna khud ka AI API use karein ya Backend ka free Gemini use karein.
                Agar aap apna API denge to messages mein wo use hoga.
              </p>

              <div style={styles.field}>
                <label style={styles.label}>AI Provider</label>
                <div style={styles.providerGrid}>
                  {AI_PROVIDERS.map((provider) => (
                    <div
                      key={provider.value}
                      style={{
                        ...styles.providerOption,
                        ...(aiProvider === provider.value ? styles.providerSelected : {}),
                      }}
                      onClick={() => handleProviderChange(provider.value)}
                    >
                      <div style={styles.providerRadio}>
                        <div style={{
                          width: 16,
                          height: 16,
                          borderRadius: '50%',
                          border: `2px solid ${aiProvider === provider.value ? '#25d366' : '#ccc'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          {aiProvider === provider.value && (
                            <div style={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: '#25d366',
                            }} />
                          )}
                        </div>
                      </div>
                      <div style={styles.providerInfo}>
                        <div style={styles.providerName}>{provider.label}</div>
                        {aiProvider === provider.value && (
                          <div style={styles.providerModels}>
                            {provider.models.length} models available
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* API Key (required for Groq and OpenAI) */}
              <div style={styles.field}>
                <label style={styles.label}>
                  API Key {aiProvider !== 'gemini' && <span style={styles.required}>*Required</span>}
                </label>
                <input
                  type="password"
                  value={aiApiKey}
                  onChange={(e) => setAiApiKey(e.target.value)}
                  style={styles.input}
                  placeholder={aiProvider === 'grok' ? 'xai-xxxxxxx' : aiProvider === 'openai' ? 'sk-xxxxxxx' : 'Gemini API Key (Optional)'}
                />
                <div style={styles.help}>
                  {aiProvider === 'grok'
                    ? 'xAI Console se API key lein'
                    : aiProvider === 'openai'
                    ? 'OpenAI Platform se API key lein: platform.openai.com'
                    : 'Google AI Studio se API key lein: aistudio.google.com (Optional)'
                  }
                </div>
              </div>

              {/* Model Selection */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Model
                  {aiProvider === 'gemini' && <span style={styles.optional}>(Optional - Default auto-selects)</span>}
                </label>
                <select
                  value={aiModel}
                  onChange={(e) => setAiModel(e.target.value)}
                  style={styles.select}
                >
                  <option value="">Default (Recommended)</option>
                  {selectedProvider?.models.map((model) => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>

              {/* Clear API Key button */}
              {aiApiKey && (
                <button
                  type="button"
                  style={styles.clearBtn}
                  onClick={() => {
                    if (confirm('API key remove karein? Backend ka free Gemini use hoga.')) {
                      setAiApiKey('')
                    }
                  }}
                >
                  Clear API Key
                </button>
              )}
            </div>
          )}

          {/* Persona Tab */}
          {activeTab === 'persona' && (
            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>💬 System Prompt</h2>
              <div style={styles.field}>
                <label style={styles.label}>AI Personality</label>
                <div style={styles.help}>
                  Ye AI ki persona define karta hai. Default SQL 💉 persona pre-filled hai.
                </div>
                <textarea
                  value={systemPrompt}
                  onChange={(e) => setSystemPrompt(e.target.value)}
                  rows={10}
                  style={styles.textarea}
                  placeholder={DEFAULT_PROMPT}
                />
                <button
                  type="button"
                  style={styles.resetBtn}
                  onClick={() => setSystemPrompt(DEFAULT_PROMPT)}
                >
                  Reset to default
                </button>
              </div>
            </div>
          )}

          {/* Calls Tab */}
          {activeTab === 'calls' && (
            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>📞 Smart Call Forwarding</h2>
              <div style={styles.field}>
                <label style={styles.label}>
                  <input
                    type="checkbox"
                    checked={forwardingEnabled}
                    onChange={(e) => setForwardingEnabled(e.target.checked)}
                    style={{ marginRight: 8 }}
                  />
                  Enable smart call forwarding
                </label>
                <div style={styles.help}>
                  Jab koi "urgent / emergency / zaroori" mention kare, AI is number ko suggest karega.
                </div>
                <input
                  type="tel"
                  value={forwardingNumber}
                  onChange={(e) => setForwardingNumber(e.target.value)}
                  disabled={!forwardingEnabled}
                  style={{
                    ...styles.input,
                    opacity: forwardingEnabled ? 1 : 0.5,
                  }}
                  placeholder="+92XXXXXXXXXX"
                />
              </div>
            </div>
          )}

          {/* Message */}
          {msg && (
            <div
              style={{
                ...styles.msgBox,
                background: msg.kind === 'ok' ? '#dcfce7' : '#fee2e2',
                color: msg.kind === 'ok' ? '#166534' : '#991b1b',
              }}
            >
              {msg.text}
            </div>
          )}

          {/* Save Button */}
          <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={handleSave}
              disabled={saving}
              style={{ ...styles.saveBtn, opacity: saving ? 0.6 : 1 }}
            >
              {saving ? 'Saving All Settings...' : '💾 Save All Settings'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: '0 0 12px 12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    marginBottom: 20,
    border: '1px solid #eee',
    borderTop: 'none',
  },
  tabsContainer: {
    display: 'flex',
    gap: 2,
    backgroundColor: '#f3f4f6',
    padding: '8px 8px 0',
    borderRadius: '12px 12px 0 0',
    border: '1px solid #eee',
    borderBottom: 'none',
  },
  tab: {
    padding: '10px 20px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
    color: '#666',
    borderRadius: '8px 8px 0 0',
    transition: 'all 0.2s',
  },
  activeTab: {
    background: 'white',
    color: '#0e3b35',
    boxShadow: '0 -2px 4px rgba(0,0,0,0.02)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: '#0e3b35',
    marginTop: 0,
    marginBottom: 12,
    paddingBottom: 8,
    borderBottom: '2px solid #e5e7eb',
  },
  helpText: {
    color: '#666',
    fontSize: 14,
    marginTop: 0,
    marginBottom: 16,
  },
  field: { marginBottom: 20 },
  label: {
    display: 'block',
    fontWeight: 600,
    color: '#222',
    marginBottom: 6,
  },
  required: {
    color: '#dc2626',
    fontWeight: 400,
    fontSize: 12,
    marginLeft: 8,
  },
  optional: {
    color: '#666',
    fontWeight: 400,
    fontSize: 12,
    marginLeft: 8,
  },
  help: { color: '#666', fontSize: 13, marginBottom: 8 },
  providerGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  providerOption: {
    display: 'flex',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    border: '2px solid #e5e7eb',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  providerSelected: {
    borderColor: '#25d366',
    backgroundColor: '#f0fdf4',
  },
  providerRadio: {
    marginRight: 12,
  },
  providerInfo: {
    flex: 1,
  },
  providerName: {
    fontWeight: 600,
    color: '#222',
  },
  providerModels: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  input: {
    width: '100%',
    padding: 10,
    border: '1px solid #ddd',
    borderRadius: 4,
    fontSize: 14,
  },
  select: {
    width: '100%',
    padding: 10,
    border: '1px solid #ddd',
    borderRadius: 4,
    fontSize: 14,
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  textarea: {
    width: '100%',
    padding: 10,
    border: '1px solid #ddd',
    borderRadius: 4,
    fontSize: 14,
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  resetBtn: {
    marginTop: 8,
    background: 'transparent',
    color: '#075e54',
    border: '1px solid #075e54',
    padding: '6px 12px',
    borderRadius: 4,
    cursor: 'pointer',
  },
  clearBtn: {
    marginTop: 8,
    background: '#fee2e2',
    color: '#991b1b',
    border: '1px solid #fca5a5',
    padding: '6px 12px',
    borderRadius: 4,
    cursor: 'pointer',
  },
  saveBtn: {
    padding: '14px 28px',
    background: '#25d366',
    color: 'white',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: 16,
    maxWidth: 720,
  },
  msgBox: {
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
    maxWidth: 720,
  },
}

export default SettingsPage
