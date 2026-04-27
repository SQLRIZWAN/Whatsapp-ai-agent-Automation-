import React, { useEffect, useState } from 'react'
import * as configApi from '@services/api/configApi'

const DEFAULT_PROMPT =
  'My name is SQL 💉. I am a highly advanced AI, and I was created by SQL RIZWAN. I manage this WhatsApp account.'

// AI Provider options
const AI_PROVIDERS = [
  { value: 'gemini', label: 'Google Gemini (Default - Free)', models: ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash'] },
  { value: 'groq', label: 'Groq (Fast & Cheap)', models: ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant', 'mixtral-8x7b-32768'] },
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
          {/* AI Provider Section */}
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
            {aiProvider !== 'gemini' && (
              <div style={styles.field}>
                <label style={styles.label}>
                  API Key <span style={styles.required}>*Required</span>
                </label>
                <input
                  type="password"
                  value={aiApiKey}
                  onChange={(e) => setAiApiKey(e.target.value)}
                  style={styles.input}
                  placeholder={aiProvider === 'groq' ? 'gsk_xxxxxxx' : 'sk-xxxxxxx'}
                />
                <div style={styles.help}>
                  {aiProvider === 'groq'
                    ? 'Groq Console se API key lein: console.groq.com'
                    : 'OpenAI Platform se API key lein: platform.openai.com'
                  }
                </div>
              </div>
            )}

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

          {/* System Prompt Section */}
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
                rows={6}
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

          {/* Call Forwarding Section */}
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
          <button
            onClick={handleSave}
            disabled={saving}
            style={{ ...styles.saveBtn, opacity: saving ? 0.6 : 1 }}
          >
            {saving ? 'Saving...' : 'Save All Settings'}
          </button>
        </>
      )}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 8,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
    maxWidth: 720,
    marginBottom: 20,
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: '#0e3b35',
    marginTop: 0,
    marginBottom: 12,
    paddingBottom: 8,
    borderBottom: '2px solid #e5e7eb',
  } as React.CSSProperties,
  helpText: {
    color: '#666',
    fontSize: 14,
    marginTop: 0,
    marginBottom: 16,
  } as React.CSSProperties,
  field: { marginBottom: 20 } as React.CSSProperties,
  label: {
    display: 'block',
    fontWeight: 600,
    color: '#222',
    marginBottom: 6,
  } as React.CSSProperties,
  required: {
    color: '#dc2626',
    fontWeight: 400,
    fontSize: 12,
    marginLeft: 8,
  } as React.CSSProperties,
  optional: {
    color: '#666',
    fontWeight: 400,
    fontSize: 12,
    marginLeft: 8,
  } as React.CSSProperties,
  help: { color: '#666', fontSize: 13, marginBottom: 8 } as React.CSSProperties,
  providerGrid: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 10,
  } as React.CSSProperties,
  providerOption: {
    display: 'flex',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    border: '2px solid #e5e7eb',
    cursor: 'pointer',
    transition: 'all 0.2s',
  } as React.CSSProperties,
  providerSelected: {
    borderColor: '#25d366',
    backgroundColor: '#f0fdf4',
  } as React.CSSProperties,
  providerRadio: {
    marginRight: 12,
  } as React.CSSProperties,
  providerInfo: {
    flex: 1,
  } as React.CSSProperties,
  providerName: {
    fontWeight: 600,
    color: '#222',
  } as React.CSSProperties,
  providerModels: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  } as React.CSSProperties,
  input: {
    width: '100%',
    padding: 10,
    border: '1px solid #ddd',
    borderRadius: 4,
    fontSize: 14,
  } as React.CSSProperties,
  select: {
    width: '100%',
    padding: 10,
    border: '1px solid #ddd',
    borderRadius: 4,
    fontSize: 14,
    backgroundColor: 'white',
    cursor: 'pointer',
  } as React.CSSProperties,
  textarea: {
    width: '100%',
    padding: 10,
    border: '1px solid #ddd',
    borderRadius: 4,
    fontSize: 14,
    fontFamily: 'inherit',
    resize: 'vertical' as const,
  } as React.CSSProperties,
  resetBtn: {
    marginTop: 8,
    background: 'transparent',
    color: '#075e54',
    border: '1px solid #075e54',
    padding: '6px 12px',
    borderRadius: 4,
    cursor: 'pointer',
  } as React.CSSProperties,
  clearBtn: {
    marginTop: 8,
    background: '#fee2e2',
    color: '#991b1b',
    border: '1px solid #fca5a5',
    padding: '6px 12px',
    borderRadius: 4,
    cursor: 'pointer',
  } as React.CSSProperties,
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
  } as React.CSSProperties,
  msgBox: {
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
    maxWidth: 720,
  } as React.CSSProperties,
}

export default SettingsPage