import { useState } from 'react'
import { colorWheelHues, colorRelationships, expertInsights } from '../../data/colorScience'
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

export default function ColorWheelSection() {
  const [relIndex, setRelIndex] = useState(0)
  const relationship = colorRelationships[relIndex]

  return (
    <div className="section">
      <h2 className="section-title">The Color Wheel</h2>
      <div className="panel">
        {expertInsights.colorWheel.map((q, i) => (
          <Quote key={i} data={q} />
        ))}
        <p className="ct-intro">
          The 12-hue color wheel is the foundation of color theory. Colors are
          grouped into primary (red, yellow, blue), secondary (orange, green,
          violet), and tertiary. The relationship between colors on the wheel
          determines harmony.
        </p>

        <div style={{ marginBottom: '16px', maxWidth: '320px' }}>
          <StepperControl
            label="Relationship"
            value={relationship.name}
            onChange={(val) => {
              const idx = colorRelationships.findIndex((r) => r.name === val)
              if (idx >= 0) setRelIndex(idx)
            }}
            options={colorRelationships.map((r) => r.name)}
          />
        </div>

        <div className="ct-wheel-layout">
          <svg viewBox="0 0 220 220" className="ct-wheel-svg">
            {colorWheelHues.map((hue, i) => {
              const a = ((i * 30 - 90) * Math.PI) / 180
              const cx = 110 + 82 * Math.cos(a)
              const cy = 110 + 82 * Math.sin(a)
              const isActive = relationship.angles.includes(hue.angle)
              return (
                <g key={i}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActive ? 20 : 15}
                    fill={hue.hex}
                    stroke={isActive ? '#fff' : 'rgba(0,0,0,0.15)'}
                    strokeWidth={isActive ? 3 : 1}
                    style={{ transition: 'all 0.2s ease' }}
                  />
                  {isActive && (
                    <text
                      x={cx}
                      y={cy + 30}
                      textAnchor="middle"
                      fontSize="8"
                      fill="var(--app-text)"
                      fontFamily="var(--font-sans)"
                      fontWeight="500"
                    >
                      {hue.name}
                    </text>
                  )}
                </g>
              )
            })}
            {relationship.angles.length > 1 &&
              relationship.angles.map((angle, i) => {
                const next =
                  relationship.angles[(i + 1) % relationship.angles.length]
                const a1 = ((angle / 30) * 30 - 90) * (Math.PI / 180)
                const a2 = ((next / 30) * 30 - 90) * (Math.PI / 180)
                return (
                  <line
                    key={`${angle}-${next}`}
                    x1={110 + 82 * Math.cos(a1)}
                    y1={110 + 82 * Math.sin(a1)}
                    x2={110 + 82 * Math.cos(a2)}
                    y2={110 + 82 * Math.sin(a2)}
                    stroke="var(--app-accent)"
                    strokeWidth="1.5"
                    strokeDasharray="4,3"
                    opacity="0.5"
                  />
                )
              })}
          </svg>

          <div className="ct-wheel-info">
            <div className="ct-wheel-info-name">{relationship.name}</div>
            <p className="ct-wheel-info-desc">{relationship.description}</p>
            <p className="ct-wheel-info-usage">
              <strong>When to use:</strong> {relationship.usage}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
