import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@store/authStore'
import { Socket } from 'socket.io-client'
import Sidebar from './Sidebar'
import { createSocket } from '@services/socket'
import axiosInstance from '@services/api/apiClient'

type ConnStatus = 'connected' | 'qr' | 'connecting' | 'disconnected'

const AppShell: React.FC = () => {
  const navigate = useNavigate()
  const { user, token, logout } = useAuthStore()
  const [connStatus, setConnStatus] = useState<ConnStatus>('disconnected')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const socketRef = useRef<Socket | null>(null)

  // Fetch real status on mount so topbar doesn't flash "Offline"
  useEffect(() => {
    if (!token) return
    axiosInstance.get('/api/whatsapp/status')
      .then(res => {
        const s = res.data?.data?.status as ConnStatus | undefined
        if (s) setConnStatus(s)
      })
      .catch(() => {/* ignore — Socket.IO will update soon */})
  }, [token])

  useEffect(() => {
    if (!token) return
    const s = createSocket(token)
    socketRef.current = s
    s.on('whatsapp:status', (payload: { status: ConnStatus }) => {
      setConnStatus(payload.status)
    })
    return () => { s.close(); socketRef.current = null }
  }, [token])

  const handleSignOut = async () => {
    await logout()
    navigate('/login')
  }

  const statusDotColor = {
    connected: '#25d366',
    qr: '#f59e0b',
    connecting: '#6b7280',
    disconnected: '#ef4444',
  }[connStatus]

  const statusLabel = {
    connected: 'Online',
    qr: 'Scan QR',
    connecting: 'Connecting…',
    disconnected: 'Offline',
  }[connStatus]

  return (
    <div className="app-shell">
      {/* Mobile topbar */}
      <div className="mobile-topbar">
        <button
          className="burger-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>💉</span>
          <span style={{ fontWeight: 700, color: 'white', fontSize: 16 }}>SQL AI</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: statusDotColor, display: 'inline-block' }} />
          <span style={{ fontSize: 12, color: 'white', fontWeight: 600 }}>{statusLabel}</span>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={`sidebar-wrapper${sidebarOpen ? ' is-open' : ''}`}>
        <Sidebar connectionLabel={statusLabel} connectionColor={statusDotColor} onLogout={handleSignOut} />
      </div>

      <main className="app-main">
        <Outlet />
      </main>

      <style>{appShellCss}</style>
    </div>
  )
}

const appShellCss = `
  * { box-sizing: border-box; }

  .app-shell {
    display: flex;
    min-height: 100vh;
    background: #f0f4f8;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  /* ── Sidebar ─────────────────────────────────────────── */
  .sidebar {
    width: 260px;
    min-height: 100vh;
    background: linear-gradient(160deg, #0a2520 0%, #133d35 60%, #1a5248 100%);
    color: #d8ede6;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
    border-right: 1px solid rgba(255,255,255,0.06);
  }

  .sidebar-brand {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .sidebar-title {
    font-size: 20px;
    font-weight: 800;
    color: white;
    letter-spacing: 0.01em;
  }

  .sidebar-subtitle {
    color: #7ec8b5;
    font-size: 11px;
    margin-top: 2px;
  }

  .sidebar-version {
    font-size: 10px;
    font-weight: 700;
    color: #25d366;
    background: rgba(37,211,102,0.12);
    border: 1px solid rgba(37,211,102,0.3);
    padding: 2px 8px;
    border-radius: 999px;
  }

  .sidebar-status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border: 1px solid;
    border-radius: 999px;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(4px);
    width: fit-content;
  }

  .sidebar-status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    transition: background-color 0.3s;
  }

  .sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
  }

  .sidebar-link {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #aad5c8;
    text-decoration: none;
    padding: 10px 14px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.15s ease;
  }

  .sidebar-link:hover {
    background: rgba(255,255,255,0.08);
    color: white;
    transform: translateX(2px);
  }

  .sidebar-link.is-active {
    background: linear-gradient(135deg, #25d366, #1aad52);
    color: white;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(37,211,102,0.3);
  }

  .sidebar-icon {
    font-size: 16px;
    width: 20px;
    text-align: center;
    flex-shrink: 0;
  }

  .sidebar-user {
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    background: rgba(255,255,255,0.05);
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.08);
  }

  .sidebar-user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #25d366, #0e3b35);
    color: white;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sidebar-user-name {
    font-weight: 700;
    color: white;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sidebar-user-email {
    color: #7ec8b5;
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sidebar-logout-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    padding: 4px;
    border-radius: 8px;
    transition: background 0.15s;
    flex-shrink: 0;
  }

  .sidebar-logout-btn:hover {
    background: rgba(255,80,80,0.15);
  }

  /* ── Mobile topbar ───────────────────────────────────── */
  .mobile-topbar {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 54px;
    background: linear-gradient(135deg, #0a2520, #133d35);
    z-index: 200;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 12px rgba(0,0,0,0.3);
  }

  .burger-btn {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: background 0.15s;
  }

  .burger-btn:hover { background: rgba(255,255,255,0.1); }

  .sidebar-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 149;
  }

  .sidebar-wrapper {
    display: flex;
  }

  /* ── Main content ────────────────────────────────────── */
  .app-main {
    flex: 1;
    padding: 28px;
    overflow: auto;
    min-height: 100vh;
  }

  /* ── Animations ─────────────────────────────────────── */
  @keyframes pulse-ring {
    0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.6); }
    70%  { box-shadow: 0 0 0 6px rgba(37,211,102,0); }
    100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
  }
  .dot-pulse { animation: pulse-ring 1.5s infinite; }

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-in { animation: fade-in 0.3s ease forwards; }

  /* ── Mobile responsive ───────────────────────────────── */
  @media (max-width: 768px) {
    .mobile-topbar { display: flex; }

    .sidebar-overlay { display: block; }

    .sidebar-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 150;
      transform: translateX(-100%);
      transition: transform 0.25s ease;
    }

    .sidebar-wrapper.is-open {
      transform: translateX(0);
    }

    .sidebar {
      min-height: 100vh;
      width: 260px;
    }

    .app-main {
      padding: 70px 16px 16px;
    }
  }
`

export default AppShell
