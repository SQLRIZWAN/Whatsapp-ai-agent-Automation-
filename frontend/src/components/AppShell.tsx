import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@store/authStore'
import { Socket } from 'socket.io-client'
import Sidebar from './Sidebar'
import { createSocket } from '@services/socket'

type ConnStatus = 'connected' | 'qr' | 'connecting' | 'disconnected'

const AppShell: React.FC = () => {
  const navigate = useNavigate()
  const { user, token, logout } = useAuthStore()
  const [connStatus, setConnStatus] = useState<ConnStatus>('disconnected')
  const socketRef = useRef<Socket | null>(null)

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
    connecting: 'Connecting',
    disconnected: 'Offline',
  }[connStatus]

  return (
    <div className="app-shell">
      <Sidebar connectionLabel={statusLabel} connectionColor={statusDotColor} onLogout={handleSignOut} />

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
  .sidebar {
    width: 280px;
    min-height: 100vh;
    background: linear-gradient(180deg, #102f2c 0%, #1f574f 100%);
    color: #d8ede6;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    flex-shrink: 0;
  }
  .sidebar-brand { display: grid; gap: 4px; }
  .sidebar-title { font-size: 28px; font-weight: 800; color: white; letter-spacing: 0.02em; }
  .sidebar-subtitle { color: #9fd0c0; font-size: 12px; }
  .sidebar-status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    padding: 8px 12px;
    border: 1px solid;
    border-radius: 999px;
    background: rgba(255,255,255,0.06);
    font-size: 12px;
    font-weight: 700;
  }
  .sidebar-status-dot { width: 8px; height: 8px; border-radius: 999px; }
  .sidebar-nav { display: grid; gap: 8px; }
  .sidebar-link {
    display: flex;
    gap: 10px;
    align-items: center;
    color: #d8ede6;
    text-decoration: none;
    padding: 12px 14px;
    border-radius: 16px;
    background: transparent;
    transition: transform .15s ease, background .15s ease;
  }
  .sidebar-link:hover { transform: translateX(2px); background: rgba(255,255,255,0.08); }
  .sidebar-link.is-active { background: #f2f5e9; color: #183531; }
  .sidebar-user { margin-top: auto; display: grid; gap: 6px; }
  .sidebar-user-name { font-weight: 700; color: white; }
  .sidebar-user-email { color: #9fd0c0; font-size: 12px; overflow: hidden; text-overflow: ellipsis; }
  .sidebar-logout {
    margin-top: 8px;
    padding: 10px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.18);
    color: white;
    background: transparent;
    cursor: pointer;
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
    .sidebar {
      width: auto; min-height: auto; padding: 12px;
      min-height: auto;
    }
    .sidebar-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .sidebar-user-email { display: none; }
    .app-main { padding: 16px; }
  }
`

export default AppShell
