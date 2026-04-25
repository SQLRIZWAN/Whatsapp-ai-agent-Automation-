import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '@store/authStore'
import './styles/globals.css'

// Lazy load pages for code splitting
const LoginPage = React.lazy(() => import('@pages/LoginPage'))
const RegisterPage = React.lazy(() => import('@pages/RegisterPage'))
const DashboardPage = React.lazy(() => import('@pages/DashboardPage'))
const SettingsPage = React.lazy(() => import('@pages/SettingsPage'))
const MessagesPage = React.lazy(() => import('@pages/MessagesPage'))
const CallsPage = React.lazy(() => import('@pages/CallsPage'))
const AppShell = React.lazy(() => import('./components/AppShell'))

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
    if (token) {
      // session restore hook (no-op for now)
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
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />

          {/* All authenticated app pages share the multi-tab AppShell layout */}
          <Route
            element={
              <PrivateRoute>
                <AppShell />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/calls" element={<CallsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>

          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}

export default App
