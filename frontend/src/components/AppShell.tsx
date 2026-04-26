import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { io, Socket } from 'socket.io-client'
import { useAuthStore } from '@store/authStore'

const API_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5000' : window.location.origin)

type ConnStatus = 'connected' | 'qr' | 'connecting' | 'disconnected'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '📡' },
  { to: '/messages', label: 'Messages', icon: '💬' },
  { to: '/calls', label: 'Calls', icon: '📞' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
]

const AppShell: React.FC = () => {
  const navigate = useNavigate()
  const { user, token, logout } = useAuthStore()
  const [connStatus, setConnStatus] = useState<ConnStatus>('disconnected')
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    if (!token) return
    const s = io(API_URL, { transports: ['websocket', 'polling'], reconnection: true })
    socketRef.current = s
    s.on('connect', () => s.emit('authenticate', token))
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
    connecting: 'Connecting',
    disconnected: 'Offline',
  }[connStatus]

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <div className="brand">
          <div className="brand-logo">SQL 💉</div>
          <div className="brand-sub">WhatsApp AI Agent</div>
        </div>

        {/* Live status indicator */}
        <div className="conn-status-bar" style={{ borderColor: `${statusDotColor}44` }}>
          <span className={`status-dot ${connStatus === 'connected' ? 'dot-pulse' : ''}`}
                style={{ background: statusDotColor }} />
          <span style={{ fontSize: 12, color: statusDotColor, fontWeight: 600 }}>
            {statusLabel}
          </span>
        </div>

        <nav className="app-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                'app-nav-link' + (isActive ? ' is-active' : '')
              }
            >
              <span className="app-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="user-box">
          <div className="user-name">{user?.displayName || 'User'}</div>
          <div className="user-email">{user?.email}</div>
          <button onClick={handleSignOut} className="sign-out">
            Sign out
          </button>
        </div>
      </aside>

      <main className="app-main">
        <Outlet />
      </main>

      <style>{appShellCss}</style>
    </div>
  )
}

const appShellCss = `
  .app-shell {
    display: flex;
    min-height: 100vh;
    background: #f5f7f9;
  }
  .app-sidebar {
    width: 240px;
    min-height: 100vh;
    background: #0e3b35;
    color: #cfeae3;
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    flex-shrink: 0;
  }
  .brand { padding-bottom: 8px; border-bottom: 1px solid #14534b; }
  .brand-logo { font-size: 26px; font-weight: 700; color: white; }
  .brand-sub { font-size: 12px; color: #9bd3c7; margin-top: 4px; }

  .conn-status-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px solid #25d36644;
    border-radius: 6px;
    background: rgba(255,255,255,0.05);
  }
  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .app-nav { display: flex; flex-direction: column; gap: 4px; }
  .app-nav-link {
    display: flex; align-items: center; padding: 10px 12px;
    border-radius: 6px; color: #cfeae3; text-decoration: none;
    font-size: 14px; font-weight: 500; transition: background .15s;
  }
  .app-nav-link:hover { background: #14534b; }
  .app-nav-link.is-active { background: #25d366; color: white; }
  .app-nav-icon { margin-right: 10px; font-size: 16px; }
  .user-box { margin-top: auto; padding-top: 14px; border-top: 1px solid #14534b; }
  .user-name { color: white; font-weight: 600; font-size: 14px; }
  .user-email {
    color: #9bd3c7; font-size: 12px; margin-bottom: 10px;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .sign-out {
    width: 100%; padding: 8px; background: transparent; color: #ff8b8b;
    border: 1px solid #ff8b8b; border-radius: 4px; cursor: pointer; font-weight: 500;
  }
  .app-main { flex: 1; padding: 28px; overflow: auto; }

  @keyframes pulse-ring {
    0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.6); }
    70%  { box-shadow: 0 0 0 6px rgba(37,211,102,0); }
    100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
  }
  .dot-pulse { animation: pulse-ring 1.5s infinite; }

  @media (max-width: 720px) {
    .app-shell { flex-direction: column; }
    .app-sidebar {
      width: auto; min-height: auto; padding: 12px;
      flex-direction: row; flex-wrap: wrap; gap: 8px;
    }
    .conn-status-bar { display: none; }
    .app-nav { flex-direction: row; flex-wrap: wrap; gap: 6px; flex: 1 1 100%; }
    .user-box {
      flex: 1 1 100%; margin-top: 8px; padding-top: 8px;
      display: flex; align-items: center; gap: 10px;
    }
    .user-email { display: none; }
    .sign-out { width: auto; }
    .app-main { padding: 16px; }
    .brand { display: none; }
  }
`

export default AppShell
