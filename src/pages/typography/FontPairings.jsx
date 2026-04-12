import { useState } from 'react'
import StepperControl from '../../components/StepperControl'
import SideBySide from '../../components/SideBySide'
import CssDisplay from '../../components/CssDisplay'
import { fontPairings } from '../../data/fonts'
import { formatCss } from '../../utils/css'

export default function FontPairings() {
  const [pairingIndex, setPairingIndex] = useState(0)
  const pairing = fontPairings[pairingIndex]

  const headingStyle = {
    fontFamily: pairing.heading,
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    marginBottom: '8px',
  }

  const bodyStyle = {
    fontFamily: pairing.body,
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.7,
  }

  const headingPreview = (
    <div>
      <p style={headingStyle}>Heading Text</p>
      <p style={{ ...headingStyle, fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px' }}>
        Subheading Text
      </p>
      <p style={bodyStyle}>
        Body text sits below the heading. A good pairing creates visual hierarchy
        while maintaining harmony between the two typefaces. The contrast should
        guide the reader's eye naturally from heading to content.
      </p>
    </div>
  )

  const rawCss = [
    formatCss('h1, h2', {
      'font-family': pairing.heading,
      'font-weight': 700,
      'letter-spacing': '-0.02em',
    }),
    formatCss('body, p', {
      'font-family': pairing.body,
      'font-weight': 400,
      'line-height': 1.7,
    }),
  ].join('\n\n')

  return (
    <div className="section">
      <h2 className="section-title">Font Pairings</h2>
      <div className="panel">
        <div style={{ marginBottom: '16px', maxWidth: '320px' }}>
          <StepperControl
            label="Pairing"
            value={pairingIndex}
            onChange={(v) => setPairingIndex(Number(v))}
            options={fontPairings.map((p, i) => ({ value: i, label: p.name }))}
          />
        </div>
        <p style={{ color: 'var(--app-text-muted)', fontSize: '0.9rem', marginBottom: '20px', maxWidth: '600px' }}>
          {pairing.description}
        </p>
        <SideBySide
          leftLabel={`Heading — ${pairing.heading.split("'")[1] || pairing.heading.split(',')[0]}`}
          rightLabel={`Body — ${pairing.body.split("'")[1] || pairing.body.split(',')[0]}`}
          left={
            <p style={{ ...headingStyle, fontSize: '1.75rem' }}>
              The quick brown fox jumps over the lazy dog
            </p>
          }
          right={
            <p style={bodyStyle}>
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
              How vexingly quick daft zebras jump. The five boxing wizards jump quickly.
            </p>
          }
        />
        <div style={{ marginTop: '20px' }}>
          {headingPreview}
        </div>
        <CssDisplay raw={rawCss} />
      </div>
    </div>
  )
}
