import { useState } from 'react'
import { colorPsychology, expertInsights } from '../../data/colorScience'
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

export default function ColorPsychologySection() {
  const [psychIndex, setPsychIndex] = useState(0)
  const psychColor = colorPsychology[psychIndex]

  return (
    <div className="section">
      <h2 className="section-title">Color Psychology</h2>
      <div className="panel">
        {expertInsights.psychology.map((q, i) => (
          <Quote key={i} data={q} />
        ))}
        <p className="ct-intro">
          Colors trigger psychological associations shaped by biology, culture,
          and experience. Understanding these associations helps you choose
          colors that reinforce your message.
        </p>

        <div style={{ marginBottom: '16px', maxWidth: '320px' }}>
          <StepperControl
            label="Color"
            value={psychColor.hue}
            onChange={(val) => {
              const idx = colorPsychology.findIndex((p) => p.hue === val)
              if (idx >= 0) setPsychIndex(idx)
            }}
            options={colorPsychology.map((p) => p.hue)}
          />
        </div>

        <div className="ct-psych-layout">
          <div
            className="ct-psych-swatch"
            style={{ background: psychColor.hex }}
          />
          <div className="ct-psych-info">
            <div className="ct-psych-associations">
              {psychColor.associations.map((a) => (
                <span key={a} className="ct-psych-tag">
                  {a}
                </span>
              ))}
            </div>
            <p className="ct-psych-science">{psychColor.science}</p>
            <div className="ct-psych-meta">
              <div>
                <span className="ct-meta-label">Common Industries</span>
                <span className="ct-meta-value">
                  {psychColor.industries.join(', ')}
                </span>
              </div>
              <div>
                <span className="ct-meta-label">UI Usage</span>
                <span className="ct-meta-value">{psychColor.uiUsage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
