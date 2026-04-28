import React, { useEffect, useState } from 'react'
import * as configApi from '@services/api/configApi'
import { useSettingsStore, type AIProvider } from '@store/settingsStore'

const providers: Array<{ provider: AIProvider; models: string[] }> = [
  { provider: 'gemini', models: ['gemini-2.5-flash', 'gemini-2.0-flash'] },
  { provider: 'grok', models: ['grok-beta'] },
  { provider: 'openai', models: ['gpt-4o-mini', 'gpt-4o'] },
]

const AIConfigPage: React.FC = () => {
  const { apiKeys, fetchAPIKeys, saveAPIKey, deleteAPIKey } = useSettingsStore()
  const [activeProvider, setActiveProvider] = useState<'gemini' | 'grok' | 'openai' | 'default'>('default')
  const [systemPrompt, setSystemPrompt] = useState('')
  const [saving, setSaving] = useState<string | null>(null)
  const [msg, setMsg] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null)
  const [drafts, setDrafts] = useState<Record<string, { key: string; model: string }>>({
    gemini: { key: '', model: '' },
    grok: { key: '', model: '' },
    openai: { key: '', model: '' },
  })

  useEffect(() => {
    fetchAPIKeys().catch(() => undefined)
    configApi.getConfig().then((res) => {
      const cfg = res.data.data
      setSystemPrompt(cfg.systemPrompt || '')
      setActiveProvider((cfg.aiProvider as any) || 'default')
    }).catch(() => undefined)
  }, [fetchAPIKeys])

  const showMsg = (kind: 'ok' | 'err', text: string) => {
    setMsg({ kind, text })
    setTimeout(() => setMsg(null), 3500)
  }

  return (
    <div style={page}>
      <div style={hero}>
        <h1 style={title}>AI Configuration</h1>
        <p style={subtitle}>User API keys encrypted store hongi. Key na ho to backend Gemini fallback use hoga.</p>
      </div>

      <section style={card}>
        <h2 style={sectionTitle}>Active Provider</h2>
        <div style={radioRow}>
          {['default', 'gemini', 'grok', 'openai'].map((value) => (
            <label key={value} style={{ ...radioCard, opacity: saving === 'provider' ? 0.6 : 1 }}>
              <input
                type="radio"
                checked={activeProvider === value}
                disabled={saving === 'provider'}
                onChange={async () => {
                  setActiveProvider(value as any)
                  setSaving('provider')
                  setMsg(null)
                  try {
                    await configApi.updateAIProvider(value)
                    showMsg('ok', `Provider updated to ${value === 'default' ? 'Backend Default' : value}`)
                  } catch {
                    showMsg('err', 'Failed to update provider')
                  } finally {
                    setSaving(null)
                  }
                }}
              />
              <span>{value === 'default' ? 'Backend Default' : value}</span>
            </label>
          ))}
        </div>
      </section>

      <section style={card}>
        <h2 style={sectionTitle}>System Prompt</h2>
        <textarea
          value={systemPrompt}
          onChange={(e) => setSystemPrompt(e.target.value)}
          style={textarea}
          rows={6}
        />
        <button
          style={{ ...buttonPrimary, opacity: saving === 'prompt' ? 0.6 : 1 }}
          disabled={saving === 'prompt'}
          onClick={async () => {
            setSaving('prompt')
            setMsg(null)
            try {
              await configApi.updateSystemPrompt(systemPrompt)
              showMsg('ok', 'System prompt saved!')
            } catch {
              showMsg('err', 'Failed to save system prompt')
            } finally {
              setSaving(null)
            }
          }}
        >
          {saving === 'prompt' ? 'Saving...' : 'Save Prompt'}
        </button>
      </section>

      <section style={grid}>
        {providers.map(({ provider, models }) => {
          const saved = apiKeys.find((item) => item.provider === provider)
          return (
            <div key={provider} style={card}>
              <h3 style={{ marginTop: 0, textTransform: 'capitalize' }}>{provider}</h3>
              <div style={badge(saved ? '#1c7c54' : '#8b5e34')}>{saved ? `Connected ${saved.maskedKey}` : 'Not set'}</div>
              <input
                type="password"
                placeholder="API key"
                style={input}
                value={drafts[provider].key}
                onChange={(e) => setDrafts((state) => ({ ...state, [provider]: { ...state[provider], key: e.target.value } }))}
              />
              <select
                style={input}
                value={drafts[provider].model}
                onChange={(e) => setDrafts((state) => ({ ...state, [provider]: { ...state[provider], model: e.target.value } }))}
              >
                <option value="">Default model</option>
                {models.map((model) => <option key={model} value={model}>{model}</option>)}
              </select>
              <div style={actions}>
                <button
                  style={{ ...buttonPrimary, opacity: saving === provider ? 0.6 : 1 }}
                  disabled={saving === provider}
                  onClick={async () => {
                    if (!drafts[provider].key.trim()) {
                      showMsg('err', `${provider} API key empty nahi hona chahiye`)
                      return
                    }
                    setSaving(provider)
                    setMsg(null)
                    try {
                      await saveAPIKey(provider, drafts[provider].key, drafts[provider].model)
                      showMsg('ok', `${provider} API key saved!`)
                      setDrafts((state) => ({ ...state, [provider]: { ...state[provider], key: '' } }))
                    } catch {
                      showMsg('err', `Failed to save ${provider} API key`)
                    } finally {
                      setSaving(null)
                    }
                  }}
                >
                  {saving === provider ? 'Saving...' : 'Save'}
                </button>
                <button style={buttonSecondary} onClick={() => deleteAPIKey(provider)}>Delete</button>
              </div>
            </div>
          )
        })}
      </section>

      {msg && (
        <div style={{
          padding: '10px 16px',
          borderRadius: 12,
          background: msg.kind === 'ok' ? '#dcfce716' : '#fee2e216',
          color: msg.kind === 'ok' ? '#166534' : '#991b1b',
          border: `1px solid ${msg.kind === 'ok' ? '#86efac' : '#fca5a5'}`,
          fontSize: 13,
          fontWeight: 600,
        }}>
          {msg.text}
        </div>
      )}
    </div>
  )
}

const page: React.CSSProperties = { display: 'grid', gap: 24 }
const hero: React.CSSProperties = { display: 'grid', gap: 6 }
const title: React.CSSProperties = { margin: 0, color: '#123d35' }
const subtitle: React.CSSProperties = { color: '#537067', margin: 0 }
const card: React.CSSProperties = { background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 20px 40px rgba(15, 54, 46, 0.08)', display: 'grid', gap: 14 }
const sectionTitle: React.CSSProperties = { margin: 0, color: '#123d35' }
const grid: React.CSSProperties = { display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }
const radioRow: React.CSSProperties = { display: 'flex', gap: 12, flexWrap: 'wrap' }
const radioCard: React.CSSProperties = { display: 'flex', gap: 8, alignItems: 'center', padding: '10px 14px', borderRadius: 999, background: '#eef5f1', cursor: 'pointer' }
const input: React.CSSProperties = { width: '100%', padding: '12px 14px', borderRadius: 14, border: '1px solid #c9ddd4', boxSizing: 'border-box' }
const textarea: React.CSSProperties = { width: '100%', padding: '14px', borderRadius: 18, border: '1px solid #c9ddd4', minHeight: 140, boxSizing: 'border-box' }
const actions: React.CSSProperties = { display: 'flex', gap: 10, flexWrap: 'wrap' }
const buttonPrimary: React.CSSProperties = { background: '#123d35', color: '#fff', border: 'none', padding: '11px 16px', borderRadius: 999, cursor: 'pointer' }
const buttonSecondary: React.CSSProperties = { background: '#fff', color: '#123d35', border: '1px solid #c9ddd4', padding: '11px 16px', borderRadius: 999, cursor: 'pointer' }
const badge = (color: string): React.CSSProperties => ({ display: 'inline-flex', width: 'fit-content', background: `${color}16`, color, padding: '6px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 })

export default AIConfigPage
