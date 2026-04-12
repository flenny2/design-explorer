export default function ThemePreview({ theme, compact = false }) {
  const vars = theme.variables
  const isGlass = vars['--ds-backdrop']
  const bgIsGradient = vars['--ds-bg']?.includes('gradient')

  const containerStyle = {
    background: vars['--ds-bg'],
    padding: compact ? '20px' : '32px',
    borderRadius: 'var(--radius-lg)',
    fontFamily: vars['--ds-font'],
    color: vars['--ds-text'],
    minHeight: compact ? '200px' : '280px',
  }

  const surfaceStyle = {
    background: vars['--ds-surface'],
    border: `1px solid ${vars['--ds-border']}`,
    borderRadius: vars['--ds-radius'],
    padding: compact ? '16px' : '24px',
    boxShadow: vars['--ds-shadow'],
    transition: vars['--ds-transition'],
    ...(isGlass ? { backdropFilter: vars['--ds-backdrop'], WebkitBackdropFilter: vars['--ds-backdrop'] } : {}),
    marginBottom: compact ? '12px' : '20px',
  }

  const buttonStyle = {
    background: vars['--ds-primary'],
    color: vars['--ds-primary-text'],
    border: vars['--ds-border'] !== 'transparent' ? `2px solid ${vars['--ds-primary']}` : 'none',
    borderRadius: vars['--ds-radius'],
    padding: '8px 20px',
    fontSize: '0.85rem',
    fontWeight: 600,
    fontFamily: vars['--ds-font'],
    cursor: 'pointer',
    transition: vars['--ds-transition'],
    boxShadow: vars['--ds-shadow'] !== 'none' ? vars['--ds-shadow'] : undefined,
  }

  const secondaryBtnStyle = {
    background: 'transparent',
    color: vars['--ds-text'],
    border: `1px solid ${vars['--ds-border']}`,
    borderRadius: vars['--ds-radius'],
    padding: '8px 20px',
    fontSize: '0.85rem',
    fontWeight: 500,
    fontFamily: vars['--ds-font'],
    cursor: 'pointer',
    transition: vars['--ds-transition'],
  }

  const inputStyle = {
    background: bgIsGradient ? 'rgba(255,255,255,0.1)' : vars['--ds-surface'],
    border: `1px solid ${vars['--ds-border']}`,
    borderRadius: vars['--ds-radius'],
    padding: '8px 12px',
    fontSize: '0.85rem',
    color: vars['--ds-text'],
    fontFamily: vars['--ds-font'],
    outline: 'none',
    width: compact ? '100%' : '240px',
    ...(isGlass ? { backdropFilter: 'blur(8px)' } : {}),
  }

  return (
    <div style={containerStyle} className="theme-preview">
      <h2 style={{
        fontSize: compact ? '1.25rem' : '1.75rem',
        fontWeight: 700,
        marginBottom: '4px',
        letterSpacing: '-0.02em',
      }}>
        {compact ? theme.name : `${theme.name} Preview`}
      </h2>
      <p style={{
        color: vars['--ds-text-secondary'],
        fontSize: compact ? '0.8rem' : '0.9rem',
        marginBottom: compact ? '16px' : '24px',
        lineHeight: 1.6,
      }}>
        {compact
          ? 'A quick preview of this design system.'
          : 'This preview shows how a typical page would look using this design system\'s visual language.'
        }
      </p>

      <div style={surfaceStyle}>
        <h3 style={{ fontSize: compact ? '0.95rem' : '1.1rem', fontWeight: 600, marginBottom: '8px' }}>
          Surface Card
        </h3>
        <p style={{
          color: vars['--ds-text-secondary'],
          fontSize: compact ? '0.75rem' : '0.85rem',
          lineHeight: 1.6,
          marginBottom: '12px',
        }}>
          Cards sit on surfaces and use elevation, borders, or transparency to separate from the background.
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button style={buttonStyle}>Primary</button>
          <button style={secondaryBtnStyle}>Secondary</button>
        </div>
      </div>

      <input
        type="text"
        placeholder="Input field..."
        style={inputStyle}
        readOnly
      />
    </div>
  )
}
