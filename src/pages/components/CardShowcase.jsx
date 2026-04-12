import { useState } from 'react'
import SliderControl from '../../components/SliderControl'
import CssDisplay from '../../components/CssDisplay'

const cardVariants = [
  {
    name: 'Minimal',
    description: 'Just a border and background. Clean, no frills.',
    bgContext: '#ffffff',
    getStyle: (c) => ({
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: `${c.radius}px`,
      padding: `${c.padding}px`,
    }),
    css: (c) => ({
      'background': '#ffffff',
      'border': '1px solid #d1d5db',
      'border-radius': `${c.radius}px`,
    }),
  },
  {
    name: 'Shadowed',
    description: 'No visible border — the shadow defines the edge. Classic Material-style elevation.',
    bgContext: '#f0f0f0',
    getStyle: (c) => ({
      background: '#ffffff',
      border: 'none',
      borderRadius: `${c.radius}px`,
      padding: `${c.padding}px`,
      boxShadow: `0 ${c.shadowBlur}px ${c.shadowBlur * 2}px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)`,
    }),
    css: (c) => ({
      'background': '#ffffff',
      'border': 'none',
      'border-radius': `${c.radius}px`,
      'box-shadow': `0 ${c.shadowBlur}px ${c.shadowBlur * 2}px rgba(0,0,0,0.1)`,
    }),
  },
  {
    name: 'Bordered',
    description: 'Thick colored border as the primary visual accent. Border does the heavy lifting.',
    bgContext: '#ffffff',
    getStyle: (c) => ({
      background: '#ffffff',
      border: `2px solid ${c.accent}`,
      borderLeft: `4px solid ${c.accent}`,
      borderRadius: `${c.radius}px`,
      padding: `${c.padding}px`,
    }),
    css: (c) => ({
      'background': '#ffffff',
      'border': `2px solid ${c.accent}`,
      'border-radius': `${c.radius}px`,
    }),
  },
  {
    name: 'Glassmorphic',
    description: 'Frosted glass — semi-transparent bg + backdrop-filter blur. Needs a colorful background behind it.',
    bgContext: 'linear-gradient(135deg, #667eea, #764ba2)',
    getStyle: (c) => ({
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      borderRadius: `${c.radius}px`,
      padding: `${c.padding}px`,
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
      color: '#ffffff',
    }),
    css: (c) => ({
      'background': 'rgba(255, 255, 255, 0.15)',
      'backdrop-filter': 'blur(16px)',
      'border': '1px solid rgba(255, 255, 255, 0.25)',
      'border-radius': `${c.radius}px`,
      'box-shadow': '0 8px 32px rgba(0, 0, 0, 0.15)',
    }),
  },
  {
    name: 'Neumorphic',
    description: 'Soft 3D extrusion — dual shadows (light + dark) on a matching background. Surface = background color.',
    bgContext: '#e0e5ec',
    getStyle: (c) => ({
      background: '#e0e5ec',
      border: 'none',
      borderRadius: `${c.radius}px`,
      padding: `${c.padding}px`,
      boxShadow: `${c.shadowBlur}px ${c.shadowBlur}px ${c.shadowBlur * 2}px #b8bec7, -${c.shadowBlur}px -${c.shadowBlur}px ${c.shadowBlur * 2}px #ffffff`,
    }),
    css: (c) => ({
      'background': '#e0e5ec',
      'border': 'none',
      'border-radius': `${c.radius}px`,
      'box-shadow': `${c.shadowBlur}px ${c.shadowBlur}px ${c.shadowBlur * 2}px #b8bec7, -${c.shadowBlur}px -${c.shadowBlur}px ${c.shadowBlur * 2}px #ffffff`,
    }),
  },
  {
    name: 'Elevated',
    description: 'Lifted off the page with a large diffused shadow and subtle upward shift. Feels clickable.',
    bgContext: '#f5f5f5',
    getStyle: (c) => ({
      background: '#ffffff',
      border: '1px solid #f0f0f0',
      borderRadius: `${c.radius}px`,
      padding: `${c.padding}px`,
      boxShadow: `0 ${c.shadowBlur * 2}px ${c.shadowBlur * 3}px -${c.shadowBlur}px rgba(0,0,0,0.15)`,
      transform: 'translateY(-4px)',
    }),
    css: (c) => ({
      'background': '#ffffff',
      'border': '1px solid #f0f0f0',
      'border-radius': `${c.radius}px`,
      'box-shadow': `0 ${c.shadowBlur * 2}px ${c.shadowBlur * 3}px rgba(0,0,0,0.15)`,
      'transform': 'translateY(-4px)',
    }),
  },
]

export default function CardShowcase() {
  const [radius, setRadius] = useState(12)
  const [padding, setPadding] = useState(24)
  const [shadowBlur, setShadowBlur] = useState(8)
  const [accent, setAccent] = useState('#6366f1')
  const [activeVariant, setActiveVariant] = useState(0)

  const config = { radius, padding, shadowBlur, accent }

  return (
    <div className="section">
      <h2 className="section-title">Cards</h2>
      <div className="panel">
        <div className="controls-preview-layout">
          <div className="controls">
            <SliderControl label="Border Radius" value={radius} onChange={setRadius} min={0} max={32} unit="px" />
            <SliderControl label="Padding" value={padding} onChange={setPadding} min={8} max={48} unit="px" />
            <SliderControl label="Shadow Blur" value={shadowBlur} onChange={setShadowBlur} min={0} max={32} unit="px" />
            <label className="control-group">
              <span className="control-label">Accent Color</span>
              <input
                type="color"
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                style={{ width: '100%', height: '32px', border: 'none', cursor: 'pointer' }}
              />
            </label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {cardVariants.map(({ name, description, bgContext, getStyle }, i) => {
              const isGlass = name === 'Glassmorphic'
              const textColor = isGlass ? 'rgba(255,255,255,0.7)' : '#6b7280'
              const titleColor = isGlass ? '#ffffff' : undefined
              return (
                <div key={name}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '12px',
                    marginBottom: '8px',
                  }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{name}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--app-text-muted)' }}>{description}</span>
                  </div>
                  <div
                    style={{
                      background: bgContext,
                      padding: '32px',
                      borderRadius: 'var(--radius-md)',
                      border: activeVariant === i ? `2px solid var(--app-accent)` : '1px solid var(--app-border)',
                      display: 'flex',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      outline: 'none',
                    }}
                    tabIndex={0}
                    role="button"
                    aria-pressed={activeVariant === i}
                    onClick={() => setActiveVariant(i)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveVariant(i) } }}
                  >
                    <div style={{ ...getStyle(config), maxWidth: '320px', width: '100%' }}>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '8px', color: titleColor }}>
                        {name} Card
                      </div>
                      <div style={{ fontSize: '0.8rem', color: textColor, lineHeight: 1.5 }}>
                        This card uses the {name.toLowerCase()} style. Click to see its CSS below.
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <CssDisplay
          selector=".card"
          styles={cardVariants[activeVariant].css(config)}
        />
      </div>
    </div>
  )
}
