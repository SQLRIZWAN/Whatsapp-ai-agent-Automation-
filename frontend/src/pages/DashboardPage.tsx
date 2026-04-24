import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { io, Socket } from 'socket.io-client'
import { useAuthStore } from '@store/authStore'
import * as whatsappApi from '@services/api/whatsappApi'
import type { WhatsappSnapshot } from '@services/api/whatsappApi'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const DashboardPage: React.FC = () => {
  const navigate = useNavigate()
  const { user, token, logout } = useAuthStore()
  const [snap, setSnap] = useState<WhatsappSnapshot>({
    status: 'disconnected',
    qrCode: null,
    phone: null,
  })
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState<string | null>(null)
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    let cancelled = false
    const boot = async () => {
      try {
        const res = await whatsappApi.getStatus()
        if (cancelled) return
        setSnap(res.data.data)
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

  const handleLogoutApp = async () => {
    await logout()
    navigate('/login')
  }

  const handleWhatsappLogout = async () => {
    try {
      await whatsappApi.logoutWhatsapp()
      setSnap({ status: 'disconnected', qrCode: null, phone: null })
      await whatsappApi.connect()
    } catch (e: any) {
      setErr(e?.response?.data?.message || 'Failed to logout of WhatsApp')
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
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={{ margin: 0, color: '#075e54' }}>SQL 💉 — WhatsApp AI</h1>
          <div style={{ color: '#666', fontSize: 13 }}>
            Signed in as {user?.displayName || user?.email}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link to="/settings" style={styles.linkBtn}>Settings</Link>
          <button onClick={handleLogoutApp} style={styles.logoutButton}>Sign out</button>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.card}>
          <h2 style={{ marginTop: 0 }}>WhatsApp Connection</h2>

          <div style={styles.statusPill(statusLabel.color)}>
            <span style={styles.dot(statusLabel.color)} />
            {statusLabel.text}
          </div>

          {loading && <p style={{ color: '#666' }}>Loading status…</p>}
          {err && <div style={styles.errorBox}>{err}</div>}

          {snap.status === 'qr' && snap.qrCode && (
            <div style={styles.qrWrap}>
              <img src={snap.qrCode} alt="WhatsApp QR" style={{ width: 280, height: 280, borderRadius: 8 }} />
              <ol style={styles.qrSteps}>
                <li>WhatsApp mobile app kholein</li>
                <li>Menu → <b>Linked Devices</b></li>
                <li><b>Link a Device</b> press karein aur is QR ko scan karein</li>
              </ol>
            </div>
          )}

          {snap.status === 'connecting' && (
            <p style={{ color: '#666' }}>Session load ho rahi hai. QR thodi der mein aayega…</p>
          )}

          {snap.status === 'connected' && (
            <div>
              <p style={{ color: '#25d366', fontWeight: 600 }}>
                Bot live hai — incoming messages aur calls auto-handle ho rahe hain.
              </p>
              <button onClick={handleWhatsappLogout} style={styles.dangerBtn}>Unlink this WhatsApp</button>
            </div>
          )}
        </div>

        <div style={styles.card}>
          <h3 style={{ marginTop: 0 }}>Kya kaam karega</h3>
          <ul style={{ lineHeight: 1.7, color: '#333' }}>
            <li>📩 Text messages — Gemini se auto-reply SQL 💉 persona ke saath</li>
            <li>🖼️ Image/Video — Gemini Vision analyze karke reply</li>
            <li>🎙️ Voice notes — Gemini audio samajh ke voice note mein reply</li>
            <li>📞 Calls — reject karke turant voice note bhej deta hai</li>
            <li>🚨 "urgent/emergency/zaroori" mention ho to forwarding number suggest</li>
          </ul>
        </div>
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
  dangerBtn: {
    padding: '10px 16px', backgroundColor: 'transparent', color: '#ef4444',
    border: '1px solid #ef4444', borderRadius: 4, cursor: 'pointer', marginTop: 12,
  } as React.CSSProperties,
  content: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20,
  } as React.CSSProperties,
  card: {
    backgroundColor: 'white', padding: 22, borderRadius: 8,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
  } as React.CSSProperties,
  errorBox: {
    padding: 10, background: '#fee2e2', color: '#991b1b',
    borderRadius: 4, marginTop: 10,
  } as React.CSSProperties,
  qrWrap: {
    marginTop: 16, display: 'flex', gap: 24,
    alignItems: 'center', flexWrap: 'wrap' as const,
  } as React.CSSProperties,
  qrSteps: {
    lineHeight: 1.7, color: '#333', margin: 0, paddingLeft: 20,
  } as React.CSSProperties,
  statusPill: (color: string): React.CSSProperties => ({
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '6px 12px', background: `${color}1a`, color,
    borderRadius: 999, fontWeight: 600, marginBottom: 12,
  }),
  dot: (color: string): React.CSSProperties => ({
    width: 10, height: 10, borderRadius: '50%', backgroundColor: color,
  }),
}

export default DashboardPage
