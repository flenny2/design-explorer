import { useState } from 'react'
import StepperControl from '../../components/StepperControl'
import { typeScale, fontFamilies } from '../../data/fonts'

export default function TypeScale() {
  const [fontFamily, setFontFamily] = useState(fontFamilies[0].value)

  return (
    <div className="section">
      <h2 className="section-title">Type Scale</h2>
      <div className="panel">
        <div style={{ marginBottom: '24px', maxWidth: '320px' }}>
          <StepperControl
            label="Font Family"
            value={fontFamily}
            onChange={setFontFamily}
            options={fontFamilies}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {typeScale.map((level) => (
            <div
              key={level.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 100px 1fr',
                alignItems: 'baseline',
                padding: '12px 0',
                borderBottom: '1px solid var(--app-border)',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--app-text)' }}>
                  {level.name}
                </span>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--app-text-muted)' }}>
                  {level.size} / {level.weight}
                </span>
              </div>
              <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--app-text-muted)' }}>
                LH {level.lineHeight} &middot; LS {level.letterSpacing}
              </div>
              <div
                style={{
                  fontFamily,
                  fontSize: level.size,
                  fontWeight: level.weight,
                  lineHeight: level.lineHeight,
                  letterSpacing: level.letterSpacing,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {level.name === 'Overline' ? 'OVERLINE TEXT' : 'Almost before we knew it, we had left the ground.'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
