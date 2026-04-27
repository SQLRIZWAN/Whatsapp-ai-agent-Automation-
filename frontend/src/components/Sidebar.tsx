import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthStore } from '@store/authStore'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '◫' },
  { to: '/connect', label: 'Connect', icon: '⌁' },
  { to: '/messages', label: 'Messages', icon: '☰' },
  { to: '/calls', label: 'Calls', icon: '◌' },
  { to: '/ai-config', label: 'AI Config', icon: '✦' },
  { to: '/call-forwarding', label: 'Forwarding', icon: '↗' },
  { to: '/settings', label: 'Settings', icon: '⚙' },
  { to: '/analytics', label: 'Analytics', icon: '▣' },
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
        <div className="sidebar-title">WhatsApp AI</div>
        <div className="sidebar-subtitle">Render backend + GitHub Pages frontend</div>
      </div>

      <div className="sidebar-status" style={{ borderColor: `${connectionColor}44`, color: connectionColor }}>
        <span className="sidebar-status-dot" style={{ backgroundColor: connectionColor }} />
        {connectionLabel}
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `sidebar-link${isActive ? ' is-active' : ''}`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-user">
        <div className="sidebar-user-name">{user?.displayName || 'User'}</div>
        <div className="sidebar-user-email">{user?.email || ''}</div>
        <button type="button" className="sidebar-logout" onClick={onLogout}>
          Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
