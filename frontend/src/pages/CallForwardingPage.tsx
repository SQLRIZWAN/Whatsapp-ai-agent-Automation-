import React, { useEffect, useState } from 'react'
import * as configApi from '@services/api/configApi'

const CallForwardingPage: React.FC = () => {
  const [enabled, setEnabled] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [condition, setCondition] = useState('always')

  useEffect(() => {
    configApi.getConfig().then((res) => {
      setEnabled(!!res.data.data.callForwarding?.enabled)
      setPhoneNumber(res.data.data.callForwarding?.phoneNumber || '')
    }).catch(() => undefined)
  }, [])

  return (
    <div style={wrapper}>
      <div style={card}>
        <h1 style={title}>Call Forwarding</h1>
        <p style={subtitle}>Unknown ya busy flows ke liye forwarding rule yahan manage karein.</p>
        <label style={field}>
          <span>Enable forwarding</span>
          <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
        </label>
        <label style={field}>
          <span>Forward to number</span>
          <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={input} placeholder="+923..." />
        </label>
        <label style={field}>
          <span>Condition</span>
          <select value={condition} onChange={(e) => setCondition(e.target.value)} style={input}>
            <option value="always">Always</option>
            <option value="busy">Only when busy</option>
            <option value="unknown">Only unknown numbers</option>
          </select>
        </label>
        <button style={button} onClick={() => configApi.updateForwarding(enabled, phoneNumber)}>Save Forwarding</button>
      </div>
    </div>
  )
}

const wrapper = { display: 'grid' }
const card = { background: '#fff', borderRadius: 24, padding: 28, boxShadow: '0 20px 40px rgba(15, 54, 46, 0.08)', gap: 16, display: 'grid' }
const title = { margin: 0, color: '#123d35' }
const subtitle = { margin: 0, color: '#537067' }
const field = { display: 'grid', gap: 8, color: '#24463f' }
const input = { padding: '12px 14px', borderRadius: 14, border: '1px solid #c9ddd4' }
const button = { background: '#123d35', color: '#fff', border: 'none', padding: '12px 16px', borderRadius: 999, cursor: 'pointer' }

export default CallForwardingPage
