import { useState } from 'react'
import StepperControl from '../../components/StepperControl'
import CssDisplay from '../../components/CssDisplay'
import { appTypes, vibes, generateBrief } from '../../data/advisorData'
import './DesignAdvisor.css'

export default function DesignAdvisor() {
  const [appTypeIndex, setAppTypeIndex] = useState(0)
  const [vibeIndex, setVibeIndex] = useState(0)

  const appType = appTypes[appTypeIndex]
  const vibe = vibes[vibeIndex]
  const brief = generateBrief(appType, vibe)

  return (
    <div>
      <div className="page-header">
        <h1>Design Advisor</h1>
        <p>
          Describe what you're building and the style you want. Get tailored
          design recommendations with reasoning — learn why certain choices work
          for certain contexts.
        </p>
      </div>

      {/* Step 1: App Type */}
      <div className="section">
        <h2 className="section-title">What are you building?</h2>
        <div className="panel">
          <div style={{ marginBottom: '20px' }}>
            <StepperControl
              label="App Type"
              value={appType.name}
              onChange={(val) => {
                const idx = appTypes.findIndex((a) => a.name === val)
                if (idx >= 0) setAppTypeIndex(idx)
              }}
              options={appTypes.map((a) => a.name)}
            />
          </div>
          <div className="advisor-description">
            <p className="advisor-desc-text">{appType.description}</p>
            <div className="advisor-meta">
              <div className="advisor-meta-item">
                <span className="advisor-meta-label">Recommended Layout</span>
                <span>{appType.layoutAdvice}</span>
              </div>
              <div className="advisor-meta-item">
                <span className="advisor-meta-label">Content Density</span>
                <span>{appType.density}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Vibe */}
      <div className="section">
        <h2 className="section-title">What's the vibe?</h2>
        <div className="panel">
          <div style={{ marginBottom: '20px' }}>
            <StepperControl
              label="Style"
              value={vibe.name}
              onChange={(val) => {
                const idx = vibes.findIndex((v) => v.name === val)
                if (idx >= 0) setVibeIndex(idx)
              }}
              options={vibes.map((v) => v.name)}
            />
          </div>
          <div className="advisor-description">
            <p className="advisor-desc-text">{vibe.description}</p>
          </div>
        </div>
      </div>

      {/* Step 3: Design Brief */}
      <div className="section">
        <h2 className="section-title">Your Design Brief</h2>
        <div className="panel">
          <p className="brief-summary">{brief.summary}</p>

          <div className="brief-grid">
            {/* Color Recommendation */}
            <div className="brief-card">
              <h3 className="brief-card-title">Color Palette</h3>
              <div className="brief-palette-strip">
                {brief.palette.colors.map((color, i) => (
                  <div
                    key={i}
                    className="brief-palette-swatch"
                    style={{ background: color }}
                  >
                    <span className="brief-palette-hex">{color}</span>
                  </div>
                ))}
              </div>
              <div className="brief-card-name">{brief.palette.name}</div>
              <p className="brief-card-reason">{brief.palette.appContext}</p>
            </div>

            {/* Typography Recommendation */}
            <div className="brief-card">
              <h3 className="brief-card-title">Typography</h3>
              <div className="brief-font-preview">
                <div
                  className="brief-font-heading-sample"
                  style={{ fontFamily: brief.typography.heading }}
                >
                  {brief.typography.headingName}
                </div>
                <div
                  className="brief-font-body-sample"
                  style={{ fontFamily: brief.typography.body }}
                >
                  Body text in {brief.typography.bodyName}. The quick brown fox
                  jumps over the lazy dog.
                </div>
              </div>
              <div className="brief-card-name">
                {brief.typography.headingName} + {brief.typography.bodyName}
              </div>
              <p className="brief-card-reason">{brief.typography.appContext}</p>
            </div>

            {/* Layout Recommendation */}
            <div className="brief-card">
              <h3 className="brief-card-title">Layout</h3>
              <div className="brief-layout-info">
                <div className="brief-layout-name">
                  {brief.layout.recommendation}
                </div>
                <p className="brief-card-reason">{brief.layout.reason}</p>
              </div>
              <div className="brief-density">
                <span className="advisor-meta-label">Content Density</span>
                <span>{brief.density.level}</span>
              </div>
              <p className="brief-card-reason brief-card-reason--small">
                {brief.density.reason}
              </p>
            </div>

            {/* Component Style Recommendation */}
            <div className="brief-card">
              <h3 className="brief-card-title">Component Style</h3>
              <div className="brief-component-props">
                <div className="brief-prop">
                  <span className="brief-prop-label">border-radius</span>
                  <span className="brief-prop-value">
                    {brief.components.radius}
                  </span>
                </div>
                <div className="brief-prop">
                  <span className="brief-prop-label">box-shadow</span>
                  <span className="brief-prop-value">
                    {brief.components.shadow}
                  </span>
                </div>
              </div>
              <p className="brief-card-reason">
                {brief.components.radiusReason}
              </p>
              <div className="brief-components-list">
                <span className="advisor-meta-label">Key Components</span>
                <div className="brief-tags">
                  {brief.components.list.map((c) => (
                    <span key={c} className="brief-tag">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <h3
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              marginTop: '32px',
              marginBottom: '16px',
            }}
          >
            Live Preview
          </h3>
          <div
            className="brief-preview"
            style={{
              background: brief.cssVariables['--brief-bg'],
              color: brief.cssVariables['--brief-text'],
              fontFamily: brief.cssVariables['--brief-font-body'],
            }}
          >
            <div
              className="brief-preview-surface"
              style={{
                background: brief.cssVariables['--brief-surface'],
                borderRadius: brief.cssVariables['--brief-radius'],
                boxShadow: brief.cssVariables['--brief-shadow'],
                border: `1px solid ${brief.cssVariables['--brief-border']}`,
                color: brief.cssVariables['--brief-text'],
              }}
            >
              <h3
                style={{
                  fontFamily: brief.cssVariables['--brief-font-heading'],
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '8px',
                  letterSpacing: '-0.02em',
                }}
              >
                {appType.name}
              </h3>
              <p
                style={{
                  color: brief.cssVariables['--brief-text-muted'],
                  marginBottom: '20px',
                  lineHeight: 1.6,
                  fontSize: '0.95rem',
                }}
              >
                This is what your interface could look like with these
                recommendations applied. The {vibe.name.toLowerCase()} style
                creates the right feel for a {appType.name.toLowerCase()}.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  className="brief-preview-btn"
                  style={{
                    background: brief.cssVariables['--brief-primary'],
                    color: brief.cssVariables['--brief-primary-text'],
                    borderRadius: brief.cssVariables['--brief-radius'],
                    border: 'none',
                    padding: '10px 24px',
                    fontFamily: brief.cssVariables['--brief-font-body'],
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: brief.cssVariables['--brief-transition'],
                  }}
                >
                  Primary Action
                </button>
                <button
                  className="brief-preview-btn"
                  style={{
                    background: 'transparent',
                    color: brief.cssVariables['--brief-text'],
                    borderRadius: brief.cssVariables['--brief-radius'],
                    border: `1px solid ${brief.cssVariables['--brief-border']}`,
                    padding: '10px 24px',
                    fontFamily: brief.cssVariables['--brief-font-body'],
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: brief.cssVariables['--brief-transition'],
                  }}
                >
                  Secondary
                </button>
              </div>
              <div
                style={{
                  marginTop: '20px',
                  padding: '12px 16px',
                  border: `1px solid ${brief.cssVariables['--brief-border']}`,
                  borderRadius: brief.cssVariables['--brief-radius'],
                  fontSize: '0.85rem',
                  color: brief.cssVariables['--brief-text-muted'],
                }}
              >
                <span style={{ fontFamily: brief.cssVariables['--brief-font-body'] }}>
                  Sample input field placeholder...
                </span>
              </div>
            </div>
          </div>

          <CssDisplay
            raw={[
              `/* ${vibe.name} ${appType.name} */`,
              `:root {`,
              ...Object.entries(brief.cssVariables).map(
                ([key, val]) => `  ${key}: ${val};`
              ),
              `}`,
              '',
              `.heading {`,
              `  font-family: ${brief.typography.heading};`,
              `  font-weight: 700;`,
              `  letter-spacing: -0.02em;`,
              `}`,
              '',
              `.body {`,
              `  font-family: ${brief.typography.body};`,
              `  line-height: 1.6;`,
              `}`,
              '',
              `.card {`,
              `  background: ${brief.cssVariables['--brief-surface']};`,
              `  border: 1px solid ${brief.cssVariables['--brief-border']};`,
              `  border-radius: ${brief.components.radius};`,
              `  box-shadow: ${brief.components.shadow};`,
              `}`,
              '',
              `.btn-primary {`,
              `  background: ${brief.cssVariables['--brief-primary']};`,
              `  color: ${brief.cssVariables['--brief-primary-text']};`,
              `  border-radius: ${brief.components.radius};`,
              `  transition: ${brief.cssVariables['--brief-transition']};`,
              `}`,
            ].join('\n')}
          />
        </div>
      </div>
    </div>
  )
}
