import React, { useEffect, useState } from 'react'
import QRCode from '@components/QRCode'
import * as whatsappApi from '@services/api/whatsappApi'
import { useWhatsappStore } from '@store/whatsappStore'

const ConnectPage: React.FC = () => {
  const { status, qrCode, phone, fetchStatus, fetchQR } = useWhatsappStore()
  const [secondsRemaining, setSecondsRemaining] = useState(30)

  useEffect(() => {
    fetchStatus().catch(() => undefined)
    fetchQR().catch(() => undefined)
  }, [fetchQR, fetchStatus])

  useEffect(() => {
    const refresh = window.setInterval(() => {
      fetchQR().catch(() => undefined)
      setSecondsRemaining(30)
    }, 30000)
    const timer = window.setInterval(() => {
      setSecondsRemaining((value) => (value <= 1 ? 30 : value - 1))
    }, 1000)
    return () => {
      window.clearInterval(refresh)
      window.clearInterval(timer)
    }
  }, [fetchQR])

  return (
    <div style={page}>
      <div style={card}>
        <h1 style={title}>WhatsApp Connect</h1>
        <p style={subtitle}>Backend Render par run karega, yahan se QR scan karke pair karein.</p>
        <QRCode qrCode={qrCode} secondsRemaining={status === 'qr' ? secondsRemaining : undefined} />
        <div style={statusBox}>Status: {status}{phone ? ` • ${phone}` : ''}</div>
        <div style={actions}>
          <button style={buttonPrimary} onClick={() => whatsappApi.connect().then(() => fetchQR())}>Generate QR</button>
          <button style={buttonSecondary} onClick={() => whatsappApi.disconnect().then(() => fetchStatus())}>Disconnect</button>
        </div>
      </div>
    </div>
  )
}

const page: React.CSSProperties = { display: 'grid', gap: 24 }
const card: React.CSSProperties = { background: '#fff', borderRadius: 24, padding: 28, boxShadow: '0 20px 40px rgba(15, 54, 46, 0.08)' }
const title: React.CSSProperties = { margin: 0, color: '#123d35' }
const subtitle: React.CSSProperties = { color: '#537067' }
const statusBox: React.CSSProperties = { padding: 14, borderRadius: 16, background: '#eef5f1', color: '#24463f' }
const actions: React.CSSProperties = { display: 'flex', gap: 12, flexWrap: 'wrap' }
const buttonPrimary: React.CSSProperties = { background: '#123d35', color: '#fff', border: 'none', padding: '12px 18px', borderRadius: 999, cursor: 'pointer' }
const buttonSecondary: React.CSSProperties = { background: '#fff', color: '#123d35', border: '1px solid #c9ddd4', padding: '12px 18px', borderRadius: 999, cursor: 'pointer' }

export default ConnectPage
