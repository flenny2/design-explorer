import { spacingScale } from '../../data/layoutPatterns'

export default function SpacingScale() {
  return (
    <div className="section">
      <h2 className="section-title">Spacing Scale</h2>
      <div className="panel">
        <p style={{ color: 'var(--app-text-muted)', fontSize: '0.9rem', marginBottom: '20px', maxWidth: '600px' }}>
          A consistent spacing scale creates rhythm and visual harmony. Most design systems use a base unit
          (typically 4px or 8px) and multiply it to create a predictable scale.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {spacingScale.map((step) => (
            <div
              key={step.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 50px 1fr',
                alignItems: 'center',
                gap: '12px',
                padding: '4px 0',
              }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>{step.name}</span>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--app-text-muted)' }}>
                {step.value}px
              </span>
              <div
                style={{
                  height: '24px',
                  width: `${step.value}px`,
                  background: 'var(--app-accent)',
                  borderRadius: '3px',
                  opacity: Math.min(1, 0.7 + (step.value / 500)),
                  maxWidth: '100%',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
