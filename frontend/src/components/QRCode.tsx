import React from 'react'

interface QRCodeProps {
  qrCode: string | null
  secondsRemaining?: number
}

const QRCode: React.FC<QRCodeProps> = ({ qrCode, secondsRemaining }) => {
  if (!qrCode) {
    return (
      <div style={styles.placeholder}>
        <div style={styles.placeholderTitle}>QR unavailable</div>
        <div style={styles.placeholderText}>Connect press karke fresh QR generate karein.</div>
      </div>
    )
  }

  return (
    <div style={styles.wrapper}>
      <img src={qrCode} alt="WhatsApp QR code" style={styles.image} />
      <div style={styles.caption}>
        {typeof secondsRemaining === 'number'
          ? `Refresh in ${Math.max(0, secondsRemaining)}s`
          : 'Scan this QR from Linked Devices'}
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: 'grid',
    gap: 12,
    justifyItems: 'center',
  },
  image: {
    width: 260,
    height: 260,
    borderRadius: 16,
    border: '4px solid #d4e8db',
    background: '#fff',
    padding: 12,
  },
  caption: {
    color: '#48635a',
    fontSize: 13,
  },
  placeholder: {
    minHeight: 260,
    display: 'grid',
    placeItems: 'center',
    borderRadius: 16,
    background: '#edf4ef',
    color: '#48635a',
    padding: 24,
  },
  placeholderTitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  placeholderText: {
    fontSize: 13,
  },
}

export default QRCode
