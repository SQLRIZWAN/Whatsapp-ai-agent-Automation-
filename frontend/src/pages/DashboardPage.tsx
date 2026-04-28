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
  const [logoutConfirm, setLogoutConfirm] = useState(false)
  const [logoutLoading, setLogoutLoading] = useState(false)
  const socketRef = useRef<Socket | null>(null)
  const pollRef = useRef<number | null>(null)
  const uptimeRef = useRef<number | null>(null)
  const connectedAtRef = useRef<number | null>(null)

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
      } catch { /* stats are best-effort */ }
    }
    fetchStats()
  }, [])

  useEffect(() => {
    if (!token) return
    const s = io(API_URL, { transports: ['websocket', 'polling'], reconnection: true })
    socketRef.current = s
    s.on('connect', () => s.emit('authenticate', token))
    s.on('whatsapp:status', (payload: any) => {
      setSnap(payload)
      if (payload.connectedAt) connectedAtRef.current = payload.connectedAt
      if (payload.status !== 'connected') connectedAtRef.current = null
    })
    return () => { s.close(); socketRef.current = null }
  }, [token])

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

  const handleConnect = async () => {
    setErr(null)
    try {
      const res = await whatsappApi.connect()
      setSnap(res.data.data)
    } catch (e: any) {
      setErr(e?.response?.data?.message || 'Failed to connect')
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

  const handleWhatsappLogout = async () => {
    if (!logoutConfirm) { setLogoutConfirm(true); return }
    setLogoutLoading(true)
    setLogoutConfirm(false)
    try {
      await whatsappApi.logoutWhatsapp()
      setSnap({ status: 'disconnected', qrCode: null, phone: null, attempts: 0, lastError: null, connectedAt: null })
      connectedAtRef.current = null
    } catch (e: any) {
      setErr(e?.response?.data?.message || 'Failed to logout of WhatsApp')
    } finally {
      setLogoutLoading(false)
    }
  }

  const cancelLogout = () => setLogoutConfirm(false)

  const statusMeta = (() => {
    switch (snap.status) {
      case 'connected':   return { label: `Connected`, sublabel: snap.phone || '', color: '#25d366', bg: 'rgba(37,211,102,0.1)', icon: '🟢' }
      case 'qr':          return { label: 'Scan QR Code', sublabel: 'Waiting for scan', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', icon: '📲' }
      case 'connecting':  return { label: 'Connecting…', sublabel: 'Please wait', color: '#6b7280', bg: 'rgba(107,114,128,0.1)', icon: '🔄' }
      default:            return { label: 'Disconnected', sublabel: 'Bot is offline', color: '#ef4444', bg: 'rgba(239,68,68,0.1)', icon: '🔴' }
    }
  })()

  const features = [
    { icon: '✉️', label: 'Text Messages', desc: 'Gemini AI se smart Hinglish reply' },
    { icon: '🖼️', label: 'Image Analysis', desc: 'Vision model se image samajh ke reply' },
    { icon: '🎨', label: 'Image Generation', desc: '"image banao" likhne par AI image banata hai' },
    { icon: '🎙️', label: 'Voice Notes', desc: 'Audio message sunn ke voice reply' },
    { icon: '📹', label: 'Video Messages', desc: 'Video dekh ke context-aware reply' },
    { icon: '📞', label: 'Auto Call Reject', desc: 'Call reject + AI voice note bhejta hai' },
  ]

  return (
    <div style={{ animation: 'fade-in 0.3s ease' }}>
      {/* Page header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 26, color: '#0e3b35' }}>📡 Dashboard</h1>
        <p style={{ margin: '4px 0 0', color: '#5a7269', fontSize: 14 }}>
          WhatsApp AI bot ka live status aur control panel
        </p>
      </div>

      {/* Stats row */}
      <div style={statsGrid}>
        <StatCard icon="💬" label="Messages" value={stats.messages.toString()} accent="#25d366" gradient="linear-gradient(135deg,#25d36618,#25d36605)" />
        <StatCard icon="📞" label="Calls" value={stats.calls.toString()} accent="#3b82f6" gradient="linear-gradient(135deg,#3b82f618,#3b82f605)" />
        <StatCard icon="⏱️" label="Uptime" value={snap.status === 'connected' ? (uptime || '—') : '—'} accent="#f59e0b" gradient="linear-gradient(135deg,#f59e0b18,#f59e0b05)" />
        <div style={{ ...statCardBase, background: statusMeta.bg, border: `1.5px solid ${statusMeta.color}33` }}>
          <div style={{ fontSize: 28 }}>{statusMeta.icon}</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: statusMeta.color }}>{statusMeta.label}</div>
          <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{statusMeta.sublabel}</div>
        </div>
      </div>

      <div style={mainGrid}>
        {/* Connection card */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: '#25d36615', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>📱</div>
            <div>
              <h2 style={{ margin: 0, fontSize: 16 }}>WhatsApp Connection</h2>
              <p style={{ margin: 0, fontSize: 12, color: '#888' }}>Bot ka connection manage karein</p>
            </div>
          </div>

          {/* Status pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 16px', borderRadius: 999,
            background: statusMeta.bg, color: statusMeta.color,
            border: `1px solid ${statusMeta.color}44`,
            fontWeight: 700, fontSize: 13, marginBottom: 14
          }}>
            <span style={{
              width: 9, height: 9, borderRadius: '50%', backgroundColor: statusMeta.color, flexShrink: 0,
              ...(snap.status === 'connected' ? { animation: 'pulse-ring 1.5s infinite' } : {})
            }} />
            {statusMeta.label}
            {snap.phone && <span style={{ fontWeight: 400, opacity: 0.8 }}>— {snap.phone}</span>}
          </div>

          {snap.attempts > 1 && snap.status !== 'connected' && (
            <div style={{ fontSize: 12, color: '#92400e', background: '#fff7ed', padding: '6px 10px', borderRadius: 6, marginBottom: 10 }}>
              Reconnect attempt {snap.attempts}/25{snap.lastError ? ` — ${snap.lastError}` : ''}
            </div>
          )}

          {loading && <p style={{ color: '#888', fontSize: 14 }}>Status load ho rahi hai…</p>}
          {err && <div style={errorBox}>{err}</div>}

          {/* QR Code */}
          {snap.status === 'qr' && snap.qrCode && (
            <div style={qrWrap}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ padding: 8, background: 'white', borderRadius: 12, border: '3px solid #25d366', display: 'inline-block', boxShadow: '0 4px 16px rgba(37,211,102,0.2)' }}>
                  <img src={snap.qrCode} alt="WhatsApp QR" style={{ width: 240, height: 240, display: 'block', borderRadius: 6 }} />
                </div>
                <p style={{ fontSize: 11, color: '#888', marginTop: 8 }}>
                  QR aapki UID se linked hai — ek baar scan, session save ho jayega
                </p>
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#0e3b35', marginBottom: 12 }}>📋 Scan Kaise Karein:</div>
                {['WhatsApp app kholein', 'Menu → Linked Devices', '"Link a Device" tap karein', 'Is QR ko scan karein'].map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#25d366', color: 'white', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                    <span style={{ fontSize: 13, color: '#333', lineHeight: 1.5 }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {snap.status === 'connecting' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#6b7280', fontSize: 14, padding: '10px 0' }}>
              <span style={{ width: 16, height: 16, border: '2px solid #ccc', borderTopColor: '#25d366', borderRadius: '50%', animation: 'spin 0.7s linear infinite', flexShrink: 0 }} />
              Session load ho rahi hai, QR generate hote hi dikh jayega…
            </div>
          )}

          {/* Action buttons */}
          {snap.status === 'disconnected' && (
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8 }}>
              <button onClick={handleConnect} style={primaryBtn}>🔗 Connect WhatsApp</button>
              <button onClick={handleForceReconnect} style={secondaryBtn}>🔄 Force Restart</button>
            </div>
          )}

          {snap.status === 'connected' && (
            <div>
              {uptime && <p style={{ fontSize: 13, color: '#5a7269', margin: '4px 0 10px' }}>Connected for: <b style={{ color: '#0e3b35' }}>{uptime}</b></p>}
              <div style={{ padding: '12px 16px', background: 'rgba(37,211,102,0.08)', borderRadius: 10, border: '1px solid rgba(37,211,102,0.2)', marginBottom: 12 }}>
                <p style={{ color: '#16a34a', fontWeight: 600, margin: 0, fontSize: 14 }}>
                  ✅ Bot live hai — messages, calls aur voice notes auto-handle ho rahe hain!
                </p>
              </div>
              {!logoutConfirm ? (
                <button onClick={handleWhatsappLogout} style={dangerBtn} disabled={logoutLoading}>
                  {logoutLoading ? 'Logging out…' : '🔌 WhatsApp Logout (Unlink Device)'}
                </button>
              ) : (
                <div style={confirmBox}>
                  <p style={{ margin: '0 0 6px', fontWeight: 700, color: '#991b1b', fontSize: 14 }}>⚠️ Confirm Logout?</p>
                  <p style={{ margin: '0 0 12px', fontSize: 12, color: '#555' }}>
                    Yeh WhatsApp ko unlink kar dega. Dobara connect karne ke liye nayi QR scan karni padegi.
                  </p>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button onClick={handleWhatsappLogout} style={dangerBtnSolid} disabled={logoutLoading}>
                      {logoutLoading ? 'Logging out…' : 'Haan, Logout Karo'}
                    </button>
                    <button onClick={cancelLogout} style={cancelBtn}>Cancel</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Features card */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: '#3b82f615', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🤖</div>
            <div>
              <h2 style={{ margin: 0, fontSize: 16 }}>Bot Capabilities</h2>
              <p style={{ margin: 0, fontSize: 12, color: '#888' }}>SQL 💉 AI kya kya kar sakta hai</p>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 10 }}>
            {features.map((f) => (
              <div key={f.label} style={{ display: 'flex', gap: 12, padding: '10px 12px', background: '#f8fafb', borderRadius: 10, border: '1px solid #edf1f0', alignItems: 'flex-start' }}>
                <div style={{ fontSize: 20, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#1a2e2b' }}>{f.label}</div>
                  <div style={{ fontSize: 12, color: '#5a7269', marginTop: 2 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/settings" style={linkBtn}>⚙️ AI Prompt &amp; Settings Configure Karein →</Link>
        </div>
      </div>

      <style>{animCss}</style>
    </div>
  )
}

/* ── Sub-components ───────────────────────────────────── */
interface StatCardProps { icon: string; label: string; value: string; accent: string; gradient: string }

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, accent, gradient }) => (
  <div style={{ ...statCardBase, background: gradient, border: `1.5px solid ${accent}22` }}>
    <div style={{ fontSize: 26 }}>{icon}</div>
    <div style={{ fontSize: 26, fontWeight: 800, color: accent, lineHeight: 1.2 }}>{value}</div>
    <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{label}</div>
  </div>
)

/* ── Styles ───────────────────────────────────────────── */
const animCss = `
  @keyframes pulse-ring {
    0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
    70%  { box-shadow: 0 0 0 8px rgba(37,211,102,0); }
    100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
  }
  @keyframes fade-in {
    from { opacity:0; transform:translateY(8px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`

const statsGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))',
  gap: 14,
  marginBottom: 22,
}

const statCardBase: React.CSSProperties = {
  padding: '18px 16px',
  borderRadius: 14,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  background: 'white',
}

const mainGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))',
  gap: 20,
}

const cardStyle: React.CSSProperties = {
  background: 'white',
  padding: 22,
  borderRadius: 14,
  boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
  border: '1px solid #edf1f0',
}

const errorBox: React.CSSProperties = {
  padding: '10px 14px',
  background: '#fee2e2',
  color: '#991b1b',
  borderRadius: 8,
  fontSize: 13,
  marginTop: 10,
  border: '1px solid #fecaca',
}

const confirmBox: React.CSSProperties = {
  padding: 14,
  background: '#fff7ed',
  border: '1px solid #fed7aa',
  borderRadius: 10,
  marginTop: 10,
}

const qrWrap: React.CSSProperties = {
  marginTop: 14,
  display: 'flex',
  gap: 20,
  alignItems: 'flex-start',
  flexWrap: 'wrap',
}

const primaryBtn: React.CSSProperties = {
  padding: '11px 20px',
  background: 'linear-gradient(135deg,#25d366,#1aad52)',
  color: 'white',
  border: 'none',
  borderRadius: 8,
  fontWeight: 700,
  fontSize: 14,
  boxShadow: '0 2px 8px rgba(37,211,102,0.3)',
  cursor: 'pointer',
}

const secondaryBtn: React.CSSProperties = {
  padding: '11px 20px',
  background: 'transparent',
  color: '#0e3b35',
  border: '1.5px solid #0e3b35',
  borderRadius: 8,
  fontWeight: 600,
  fontSize: 14,
  cursor: 'pointer',
}

const dangerBtn: React.CSSProperties = {
  padding: '10px 16px',
  background: 'transparent',
  color: '#ef4444',
  border: '1.5px solid #ef4444',
  borderRadius: 8,
  fontSize: 14,
  cursor: 'pointer',
  fontWeight: 600,
}

const dangerBtnSolid: React.CSSProperties = {
  padding: '10px 16px',
  background: '#ef4444',
  color: 'white',
  border: 'none',
  borderRadius: 8,
  fontWeight: 700,
  fontSize: 14,
  cursor: 'pointer',
}

const cancelBtn: React.CSSProperties = {
  padding: '10px 16px',
  background: 'transparent',
  color: '#6b7280',
  border: '1px solid #d1d5db',
  borderRadius: 8,
  fontSize: 14,
  cursor: 'pointer',
}

const linkBtn: React.CSSProperties = {
  display: 'inline-block',
  marginTop: 16,
  padding: '10px 16px',
  background: 'rgba(14,59,53,0.06)',
  color: '#0e3b35',
  textDecoration: 'none',
  fontWeight: 700,
  borderRadius: 8,
  fontSize: 13,
  border: '1px solid rgba(14,59,53,0.12)',
  transition: 'all 0.15s ease',
}

export default DashboardPage
