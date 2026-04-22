import React from 'react'
import { useAuthStore } from '@store/authStore'
import { useNavigate } from 'react-router-dom'

const DashboardPage: React.FC = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>WhatsApp AI Agent Dashboard</h1>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>

      <div style={styles.content}>
        <div style={styles.card}>
          <h2>Welcome</h2>
          <p>Email: {user?.email}</p>
          <p>Display Name: {user?.displayName}</p>
          <p>Status: {user?.status}</p>
        </div>

        <div style={styles.card}>
          <h3>Features Coming Soon</h3>
          <ul>
            <li>✅ Phase 1: Foundation - COMPLETED</li>
            <li>🔄 Phase 2: Authentication - IN PROGRESS</li>
            <li>⏳ Phase 3: WhatsApp Connection</li>
            <li>⏳ Phase 4: Message Processing</li>
            <li>⏳ Phase 5: Call Handling</li>
            <li>⏳ Phase 6: Configuration</li>
            <li>⏳ Phase 7: Real-time Updates</li>
            <li>⏳ Phase 8: Dashboard</li>
            <li>⏳ Phase 9: Testing & Security</li>
            <li>⏳ Phase 10: Deployment</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  },
  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px'
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  }
}

export default DashboardPage
