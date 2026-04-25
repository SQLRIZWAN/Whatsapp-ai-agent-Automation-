import React, { useEffect, useState } from 'react'
import axiosInstance from '@services/api/apiClient'
import type { ApiResponse, Call } from '@type/common.types'

const URGENCY_KEYWORDS = ['urgent', 'emergency', 'zaroori', 'jaldi', 'important']

const CallsPage: React.FC = () => {
  const [calls, setCalls] = useState<Call[]>([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    setErr(null)
    try {
      const res = await axiosInstance.get<ApiResponse<{ calls: Call[] }>>(
        '/api/whatsapp/calls?limit=200'
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

  const voiceCalls = calls.filter((c) => c.callType !== 'video').length
  const videoCalls = calls.filter((c) => c.callType === 'video').length

  return (
    <div>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0, color: '#0e3b35' }}>📞 Calls</h1>
        <p style={{ margin: '6px 0 0', color: '#666' }}>
          Bot incoming calls reject karke turant AI voice note bhejta hai.
        </p>
      </header>

      {/* Summary stats */}
      <div style={statsRow}>
        <div style={statBox}>
          <div style={{ fontSize: 26 }}>📞</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#0e3b35' }}>{voiceCalls}</div>
          <div style={{ fontSize: 12, color: '#888' }}>Voice Calls</div>
        </div>
        <div style={statBox}>
          <div style={{ fontSize: 26 }}>📹</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#0e3b35' }}>{videoCalls}</div>
          <div style={{ fontSize: 12, color: '#888' }}>Video Calls</div>
        </div>
        <div style={statBox}>
          <div style={{ fontSize: 26 }}>🔢</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#0e3b35' }}>{calls.length}</div>
          <div style={{ fontSize: 12, color: '#888' }}>Total</div>
        </div>
      </div>

      <div style={card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <strong style={{ color: '#333' }}>{calls.length} call records</strong>
          <button onClick={load} style={refreshBtn}>🔄 Refresh</button>
        </div>

        {err && <div style={errorBox}>{err}</div>}
        {loading && <p style={{ color: '#666' }}>Loading…</p>}

        {!loading && calls.length === 0 && !err && (
          <p style={{ color: '#666', textAlign: 'center', padding: '50px 0' }}>
            Abhi tak koi call record nahi. Koi call karega to yahan dikhega.
          </p>
        )}

        {calls.length > 0 && (
          <div style={{ overflowX: 'auto' }}>
            <table style={tbl}>
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th style={th}>Type</th>
                  <th style={th}>From</th>
                  <th style={th}>Status</th>
                  <th style={th}>AI Responded</th>
                  <th style={th}>Forwarded To</th>
                  <th style={th}>When</th>
                </tr>
              </thead>
              <tbody>
                {calls.map((c) => {
                  const isVideo = c.callType === 'video'
                  const aiDecision = (c as any).aiDecision
                  const isUrgent = aiDecision?.reason
                    ? URGENCY_KEYWORDS.some((k) => aiDecision.reason.toLowerCase().includes(k))
                    : false

                  return (
                    <tr key={c.callId || `${c.timestamp}-${c.from}`} style={{ borderBottom: '1px solid #f0f0f0' }}>
                      <td style={td}>
                        <span style={typeBadge(isVideo)}>
                          {isVideo ? '📹 Video' : '📞 Voice'}
                        </span>
                      </td>
                      <td style={{ ...td, fontFamily: 'monospace', fontSize: 13 }}>
                        {c.from.replace('@s.whatsapp.net', '')}
                      </td>
                      <td style={td}>
                        <span style={statusBadge(c.status)}>
                          {c.status === 'declined' ? '🚫 Declined' : c.status}
                        </span>
                      </td>
                      <td style={td}>
                        {aiDecision ? (
                          <div>
                            <span style={aiBadge}>✅ AI Reply Sent</span>
                            {isUrgent && (
                              <div style={{ marginTop: 4 }}>
                                <span style={urgentBadge}>🚨 Urgent</span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <span style={{ color: '#999', fontSize: 12 }}>—</span>
                        )}
                      </td>
                      <td style={td}>
                        {c.forwardedTo ? (
                          <span style={{ fontFamily: 'monospace', fontSize: 13 }}>{c.forwardedTo}</span>
                        ) : '—'}
                      </td>
                      <td style={{ ...td, color: '#666', fontSize: 12, whiteSpace: 'nowrap' }}>
                        {formatTs(c.timestamp)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

const statsRow: React.CSSProperties = {
  display: 'flex',
  gap: 14,
  marginBottom: 20,
  flexWrap: 'wrap',
}
const statBox: React.CSSProperties = {
  background: 'white',
  padding: '14px 20px',
  borderRadius: 8,
  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 3,
  minWidth: 100,
}
const card: React.CSSProperties = {
  background: 'white',
  padding: 22,
  borderRadius: 8,
  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
}
const refreshBtn: React.CSSProperties = {
  padding: '7px 14px',
  background: '#0e3b35',
  color: 'white',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 13,
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
  padding: '10px 12px',
  borderBottom: '2px solid #e5e7eb',
  color: '#555',
  fontWeight: 600,
  fontSize: 13,
}
const td: React.CSSProperties = {
  padding: '12px',
  color: '#222',
  verticalAlign: 'middle',
}
const typeBadge = (isVideo: boolean): React.CSSProperties => ({
  display: 'inline-block',
  padding: '3px 8px',
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 600,
  background: isVideo ? '#ede9fe' : '#e0f2fe',
  color: isVideo ? '#6d28d9' : '#0369a1',
})
const statusBadge = (status: string): React.CSSProperties => ({
  display: 'inline-block',
  padding: '3px 8px',
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 600,
  background: status === 'declined' ? '#fee2e2' : '#dcfce7',
  color: status === 'declined' ? '#991b1b' : '#166534',
})
const aiBadge: React.CSSProperties = {
  display: 'inline-block',
  padding: '3px 8px',
  borderRadius: 999,
  fontSize: 11,
  fontWeight: 600,
  background: '#dcfce7',
  color: '#166534',
}
const urgentBadge: React.CSSProperties = {
  display: 'inline-block',
  padding: '2px 7px',
  borderRadius: 999,
  fontSize: 11,
  fontWeight: 600,
  background: '#fef3c7',
  color: '#92400e',
}

function formatTs(ts: any): string {
  if (!ts) return '—'
  const n = typeof ts === 'number' ? ts : Date.parse(String(ts))
  if (isNaN(n)) return String(ts)
  return new Date(n).toLocaleString()
}

export default CallsPage
