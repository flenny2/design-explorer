import { useState } from 'react'
import { namedPalettes } from '../../data/palettes'
import SampleCard from '../../components/SampleCard'
import SideBySide from '../../components/SideBySide'

const categories = ['all', 'warm', 'cool', 'earth', 'pastel', 'neon', 'mono', 'neutral', 'brand', 'retro']

export default function NamedPalettes() {
  const [filter, setFilter] = useState('all')
  const [compareA, setCompareA] = useState(0)
  const [compareB, setCompareB] = useState(3)

  const filtered = filter === 'all'
    ? namedPalettes
    : namedPalettes.filter((p) => p.category === filter)

  const paletteToCardStyle = (palette) => ({
    '--card-accent': palette.colors[0],
    '--card-bg': palette.colors[4],
    '--card-text': palette.colors[0],
    '--card-text-muted': palette.colors[1],
    '--card-border': palette.colors[3],
    '--card-bg-hover': palette.colors[3],
  })

  return (
    <div className="section">
      <h2 className="section-title">Named Palettes</h2>
      <div className="panel">
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                border: '1px solid var(--app-border)',
                background: filter === cat ? 'var(--app-accent)' : 'var(--app-surface)',
                color: filter === cat ? 'white' : 'var(--app-text)',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 500,
                fontFamily: 'var(--font-sans)',
                textTransform: 'capitalize',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {filtered.map((palette) => (
            <div key={palette.name}>
              <div className="palette-strip" style={{ height: '48px', marginBottom: '8px' }}>
                {palette.colors.map((color, ci) => (
                  <div
                    key={ci}
                    className="palette-strip-color"
                    style={{ background: color }}
                  >
                    <span>{color}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>{palette.name}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--app-text-muted)', textTransform: 'capitalize' }}>{palette.category}</div>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px' }}>Compare on a Card</h3>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
          <label className="control-group" style={{ flex: 1 }}>
            <span className="control-label">Left</span>
            <select
              className="control-select"
              value={compareA}
              onChange={(e) => setCompareA(Number(e.target.value))}
            >
              {namedPalettes.map((p, i) => (
                <option key={i} value={i}>{p.name}</option>
              ))}
            </select>
          </label>
          <label className="control-group" style={{ flex: 1 }}>
            <span className="control-label">Right</span>
            <select
              className="control-select"
              value={compareB}
              onChange={(e) => setCompareB(Number(e.target.value))}
            >
              {namedPalettes.map((p, i) => (
                <option key={i} value={i}>{p.name}</option>
              ))}
            </select>
          </label>
        </div>
        <SideBySide
          leftLabel={namedPalettes[compareA].name}
          rightLabel={namedPalettes[compareB].name}
          left={<SampleCard style={paletteToCardStyle(namedPalettes[compareA])} />}
          right={<SampleCard style={paletteToCardStyle(namedPalettes[compareB])} />}
        />
      </div>
    </div>
  )
}
