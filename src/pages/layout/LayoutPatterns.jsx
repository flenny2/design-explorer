import { useState } from 'react'
import StepperControl from '../../components/StepperControl'
import CssDisplay from '../../components/CssDisplay'
import { layoutPatterns } from '../../data/layoutPatterns'

const areaColors = {
  header: '#6366f1',
  footer: '#6366f1',
  left: '#ec4899',
  right: '#f59e0b',
  main: '#14b8a6',
  sidebar: '#ec4899',
  content: '#14b8a6',
  hero: '#8b5cf6',
  feature: '#6366f1',
  side1: '#ec4899',
  side2: '#f59e0b',
  card1: '#6366f1',
  card2: '#ec4899',
  card3: '#14b8a6',
  card4: '#f59e0b',
  card5: '#8b5cf6',
  card6: '#ef4444',
}

export default function LayoutPatterns() {
  const [patternIndex, setPatternIndex] = useState(0)
  const pattern = layoutPatterns[patternIndex]

  return (
    <div className="section">
      <h2 className="section-title">Layout Patterns</h2>
      <div className="panel">
        <div style={{ maxWidth: '320px', marginBottom: '16px' }}>
          <StepperControl
            label="Pattern"
            value={patternIndex}
            onChange={(v) => setPatternIndex(Number(v))}
            options={layoutPatterns.map((p, i) => ({ value: i, label: p.name }))}
          />
        </div>
        <p style={{ color: 'var(--app-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
          {pattern.description}
        </p>
        <div
          style={{
            ...Object.fromEntries(
              Object.entries(pattern.css).map(([k, v]) => {
                const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
                return [camel, v]
              })
            ),
            border: '2px dashed var(--app-border)',
            borderRadius: 'var(--radius-md)',
            padding: '8px',
            background: 'var(--app-bg)',
          }}
        >
          {pattern.areas.map((area) => (
            <div
              key={area}
              className="layout-area-label"
              style={{
                gridArea: pattern.css['grid-template-areas'] ? area : undefined,
                background: areaColors[area] || '#6b7280',
              }}
            >
              {area}
            </div>
          ))}
        </div>
        <CssDisplay selector=".layout" styles={pattern.css} />
      </div>
    </div>
  )
}
