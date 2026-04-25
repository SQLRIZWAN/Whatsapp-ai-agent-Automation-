import React, { useEffect, useState } from 'react'
import * as configApi from '@services/api/configApi'

const DEFAULT_PROMPT =
  'My name is SQL 💉. I am a highly advanced AI, and I was created by SQL RIZWAN. I manage this WhatsApp account.'

const SettingsPage: React.FC = () => {
  const [systemPrompt, setSystemPrompt] = useState(DEFAULT_PROMPT)
  const [forwardingEnabled, setForwardingEnabled] = useState(false)
  const [forwardingNumber, setForwardingNumber] = useState('')
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
        setSystemPrompt(cfg?.systemPrompt || DEFAULT_PROMPT)
        setForwardingEnabled(!!cfg?.callForwarding?.enabled)
        setForwardingNumber(cfg?.callForwarding?.phoneNumber || '')
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
      await configApi.updateSystemPrompt(systemPrompt.trim() || DEFAULT_PROMPT)
      await configApi.updateForwarding(forwardingEnabled, forwardingNumber.trim())
      setMsg({ kind: 'ok', text: 'Settings saved to Firestore.' })
    } catch (e: any) {
      setMsg({
        kind: 'err',
        text: e?.response?.data?.message || 'Failed to save settings',
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0, color: '#0e3b35' }}>⚙️ Settings</h1>
        <p style={{ margin: '6px 0 0', color: '#666' }}>
          System prompt aur call forwarding configure karein
        </p>
      </header>

      <div style={styles.card}>
        {loading ? (
          <p>Loading settings…</p>
        ) : (
          <>
            <div style={styles.field}>
              <label style={styles.label}>System Prompt</label>
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

            <div style={styles.field}>
              <label style={styles.label}>
                <input
                  type="checkbox"
                  checked={forwardingEnabled}
                  onChange={(e) => setForwardingEnabled(e.target.checked)}
                  style={{ marginRight: 8 }}
                />
                Smart call forwarding enabled
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

            <button
              onClick={handleSave}
              disabled={saving}
              style={{ ...styles.saveBtn, opacity: saving ? 0.6 : 1 }}
            >
              {saving ? 'Saving…' : 'Save settings'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#f5f5f5', padding: 20 } as React.CSSProperties,
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: 24, backgroundColor: 'white', padding: 18, borderRadius: 8,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
  } as React.CSSProperties,
  logoutButton: {
    padding: '10px 16px', backgroundColor: '#ef4444', color: 'white',
    border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 500,
  } as React.CSSProperties,
  linkBtn: {
    padding: '10px 16px', background: '#075e54', color: 'white',
    borderRadius: 4, textDecoration: 'none', fontWeight: 500,
  } as React.CSSProperties,
  card: {
    backgroundColor: 'white', padding: 22, borderRadius: 8,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)', maxWidth: 720,
  } as React.CSSProperties,
  field: { marginBottom: 20 } as React.CSSProperties,
  label: {
    display: 'block', fontWeight: 600, color: '#222', marginBottom: 6,
  } as React.CSSProperties,
  help: { color: '#666', fontSize: 13, marginBottom: 8 } as React.CSSProperties,
  textarea: {
    width: '100%', padding: 10, border: '1px solid #ddd', borderRadius: 4,
    fontSize: 14, fontFamily: 'inherit', resize: 'vertical' as const,
  } as React.CSSProperties,
  input: {
    width: '100%', padding: 10, border: '1px solid #ddd', borderRadius: 4,
    fontSize: 14,
  } as React.CSSProperties,
  resetBtn: {
    marginTop: 8, background: 'transparent', color: '#075e54',
    border: '1px solid #075e54', padding: '6px 12px',
    borderRadius: 4, cursor: 'pointer',
  } as React.CSSProperties,
  saveBtn: {
    padding: '12px 24px', background: '#25d366', color: 'white',
    border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 600,
    fontSize: 15,
  } as React.CSSProperties,
  msgBox: {
    padding: 10, borderRadius: 4, marginBottom: 12,
  } as React.CSSProperties,
}

export default SettingsPage
