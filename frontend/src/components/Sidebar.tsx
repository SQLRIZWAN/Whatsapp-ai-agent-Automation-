import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthStore } from '@store/authStore'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '🏠' },
  { to: '/connect', label: 'Connect', icon: '📱' },
  { to: '/messages', label: 'Messages', icon: '💬' },
  { to: '/calls', label: 'Calls', icon: '📞' },
  { to: '/ai-config', label: 'AI Config', icon: '🤖' },
  { to: '/call-forwarding', label: 'Forwarding', icon: '↗️' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
  { to: '/analytics', label: 'Analytics', icon: '📊' },
]

interface SidebarProps {
  connectionLabel: string
  connectionColor: string
  onLogout: () => Promise<void>
}

const Sidebar: React.FC<SidebarProps> = ({ connectionLabel, connectionColor, onLogout }) => {
  const { user } = useAuthStore()

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 28 }}>💉</span>
          <div>
            <div className="sidebar-title">SQL AI</div>
            <div className="sidebar-subtitle">WhatsApp Automation</div>
          </div>
        </div>
        <div className="sidebar-version">v2.0</div>
      </div>

      <div className="sidebar-status" style={{ borderColor: `${connectionColor}55`, color: connectionColor }}>
        <span
          className="sidebar-status-dot"
          style={{
            backgroundColor: connectionColor,
            boxShadow: connectionColor === '#25d366' ? `0 0 0 3px ${connectionColor}33` : 'none',
          }}
        />
        <span style={{ fontWeight: 700, fontSize: 12 }}>{connectionLabel}</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `sidebar-link${isActive ? ' is-active' : ''}`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-user">
        <div className="sidebar-user-avatar">
          {(user?.displayName || user?.email || 'U').charAt(0).toUpperCase()}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="sidebar-user-name">{user?.displayName || 'User'}</div>
          <div className="sidebar-user-email">{user?.email || ''}</div>
        </div>
        <button type="button" className="sidebar-logout-btn" onClick={onLogout} title="Sign out">
          🚪
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
