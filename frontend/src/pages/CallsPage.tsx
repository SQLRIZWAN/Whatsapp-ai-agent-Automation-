import React, { useEffect, useState } from 'react'
import axiosInstance from '@services/api/apiClient'
import type { ApiResponse, Call } from '@type/common.types'

const CallsPage: React.FC = () => {
  const [calls, setCalls] = useState<Call[]>([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    setErr(null)
    try {
      const res = await axiosInstance.get<ApiResponse<{ calls: Call[] }>>(
        '/api/whatsapp/calls?limit=100'
      )
      setCalls(res.data.data?.calls || [])
    } catch (e: any) {
      setErr(e?.response?.data?.message || 'Failed to load calls')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0, color: '#0e3b35' }}>📞 Calls</h1>
        <p style={{ margin: '6px 0 0', color: '#666' }}>
          Bot incoming calls reject karke turant voice note bhejta hai. Yahan history milegi.
        </p>
      </header>

      <div style={card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <strong>{calls.length} entries</strong>
          <button onClick={load} style={refreshBtn}>Refresh</button>
        </div>

        {err && <div style={errorBox}>{err}</div>}
        {loading && <p style={{ color: '#666' }}>Loading…</p>}

        {!loading && calls.length === 0 && !err && (
          <p style={{ color: '#666' }}>Abhi tak koi call record nahi.</p>
        )}

        {calls.length > 0 && (
          <table style={tbl}>
            <thead>
              <tr>
                <th style={th}>From</th>
                <th style={th}>Type</th>
                <th style={th}>Status</th>
                <th style={th}>Forwarded to</th>
                <th style={th}>When</th>
              </tr>
            </thead>
            <tbody>
              {calls.map((c) => (
                <tr key={c.callId || `${c.timestamp}-${c.from}`}>
                  <td style={td}>{c.from}</td>
                  <td style={td}>{c.callType}</td>
                  <td style={td}>{c.status}</td>
                  <td style={td}>{c.forwardedTo || '—'}</td>
                  <td style={td}>{formatTs(c.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

const card: React.CSSProperties = {
  background: 'white',
  padding: 22,
  borderRadius: 8,
  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
}
const refreshBtn: React.CSSProperties = {
  padding: '6px 12px',
  background: '#0e3b35',
  color: 'white',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
}
const errorBox: React.CSSProperties = {
  padding: 10,
  background: '#fee2e2',
  color: '#991b1b',
  borderRadius: 4,
  marginBottom: 10,
}
const tbl: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: 14,
}
const th: React.CSSProperties = {
  textAlign: 'left',
  padding: '8px 10px',
  borderBottom: '2px solid #e5e7eb',
  color: '#555',
}
const td: React.CSSProperties = {
  padding: '10px',
  borderBottom: '1px solid #eee',
  color: '#222',
}

function formatTs(ts: any): string {
  if (!ts) return '—'
  const n = typeof ts === 'number' ? ts : Date.parse(String(ts))
  if (isNaN(n)) return String(ts)
  return new Date(n).toLocaleString()
}

export default CallsPage
