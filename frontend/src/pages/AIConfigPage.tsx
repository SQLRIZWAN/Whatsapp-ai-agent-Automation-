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
            <label key={value} style={radioCard}>
              <input
                type="radio"
                checked={activeProvider === value}
                onChange={() => {
                  setActiveProvider(value as any)
                  configApi.updateAIProvider(value).catch(() => undefined)
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
        <button style={buttonPrimary} onClick={() => configApi.updateSystemPrompt(systemPrompt)}>Save Prompt</button>
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
                <button style={buttonPrimary} onClick={() => saveAPIKey(provider, drafts[provider].key, drafts[provider].model)}>Save</button>
                <button style={buttonSecondary} onClick={() => deleteAPIKey(provider)}>Delete</button>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

const page = { display: 'grid', gap: 24 }
const hero = { display: 'grid', gap: 6 }
const title = { margin: 0, color: '#123d35' }
const subtitle = { color: '#537067', margin: 0 }
const card = { background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 20px 40px rgba(15, 54, 46, 0.08)', display: 'grid', gap: 14 }
const sectionTitle = { margin: 0, color: '#123d35' }
const grid = { display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }
const radioRow = { display: 'flex', gap: 12, flexWrap: 'wrap' }
const radioCard = { display: 'flex', gap: 8, alignItems: 'center', padding: '10px 14px', borderRadius: 999, background: '#eef5f1' }
const input = { width: '100%', padding: '12px 14px', borderRadius: 14, border: '1px solid #c9ddd4' }
const textarea = { width: '100%', padding: '14px', borderRadius: 18, border: '1px solid #c9ddd4', minHeight: 140 }
const actions = { display: 'flex', gap: 10, flexWrap: 'wrap' }
const buttonPrimary = { background: '#123d35', color: '#fff', border: 'none', padding: '11px 16px', borderRadius: 999, cursor: 'pointer' }
const buttonSecondary = { background: '#fff', color: '#123d35', border: '1px solid #c9ddd4', padding: '11px 16px', borderRadius: 999, cursor: 'pointer' }
const badge = (color: string): React.CSSProperties => ({ display: 'inline-flex', width: 'fit-content', background: `${color}16`, color, padding: '6px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 })

export default AIConfigPage
