import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '@store/authStore'
import './styles/globals.css'

// Lazy load pages for code splitting
const LoginPage = React.lazy(() => import('@pages/LoginPage'))
const DashboardPage = React.lazy(() => import('@pages/DashboardPage'))

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuthStore()

  if (isLoading) {
    return <div className="loading">Loading...</div>
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuthStore()

  return !isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" replace />
}

const App: React.FC = () => {
  const { token } = useAuthStore()

  useEffect(() => {
    // Check token on mount and restore session if needed
    if (token) {
      // Could fetch current user here if needed
    }
  }, [token])

  return (
    <Router>
      <React.Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}

export default App
