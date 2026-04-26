import React, { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import axiosInstance from '@services/api/apiClient'
import { useAuthStore } from '@store/authStore'
import type { ApiResponse, ChatMessage } from '@type/common.types'

const API_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5000' : window.location.origin)

const TYPE_ICON: Record<string, string> = {
  text: '✉️',
  image: '🖼️',
  audio: '🎙️',
  video: '📹',
}

const MessagesPage: React.FC = () => {
  const { token } = useAuthStore()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)
  const socketRef = useRef<Socket | null>(null)

  const load = async (showSpinner = false) => {
    if (showSpinner) setLoading(true)
    setErr(null)
    try {
      const res = await axiosInstance.get<ApiResponse<{ messages: ChatMessage[] }>>(
        '/api/whatsapp/messages?limit=200'
      )
      setMessages(res.data.data?.messages || [])
    } catch (e: any) {
      setErr(e?.response?.data?.message || 'Failed to load messages')
    } finally {
      if (showSpinner) setLoading(false)
    }
  }

  useEffect(() => {
    load(true)
  }, [])

  // Live updates via Socket.IO + 5s fallback poll
  useEffect(() => {
    if (!token) return
    const s = io(API_URL, { transports: ['websocket', 'polling'], reconnection: true })
    socketRef.current = s
    s.on('connect', () => s.emit('authenticate', token))
    s.on('whatsapp:message:new', () => load())
    return () => { s.close(); socketRef.current = null }
  }, [token])

  useEffect(() => {
    const id = window.setInterval(() => load(), 5000)
    return () => window.clearInterval(id)
  }, [])

  // Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const filtered = search.trim()
    ? messages.filter(
        (m) =>
          m.content.toLowerCase().includes(search.toLowerCase()) ||
          m.from.toLowerCase().includes(search.toLowerCase())
      )
    : messages

  // Group messages by sender JID for conversation view
  const grouped: ChatMessage[][] = []
  filtered.forEach((msg) => {
    const last = grouped[grouped.length - 1]
    if (last && last[0].from === msg.from && last[0].isFromAI === msg.isFromAI) {
      last.push(msg)
    } else {
      grouped.push([msg])
    }
  })

  return (
    <div>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0, color: '#0e3b35' }}>💬 Messages</h1>
        <p style={{ margin: '6px 0 0', color: '#666' }}>
          Bot ne ye messages handle kiye — live updates har 8 seconds mein.
        </p>
      </header>

      <div style={card}>
        {/* Toolbar */}
        <div style={toolbar}>
          <strong style={{ color: '#333' }}>
            {filtered.length} / {messages.length} messages
          </strong>
          <input
            type="text"
            placeholder="Search by content or number…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={searchInput}
          />
          <button onClick={() => load(true)} style={refreshBtn}>
            🔄 Refresh
          </button>
        </div>

        {err && <div style={errorBox}>{err}</div>}
        {loading && <p style={{ color: '#666', textAlign: 'center', padding: '40px 0' }}>Loading…</p>}

        {!loading && messages.length === 0 && !err && (
          <p style={{ color: '#666', textAlign: 'center', padding: '60px 0' }}>
            Abhi tak koi message nahi. WhatsApp connect karein aur message bhejne par yahan dikhega.
          </p>
        )}

        {/* Conversation bubbles */}
        <div style={chatArea}>
          {grouped.map((group, gi) => {
            const isAI = group[0].isFromAI
            return (
              <div
                key={gi}
                style={{ display: 'flex', flexDirection: 'column', alignItems: isAI ? 'flex-end' : 'flex-start', gap: 2 }}
              >
                {/* Sender label */}
                <div style={{ fontSize: 11, color: '#999', marginBottom: 2, paddingLeft: isAI ? 0 : 6, paddingRight: isAI ? 6 : 0 }}>
                  {isAI ? '🤖 SQL 💉 (AI)' : `👤 ${group[0].from.replace('@s.whatsapp.net', '')}`}
                </div>
                {group.map((msg) => (
                  <div
                    key={msg.messageId || `${msg.timestamp}-${msg.from}`}
                    style={bubble(isAI)}
                  >
                    <div style={{ fontSize: 10, color: isAI ? '#a7f3d0' : '#999', marginBottom: 4 }}>
                      {TYPE_ICON[msg.type] || '✉️'} {formatTs(msg.timestamp)}
                    </div>
                    <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: 14, lineHeight: 1.5 }}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
            )
          })}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  )
}

const card: React.CSSProperties = {
  background: 'white',
  padding: 20,
  borderRadius: 8,
  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
}
const toolbar: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  marginBottom: 16,
  flexWrap: 'wrap',
}
const searchInput: React.CSSProperties = {
  flex: 1,
  minWidth: 180,
  padding: '7px 10px',
  border: '1px solid #ddd',
  borderRadius: 6,
  fontSize: 13,
  outline: 'none',
}
const refreshBtn: React.CSSProperties = {
  padding: '7px 14px',
  background: '#0e3b35',
  color: 'white',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 13,
  fontWeight: 500,
}
const errorBox: React.CSSProperties = {
  padding: 10,
  background: '#fee2e2',
  color: '#991b1b',
  borderRadius: 4,
  marginBottom: 10,
}
const chatArea: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  maxHeight: '65vh',
  overflowY: 'auto',
  padding: '10px 4px',
}
const bubble = (isAI: boolean): React.CSSProperties => ({
  maxWidth: '70%',
  padding: '8px 12px',
  borderRadius: isAI ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
  background: isAI ? '#0e3b35' : '#f0f2f5',
  color: isAI ? 'white' : '#222',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
})

function formatTs(ts: any): string {
  if (!ts) return '—'
  const n = typeof ts === 'number' ? ts : Date.parse(String(ts))
  if (isNaN(n)) return String(ts)
  return new Date(n).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export default MessagesPage
