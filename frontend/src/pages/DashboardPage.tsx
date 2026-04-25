import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { io, Socket } from 'socket.io-client'
import { useAuthStore } from '@store/authStore'
import * as whatsappApi from '@services/api/whatsappApi'
import type { WhatsappSnapshot } from '@services/api/whatsappApi'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const DashboardPage: React.FC = () => {
  const { token } = useAuthStore()
  const [snap, setSnap] = useState<WhatsappSnapshot>({
    status: 'disconnected',
    qrCode: null,
    phone: null,
    attempts: 0,
    lastError: null,
  } as any)
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState<string | null>(null)
  const socketRef = useRef<Socket | null>(null)
  const pollRef = useRef<number | null>(null)

  // Initial status — also kicks the Baileys runtime if not started.
  useEffect(() => {
    let cancelled = false
    const boot = async () => {
      try {
        const res = await whatsappApi.getStatus()
        if (cancelled) return
        setSnap(res.data.data as any)
      } catch (e: any) {
        if (!cancelled) setErr(e?.response?.data?.message || 'Failed to load status')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    boot()
    return () => {
      cancelled = true
    }
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
    s.on('whatsapp:status', (payload: WhatsappSnapshot) => setSnap(payload))
    return () => {
      s.close()
      socketRef.current = null
    }
  }, [token])

  // Fallback poller in case Socket.IO is blocked by some proxy.
  useEffect(() => {
    if (snap.status === 'connected') {
      if (pollRef.current) {
        window.clearInterval(pollRef.current)
        pollRef.current = null
      }
      return
    }
    pollRef.current = window.setInterval(async () => {
      try {
        const res = await whatsappApi.getStatus()
        setSnap(res.data.data as any)
      } catch {
        /* swallow */
      }
    }, 4000)
    return () => {
      if (pollRef.current) window.clearInterval(pollRef.current)
      pollRef.current = null
    }
  }, [snap.status])

  const handleWhatsappLogout = async () => {
    try {
      await whatsappApi.logoutWhatsapp()
      setSnap({
        status: 'disconnected',
        qrCode: null,
        phone: null,
        attempts: 0,
        lastError: null,
      } as any)
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
      setSnap(res.data.data as any)
    } catch (e: any) {
      setErr(e?.response?.data?.message || 'Failed to restart')
    }
  }

  const statusLabel = (() => {
    switch (snap.status) {
      case 'connected':
        return { text: `Connected as ${snap.phone || '—'}`, color: '#25d366' }
      case 'qr':
        return { text: 'Waiting for QR scan', color: '#f59e0b' }
      case 'connecting':
        return { text: 'Connecting…', color: '#6b7280' }
      default:
        return { text: 'Disconnected', color: '#ef4444' }
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

      <div style={grid}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>WhatsApp Connection</h2>

          <div style={statusPill(statusLabel.color)}>
            <span style={dot(statusLabel.color)} />
            {statusLabel.text}
          </div>

          {(snap as any).attempts > 1 && snap.status !== 'connected' && (
            <div style={{ color: '#92400e', fontSize: 12, marginBottom: 8 }}>
              Reconnect attempt {(snap as any).attempts} / 8
              {(snap as any).lastError ? ` — last error: ${(snap as any).lastError}` : ''}
            </div>
          )}

          {loading && <p style={{ color: '#666' }}>Loading status…</p>}
          {err && <div style={errorBox}>{err}</div>}

          {snap.status === 'qr' && snap.qrCode && (
            <div style={qrWrap}>
              <img src={snap.qrCode} alt="WhatsApp QR" style={{ width: 280, height: 280, borderRadius: 8 }} />
              <ol style={qrSteps}>
                <li>WhatsApp mobile app kholein</li>
                <li>Menu → <b>Linked Devices</b></li>
                <li><b>Link a Device</b> press karein aur is QR ko scan karein</li>
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
              Restart connection
            </button>
          )}

          {snap.status === 'connected' && (
            <div>
              <p style={{ color: '#25d366', fontWeight: 600 }}>
                Bot live hai — incoming messages aur calls auto-handle ho rahe hain.
              </p>
              <button onClick={handleWhatsappLogout} style={dangerBtn}>
                Unlink this WhatsApp
              </button>
            </div>
          )}
        </div>

        <div style={card}>
          <h3 style={{ marginTop: 0 }}>What this bot does</h3>
          <ul style={{ lineHeight: 1.7, color: '#333' }}>
            <li>📩 Text messages — Gemini se auto-reply (SQL 💉 persona)</li>
            <li>🖼️ Image — Gemini Vision analyze karke reply</li>
            <li>🎙️ Voice notes — Gemini audio samajh ke voice-note reply</li>
            <li>📞 Calls — reject + turant voice-note + text follow-up</li>
            <li>🚨 "urgent/emergency/zaroori" → forwarding number suggest</li>
          </ul>
          <Link to="/settings" style={linkBtn}>
            Configure prompt &amp; forwarding →
          </Link>
        </div>
      </div>
    </div>
  )
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
  alignItems: 'center',
  flexWrap: 'wrap',
}
const qrSteps: React.CSSProperties = {
  lineHeight: 1.7,
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
const dot = (color: string): React.CSSProperties => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: color,
})
const primaryBtn: React.CSSProperties = {
  marginTop: 8,
  padding: '10px 18px',
  background: '#25d366',
  color: 'white',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  fontWeight: 600,
}
const dangerBtn: React.CSSProperties = {
  padding: '10px 16px',
  background: 'transparent',
  color: '#ef4444',
  border: '1px solid #ef4444',
  borderRadius: 4,
  cursor: 'pointer',
  marginTop: 12,
}
const linkBtn: React.CSSProperties = {
  display: 'inline-block',
  marginTop: 12,
  color: '#25d366',
  textDecoration: 'none',
  fontWeight: 600,
}

export default DashboardPage
