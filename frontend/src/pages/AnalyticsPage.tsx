import React from 'react'

const cards = [
  { label: 'Messages / 30d', value: 'Coming soon' },
  { label: 'AI Response Rate', value: 'Coming soon' },
  { label: 'Call Handling', value: 'Coming soon' },
]

const AnalyticsPage: React.FC = () => {
  return (
    <div style={page}>
      <div>
        <h1 style={{ margin: 0, color: '#123d35' }}>Analytics</h1>
        <p style={{ color: '#537067' }}>Future reporting tab already reserved for GitHub Pages deployment.</p>
      </div>
      <div style={grid}>
        {cards.map((card) => (
          <div key={card.label} style={tile}>
            <div style={{ color: '#537067' }}>{card.label}</div>
            <div style={{ fontSize: 24, color: '#123d35', fontWeight: 700 }}>{card.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const page = { display: 'grid', gap: 24 }
const grid = { display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }
const tile = { background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 20px 40px rgba(15, 54, 46, 0.08)' }

export default AnalyticsPage
