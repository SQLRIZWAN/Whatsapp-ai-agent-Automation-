import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { io, Socket } from 'socket.io-client'
import { useAuthStore } from '@store/authStore'
import * as whatsappApi from '@services/api/whatsappApi'
import type { WhatsappSnapshot } from '@services/api/whatsappApi'
import axiosInstance from '@services/api/apiClient'

const API_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5000' : window.location.origin)

interface Stats {
  messages: number
  calls: number
}

const DashboardPage: React.FC = () => {
  const { token } = useAuthStore()
  const [snap, setSnap] = useState<WhatsappSnapshot>({
    status: 'disconnected',
    qrCode: null,
    phone: null,
    attempts: 0,
    lastError: null,
    connectedAt: null,
  })
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState<string | null>(null)
  const [stats, setStats] = useState<Stats>({ messages: 0, calls: 0 })
  const [uptime, setUptime] = useState<string>('')
  const socketRef = useRef<Socket | null>(null)
  const pollRef = useRef<number | null>(null)
  const uptimeRef = useRef<number | null>(null)
  const connectedAtRef = useRef<number | null>(null)

  // Load initial status (also boots the Baileys runtime)
  useEffect(() => {
    let cancelled = false
    const boot = async () => {
      try {
        const res = await whatsappApi.getStatus()
        if (cancelled) return
        setSnap(res.data.data)
        const connAt = res.data.data.connectedAt
        if (connAt) connectedAtRef.current = connAt
      } catch (e: any) {
        if (!cancelled) setErr(e?.response?.data?.message || 'Failed to load status')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    boot()
    return () => { cancelled = true }
  }, [])

  // Load message & call counts
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [msgRes, callRes] = await Promise.all([
          axiosInstance.get('/api/whatsapp/messages?limit=1000'),
          axiosInstance.get('/api/whatsapp/calls?limit=1000'),
        ])
        setStats({
          messages: (msgRes.data.data?.messages || []).length,
          calls: (callRes.data.data?.calls || []).length,
        })
      } catch {
        // stats are best-effort
      }
    }
    fetchStats()
  }, [])

  // Live updates via Socket.IO
  useEffect(() => {
    if (!token) return
    const s = io(API_URL, {
      transports: ['websocket', 'polling'],
      reconnection: true,
    })
    socketRef.current = s
    s.on('connect', () => s.emit('authenticate', token))
    s.on('whatsapp:status', (payload: any) => {
      setSnap(payload)
      if (payload.connectedAt) connectedAtRef.current = payload.connectedAt
      if (payload.status !== 'connected') connectedAtRef.current = null
    })
    return () => {
      s.close()
      socketRef.current = null
    }
  }, [token])

  // Fallback poller when Socket.IO is blocked
  useEffect(() => {
    if (snap.status === 'connected') {
      if (pollRef.current) { window.clearInterval(pollRef.current); pollRef.current = null }
      return
    }
    pollRef.current = window.setInterval(async () => {
      try {
        const res = await whatsappApi.getStatus()
        setSnap(res.data.data)
      } catch { /* swallow */ }
    }, 4000)
    return () => { if (pollRef.current) window.clearInterval(pollRef.current); pollRef.current = null }
  }, [snap.status])

  // Live uptime counter while connected
  useEffect(() => {
    if (snap.status !== 'connected') {
      setUptime('')
      if (uptimeRef.current) window.clearInterval(uptimeRef.current)
      return
    }
    const tick = () => {
      const since = connectedAtRef.current
      if (!since) return
      const secs = Math.floor((Date.now() - since) / 1000)
      const h = Math.floor(secs / 3600)
      const m = Math.floor((secs % 3600) / 60)
      const s = secs % 60
      setUptime(h > 0 ? `${h}h ${m}m ${s}s` : m > 0 ? `${m}m ${s}s` : `${s}s`)
    }
    tick()
    uptimeRef.current = window.setInterval(tick, 1000)
    return () => { if (uptimeRef.current) window.clearInterval(uptimeRef.current) }
  }, [snap.status])

  const handleWhatsappLogout = async () => {
    try {
      await whatsappApi.logoutWhatsapp()
      setSnap({ status: 'disconnected', qrCode: null, phone: null, attempts: 0, lastError: null, connectedAt: null })
      await whatsappApi.connect()
    } catch (e: any) {
      setErr(e?.response?.data?.message || 'Failed to logout of WhatsApp')
    }
  }

  const handleForceReconnect = async () => {
    setErr(null)
    try {
      await whatsappApi.disconnect()
      const res = await whatsappApi.connect()
      setSnap(res.data.data)
    } catch (e: any) {
      setErr(e?.response?.data?.message || 'Failed to restart')
    }
  }

  const { label: statusLabel, color: statusColor } = (() => {
    switch (snap.status) {
      case 'connected': return { label: `Connected — ${snap.phone || ''}`, color: '#25d366' }
      case 'qr':        return { label: 'Waiting for QR scan', color: '#f59e0b' }
      case 'connecting':return { label: 'Connecting…', color: '#6b7280' }
      default:          return { label: 'Disconnected', color: '#ef4444' }
    }
  })()

  return (
    <div>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0, color: '#0e3b35' }}>📡 Dashboard</h1>
        <p style={{ margin: '6px 0 0', color: '#666' }}>
          WhatsApp connect karein aur AI ka live status dekhein.
        </p>
      </header>

      {/* Stats row */}
      <div style={statsRow}>
        <StatCard icon="💬" label="Messages Handled" value={stats.messages} color="#25d366" />
        <StatCard icon="📞" label="Calls Handled" value={stats.calls} color="#0e3b35" />
        <StatCard
          icon="⏱️"
          label="Uptime"
          value={snap.status === 'connected' ? uptime || '—' : '—'}
          color="#6b7280"
          isText
        />
        <StatCard
          icon={snap.status === 'connected' ? '🟢' : snap.status === 'qr' ? '🟡' : '🔴'}
          label="Bot Status"
          value={snap.status === 'connected' ? 'Online' : snap.status === 'qr' ? 'Scan QR' : 'Offline'}
          color={statusColor}
          isText
        />
      </div>

      <div style={grid}>
        {/* Connection card */}
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>WhatsApp Connection</h2>

          <div style={statusPill(statusColor)}>
            <span style={dot(statusColor, snap.status === 'connected')} />
            {statusLabel}
          </div>

          {snap.attempts > 1 && snap.status !== 'connected' && (
            <div style={{ color: '#92400e', fontSize: 12, marginBottom: 8 }}>
              Reconnect attempt {snap.attempts} / 25
              {snap.lastError ? ` — last error: ${snap.lastError}` : ''}
            </div>
          )}

          {loading && <p style={{ color: '#666' }}>Loading status…</p>}
          {err && <div style={errorBox}>{err}</div>}

          {snap.status === 'qr' && snap.qrCode && (
            <div style={qrWrap}>
              <div>
                <img src={snap.qrCode} alt="WhatsApp QR" style={{ width: 280, height: 280, borderRadius: 8, border: '3px solid #25d366' }} />
                <p style={{ fontSize: 12, color: '#888', marginTop: 6, textAlign: 'center' }}>
                  QR 60 seconds mein expire hota hai — jaldi scan karein
                </p>
              </div>
              <ol style={qrSteps}>
                <li>WhatsApp mobile app kholein</li>
                <li>Menu → <b>Linked Devices</b></li>
                <li><b>Link a Device</b> press karein</li>
                <li>Is QR code ko scan karein</li>
              </ol>
            </div>
          )}

          {snap.status === 'connecting' && (
            <p style={{ color: '#666' }}>
              Session load ho rahi hai. QR generate hote hi yahan dikh jayega…
            </p>
          )}

          {snap.status === 'disconnected' && (
            <button onClick={handleForceReconnect} style={primaryBtn}>
              🔄 Restart Connection
            </button>
          )}

          {snap.status === 'connected' && (
            <div>
              {uptime && (
                <p style={{ fontSize: 13, color: '#666', margin: '4px 0 8px' }}>
                  Connected for: <b>{uptime}</b>
                </p>
              )}
              <p style={{ color: '#25d366', fontWeight: 600, margin: '0 0 12px' }}>
                ✅ Bot live hai — sare messages aur calls auto-handle ho rahe hain.
              </p>
              <button onClick={handleWhatsappLogout} style={dangerBtn}>
                Unlink this WhatsApp
              </button>
            </div>
          )}
        </div>

        {/* Feature summary card */}
        <div style={card}>
          <h3 style={{ marginTop: 0 }}>Bot Kya Karta Hai</h3>
          <ul style={{ lineHeight: 2, color: '#333', paddingLeft: 20 }}>
            <li>✉️ <b>Text</b> — Gemini se AI reply (SQL 💉 persona)</li>
            <li>🖼️ <b>Image</b> — Vision model se analyze karke reply</li>
            <li>🎙️ <b>Voice note</b> — Audio samajh ke voice-note reply</li>
            <li>📹 <b>Video</b> — Video dekhke reply</li>
            <li>📞 <b>Calls</b> — Reject + AI voice-note + text follow-up</li>
            <li>🚨 <b>Urgent</b> — Forwarding number suggest karta hai</li>
          </ul>
          <Link to="/settings" style={linkBtn}>
            ⚙️ Configure prompt &amp; forwarding →
          </Link>
        </div>
      </div>

      <style>{pulseStyle}</style>
    </div>
  )
}

interface StatCardProps {
  icon: string
  label: string
  value: number | string
  color: string
  isText?: boolean
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, color, isText }) => (
  <div style={statCard}>
    <div style={{ fontSize: 28 }}>{icon}</div>
    <div style={{ fontSize: isText ? 18 : 28, fontWeight: 700, color, lineHeight: 1.2 }}>
      {value}
    </div>
    <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{label}</div>
  </div>
)

const pulseStyle = `
  @keyframes pulse-ring {
    0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
    70%  { box-shadow: 0 0 0 8px rgba(37,211,102,0); }
    100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
  }
  .dot-pulse { animation: pulse-ring 1.5s infinite; }
`

const statsRow: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: 14,
  marginBottom: 20,
}
const statCard: React.CSSProperties = {
  background: 'white',
  padding: '16px 18px',
  borderRadius: 8,
  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
}
const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: 20,
}
const card: React.CSSProperties = {
  background: 'white',
  padding: 22,
  borderRadius: 8,
  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
}
const errorBox: React.CSSProperties = {
  padding: 10,
  background: '#fee2e2',
  color: '#991b1b',
  borderRadius: 4,
  marginTop: 10,
}
const qrWrap: React.CSSProperties = {
  marginTop: 16,
  display: 'flex',
  gap: 24,
  alignItems: 'flex-start',
  flexWrap: 'wrap',
}
const qrSteps: React.CSSProperties = {
  lineHeight: 2,
  color: '#333',
  margin: 0,
  paddingLeft: 20,
}
const statusPill = (color: string): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '6px 12px',
  background: `${color}1a`,
  color,
  borderRadius: 999,
  fontWeight: 600,
  marginBottom: 12,
})
const dot = (color: string, pulse: boolean): React.CSSProperties => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: color,
  flexShrink: 0,
  ...(pulse ? { animation: 'pulse-ring 1.5s infinite' } : {}),
})
const primaryBtn: React.CSSProperties = {
  marginTop: 8,
  padding: '10px 20px',
  background: '#25d366',
  color: 'white',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: 14,
}
const dangerBtn: React.CSSProperties = {
  padding: '10px 16px',
  background: 'transparent',
  color: '#ef4444',
  border: '1px solid #ef4444',
  borderRadius: 6,
  cursor: 'pointer',
}
const linkBtn: React.CSSProperties = {
  display: 'inline-block',
  marginTop: 14,
  padding: '8px 14px',
  background: '#0e3b351a',
  color: '#0e3b35',
  textDecoration: 'none',
  fontWeight: 600,
  borderRadius: 6,
  fontSize: 13,
}

export default DashboardPage
