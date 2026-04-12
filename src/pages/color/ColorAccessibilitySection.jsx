import { useState } from 'react'
import { colorBlindness, perceptualFacts, expertInsights } from '../../data/colorScience'
import { hexToRgb, rgbToHex } from '../../utils/color'
import StepperControl from '../../components/StepperControl'

function Quote({ data }) {
  return (
    <blockquote className="ct-quote">
      <p className="ct-quote-text">"{data.quote}"</p>
      <footer>
        <span className="ct-quote-author">{data.author}</span>
        {' '}<span className="ct-quote-meta">
          — {data.credential}{data.source ? `, ${data.source}` : ''}
        </span>
      </footer>
    </blockquote>
  )
}

function simulateCB(hex, matrix) {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  const r = Math.round(
    Math.min(255, Math.max(0, matrix[0] * rgb.r + matrix[1] * rgb.g + matrix[2] * rgb.b))
  )
  const g = Math.round(
    Math.min(255, Math.max(0, matrix[3] * rgb.r + matrix[4] * rgb.g + matrix[5] * rgb.b))
  )
  const b = Math.round(
    Math.min(255, Math.max(0, matrix[6] * rgb.r + matrix[7] * rgb.g + matrix[8] * rgb.b))
  )
  return rgbToHex({ r, g, b })
}

const samplePalette = [
  '#e63946',
  '#457b9d',
  '#2a9d8f',
  '#e9c46a',
  '#264653',
  '#f4a261',
]

export default function ColorAccessibilitySection() {
  const [cbIndex, setCbIndex] = useState(0)
  const cbType = colorBlindness.types[cbIndex]

  return (
    <>
      {/* ── Color Blindness ──────────────────────────── */}
      <div className="section">
        <h2 className="section-title">Color Blindness</h2>
        <div className="panel">
          {expertInsights.accessibility.map((q, i) => (
            <Quote key={i} data={q} />
          ))}
          <p className="ct-intro">{colorBlindness.overview}</p>

          <div style={{ marginBottom: '16px', maxWidth: '320px' }}>
            <StepperControl
              label="Deficiency Type"
              value={cbType.name}
              onChange={(val) => {
                const idx = colorBlindness.types.findIndex(
                  (t) => t.name === val
                )
                if (idx >= 0) setCbIndex(idx)
              }}
              options={colorBlindness.types.map((t) => t.name)}
            />
          </div>

          <div className="ct-cb-info">
            <div className="ct-cb-prevalence">
              Affects {cbType.prevalence}
            </div>
            <p className="ct-meta-value">{cbType.description}</p>
            <p className="ct-psych-science" style={{ marginTop: '8px' }}>
              <strong>Commonly confused:</strong>{' '}
              {cbType.confusedPairs.join(', ')}
            </p>
          </div>

          <div className="ct-cb-comparison">
            <div>
              <div className="ct-cb-label">Normal Vision</div>
              <div className="ct-cb-palette">
                {samplePalette.map((color) => (
                  <div
                    key={color}
                    className="ct-cb-swatch"
                    style={{ background: color }}
                  >
                    <span>{color}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="ct-cb-label">{cbType.name}</div>
              <div className="ct-cb-palette">
                {samplePalette.map((color) => {
                  const simulated = simulateCB(color, cbType.matrix)
                  return (
                    <div
                      key={color}
                      className="ct-cb-swatch"
                      style={{ background: simulated }}
                    >
                      <span>{simulated}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div className="ct-cb-label">Color-Blind Safe Palette</div>
            <p className="ct-intro" style={{ marginBottom: '12px' }}>
              {colorBlindness.safePalette.description}
            </p>
            <div className="ct-cb-palette">
              {colorBlindness.safePalette.colors.map((color, i) => (
                <div
                  key={color}
                  className="ct-cb-swatch"
                  style={{ background: color }}
                >
                  <span>{colorBlindness.safePalette.names[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Perception & Illusions ────────────────────── */}
      <div className="section">
        <h2 className="section-title">Perception & Illusions</h2>
        <div className="panel">
          {expertInsights.perception.map((q, i) => (
            <Quote key={i} data={q} />
          ))}
          <p className="ct-intro">
            Color perception is not objective — your brain constantly adjusts
            what you see based on context, adaptation, and expectation. These
            effects matter for design.
          </p>

          <div className="ct-simultaneous-demo">
            <div className="ct-simultaneous-label">Simultaneous Contrast</div>
            <div className="ct-simultaneous-row">
              <div
                className="ct-simultaneous-bg"
                style={{ background: '#2e5f8a' }}
              >
                <div
                  className="ct-simultaneous-square"
                  style={{ background: '#808080' }}
                />
              </div>
              <div
                className="ct-simultaneous-bg"
                style={{ background: '#e07a5f' }}
              >
                <div
                  className="ct-simultaneous-square"
                  style={{ background: '#808080' }}
                />
              </div>
            </div>
            <p className="ct-simultaneous-caption">
              Both inner squares are identical #808080 gray. The one on blue
              looks warmer; the one on orange looks cooler.
            </p>
          </div>

          <div className="ct-facts-grid">
            {perceptualFacts.map((fact) => (
              <div key={fact.name} className="ct-fact-card">
                <h4 className="ct-fact-name">{fact.name}</h4>
                <p className="ct-fact-desc">{fact.description}</p>
                <p className="ct-fact-takeaway">
                  <strong>Design takeaway:</strong> {fact.takeaway}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
