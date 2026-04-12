import { useState } from 'react'
import { getContrastRatio } from '../../utils/color'

export default function ContrastChecker() {
  const [fg, setFg] = useState('#1a1a2e')
  const [bg, setBg] = useState('#ffffff')

  const ratio = getContrastRatio(fg, bg)
  const ratioFixed = ratio.toFixed(2)

  const aaLarge = ratio >= 3      // WCAG AA Large Text: 3:1
  const aaNormal = ratio >= 4.5   // WCAG AA Normal Text: 4.5:1
  const aaaLarge = ratio >= 4.5   // WCAG AAA Large Text: 4.5:1
  const aaaNormal = ratio >= 7    // WCAG AAA Normal Text: 7:1

  const Pass = () => <span style={{ color: '#22c55e', fontWeight: 600 }}>Pass</span>
  const Fail = () => <span style={{ color: '#ef4444', fontWeight: 600 }}>Fail</span>

  return (
    <div className="section">
      <h2 className="section-title">Contrast Checker</h2>
      <div className="panel">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
          <label className="control-group">
            <span className="control-label">Foreground (text)</span>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input
                type="color"
                value={fg}
                onChange={(e) => setFg(e.target.value)}
                style={{ width: '40px', height: '32px', border: 'none', cursor: 'pointer' }}
              />
              <input
                type="text"
                value={fg}
                onChange={(e) => setFg(e.target.value)}
                className="control-select"
                style={{ flex: 1, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
              />
            </div>
          </label>
          <label className="control-group">
            <span className="control-label">Background</span>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input
                type="color"
                value={bg}
                onChange={(e) => setBg(e.target.value)}
                style={{ width: '40px', height: '32px', border: 'none', cursor: 'pointer' }}
              />
              <input
                type="text"
                value={bg}
                onChange={(e) => setBg(e.target.value)}
                className="control-select"
                style={{ flex: 1, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
              />
            </div>
          </label>
        </div>

        <div
          style={{
            background: bg,
            color: fg,
            padding: '32px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--app-border)',
            marginBottom: '24px',
          }}
        >
          <p style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>
            Large Text Preview (24px bold)
          </p>
          <p style={{ fontSize: '1rem' }}>
            Normal text preview (16px). The quick brown fox jumps over the lazy dog.
            Good contrast makes text readable for everyone, including people with visual impairments.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
              {ratioFixed}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--app-text-muted)' }}>Contrast Ratio</div>
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px',
              }}
            >
              <div style={{ background: 'var(--app-bg)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--app-text-muted)', marginBottom: '4px' }}>
                  AA Normal (4.5:1)
                </div>
                {aaNormal ? <Pass /> : <Fail />}
              </div>
              <div style={{ background: 'var(--app-bg)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--app-text-muted)', marginBottom: '4px' }}>
                  AA Large (3:1)
                </div>
                {aaLarge ? <Pass /> : <Fail />}
              </div>
              <div style={{ background: 'var(--app-bg)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--app-text-muted)', marginBottom: '4px' }}>
                  AAA Normal (7:1)
                </div>
                {aaaNormal ? <Pass /> : <Fail />}
              </div>
              <div style={{ background: 'var(--app-bg)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--app-text-muted)', marginBottom: '4px' }}>
                  AAA Large (4.5:1)
                </div>
                {aaaLarge ? <Pass /> : <Fail />}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => { setFg(bg); setBg(fg) }}
          style={{
            padding: '8px 16px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--app-border)',
            background: 'var(--app-surface)',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Swap Colors
        </button>
      </div>
    </div>
  )
}
