import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@store/authStore'
import { LoginCredentials } from '@type/common.types'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const { login, isLoading, error, clearError } = useAuthStore()
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    clearError()

    try {
      await login(credentials)
      navigate('/dashboard')
    } catch (err) {
      console.error('Authentication error:', err)
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>WhatsApp AI Agent</h1>
        <p style={styles.subtitle}>Powered by Gemini AI</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          {error && <div style={styles.error}>{error}</div>}

          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              required
              style={styles.input}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              ...styles.button,
              opacity: isLoading ? 0.6 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>

        <p style={styles.toggleText}>
          Don't have an account?{' '}
          <a href="/register" style={styles.link}>
            Register here
          </a>
        </p>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5'
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '10px',
    color: '#25d366',
    fontSize: '28px'
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: '30px',
    fontSize: '14px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333'
  },
  input: {
    padding: '10px 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px'
  },
  button: {
    padding: '12px',
    backgroundColor: '#25d366',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  error: {
    color: '#ff4444',
    fontSize: '14px',
    padding: '10px',
    backgroundColor: '#ffe6e6',
    borderRadius: '4px',
    marginBottom: '10px'
  },
  toggleText: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#666'
  },
  link: {
    color: '#25d366',
    textDecoration: 'none',
    fontWeight: '500'
  }
}

export default LoginPage
