import React, { useEffect, useState } from 'react'
import axiosInstance from '@services/api/apiClient'
import type { ApiResponse, ChatMessage } from '@type/common.types'

const MessagesPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    setErr(null)
    try {
      const res = await axiosInstance.get<
        ApiResponse<{ messages: ChatMessage[] }>
      >('/api/whatsapp/messages?limit=100')
      setMessages(res.data.data?.messages || [])
    } catch (e: any) {
      setErr(e?.response?.data?.message || 'Failed to load messages')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0, color: '#0e3b35' }}>💬 Messages</h1>
        <p style={{ margin: '6px 0 0', color: '#666' }}>
          Bot ne ye messages handle kiye — incoming aur AI replies.
        </p>
      </header>

      <div style={card}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12,
          }}
        >
          <strong>{messages.length} entries</strong>
          <button onClick={load} style={refreshBtn}>
            Refresh
          </button>
        </div>

        {err && <div style={errorBox}>{err}</div>}
        {loading && <p style={{ color: '#666' }}>Loading…</p>}

        {!loading && messages.length === 0 && !err && (
          <p style={{ color: '#666' }}>Abhi tak koi message nahi. WhatsApp connect karein aur message bhejne par yahan dikhega.</p>
        )}

        {messages.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {messages.map((m) => (
              <div
                key={m.messageId || `${m.timestamp}-${m.from}`}
                style={{
                  ...row,
                  background: m.isFromAI ? '#e6f8ee' : '#f5f7f9',
                }}
              >
                <div style={rowMeta}>
                  <span style={pill(m.isFromAI ? '#25d366' : '#666')}>
                    {m.isFromAI ? 'AI' : 'User'}
                  </span>
                  <span>{m.from} → {m.to}</span>
                  <span>{formatTs(m.timestamp)}</span>
                  <span style={{ color: '#999' }}>{m.type}</span>
                </div>
                <div style={rowBody}>{m.content}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const card: React.CSSProperties = {
  background: 'white',
  padding: 22,
  borderRadius: 8,
  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
}
const refreshBtn: React.CSSProperties = {
  padding: '6px 12px',
  background: '#0e3b35',
  color: 'white',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
}
const errorBox: React.CSSProperties = {
  padding: 10,
  background: '#fee2e2',
  color: '#991b1b',
  borderRadius: 4,
  marginBottom: 10,
}
const row: React.CSSProperties = {
  padding: 12,
  borderRadius: 6,
  border: '1px solid #e5e7eb',
}
const rowMeta: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  fontSize: 12,
  color: '#555',
  marginBottom: 6,
  alignItems: 'center',
}
const rowBody: React.CSSProperties = {
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  fontSize: 14,
  color: '#222',
}
const pill = (color: string): React.CSSProperties => ({
  background: `${color}1a`,
  color,
  borderRadius: 999,
  padding: '2px 8px',
  fontWeight: 600,
})

function formatTs(ts: any): string {
  if (!ts) return '—'
  const n = typeof ts === 'number' ? ts : Date.parse(String(ts))
  if (isNaN(n)) return String(ts)
  return new Date(n).toLocaleString()
}

export default MessagesPage
