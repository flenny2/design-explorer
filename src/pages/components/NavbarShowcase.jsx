const navVariants = [
  {
    name: 'Light Minimal',
    style: {
      background: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      color: '#1a1a2e',
    },
    linkColor: '#6b7280',
    activeColor: '#1a1a2e',
    accentColor: '#6366f1',
  },
  {
    name: 'Dark Solid',
    style: {
      background: '#1e1e2e',
      color: '#ffffff',
    },
    linkColor: '#a6adc8',
    activeColor: '#ffffff',
    accentColor: '#6366f1',
  },
  {
    name: 'Transparent Glass',
    style: {
      background: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
      color: '#1a1a2e',
    },
    linkColor: '#4b5563',
    activeColor: '#1a1a2e',
    accentColor: '#6366f1',
  },
  {
    name: 'Gradient',
    style: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: '#ffffff',
    },
    linkColor: 'rgba(255,255,255,0.8)',
    activeColor: '#ffffff',
    accentColor: '#fbbf24',
  },
]

export default function NavbarShowcase() {
  return (
    <div className="section">
      <h2 className="section-title">Navbars</h2>
      <div className="panel">
        <p style={{ color: 'var(--app-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
          Navigation bar variations showing different backgrounds, transparency, and color treatments.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {navVariants.map((variant) => (
            <div key={variant.name}>
              <div className="showcase-item-label" style={{ marginBottom: '8px' }}>{variant.name}</div>
              <div
                className="navbar-preview"
                style={{
                  ...variant.style,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>Logo</span>
                </div>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <span style={{ color: variant.activeColor, fontWeight: 500, fontSize: '0.9rem' }}>Home</span>
                  <span style={{ color: variant.linkColor, fontSize: '0.9rem' }}>About</span>
                  <span style={{ color: variant.linkColor, fontSize: '0.9rem' }}>Blog</span>
                  <span style={{ color: variant.linkColor, fontSize: '0.9rem' }}>Contact</span>
                  <span
                    style={{
                      background: variant.accentColor,
                      color: 'white',
                      padding: '6px 16px',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                    }}
                  >
                    Sign Up
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
