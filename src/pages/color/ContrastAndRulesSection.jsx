import { contrastScience, designRules, expertInsights, designPrinciples } from '../../data/colorScience'

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

export default function ContrastAndRulesSection() {
  return (
    <>
      {/* ── Contrast & Readability ────────────────────── */}
      <div className="section">
        <h2 className="section-title">Contrast & Readability</h2>
        <div className="panel">
          {expertInsights.contrast.map((q, i) => (
            <Quote key={i} data={q} />
          ))}
          <p className="ct-intro">{contrastScience.overview}</p>
          <p className="ct-intro" style={{ marginTop: '8px' }}>
            <strong>How it works:</strong> {contrastScience.formula}
          </p>

          <div className="ct-contrast-ladder">
            {contrastScience.levels.map((level) => (
              <div key={level.ratio} className="ct-contrast-row">
                <div
                  className="ct-contrast-sample"
                  style={{
                    background: level.example.bg,
                    color: level.example.fg,
                  }}
                >
                  <span className="ct-contrast-sample-text">
                    The quick brown fox jumps over the lazy dog
                  </span>
                </div>
                <div className="ct-contrast-info">
                  <div className="ct-contrast-ratio">{level.ratio}</div>
                  <div className="ct-contrast-label">{level.label}</div>
                  <p className="ct-contrast-desc">{level.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="ct-apca-note">
            <strong>WCAG 2.x vs. APCA:</strong> {contrastScience.wcagVsApca}
          </div>
        </div>
      </div>

      {/* ── Design Rules ─────────────────────────────── */}
      <div className="section">
        <h2 className="section-title">Color in Practice</h2>
        <div className="panel">
          {expertInsights.practice.map((q, i) => (
            <Quote key={i} data={q} />
          ))}
          <h3 className="ct-section-title">The 60-30-10 Rule</h3>
          <p className="ct-intro">{designRules.sixtyThirtyTen.description}</p>

          <div className="ct-rule-demo">
            <div
              className="ct-rule-block ct-rule-60"
              style={{ background: '#f5f7fa' }}
            >
              <span className="ct-rule-label">60%</span>
              <span className="ct-rule-role">
                {designRules.sixtyThirtyTen.example.dominant.role}
              </span>
            </div>
            <div
              className="ct-rule-block ct-rule-30"
              style={{ background: '#334155', color: '#fff' }}
            >
              <span className="ct-rule-label">30%</span>
              <span className="ct-rule-role">
                {designRules.sixtyThirtyTen.example.secondary.role}
              </span>
            </div>
            <div
              className="ct-rule-block ct-rule-10"
              style={{ background: '#6366f1', color: '#fff' }}
            >
              <span className="ct-rule-label">10%</span>
              <span className="ct-rule-role">
                {designRules.sixtyThirtyTen.example.accent.role}
              </span>
            </div>
          </div>

          <h3
            className="ct-section-title"
            style={{ marginTop: '28px' }}
          >
            Semantic Color Coding
          </h3>
          <p className="ct-intro">{designRules.colorCoding.description}</p>
          <div className="ct-semantic-colors">
            {designRules.colorCoding.conventions.map((c) => (
              <div key={c.meaning} className="ct-semantic-item">
                <div
                  className="ct-semantic-dot"
                  style={{ background: c.hex }}
                />
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 500 }}>
                    {c.meaning}
                  </div>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--app-text-muted)',
                    }}
                  >
                    {c.hex}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3
            className="ct-section-title"
            style={{ marginTop: '28px' }}
          >
            Design Principles
          </h3>
          <p className="ct-intro">
            Foundational principles from psychology and human-computer
            interaction that inform every design decision.
          </p>
          <div className="ct-principles-grid">
            {designPrinciples.map((p) => (
              <div key={p.name} className="ct-principle-card">
                <div className="ct-principle-name">{p.name}</div>
                <div className="ct-principle-author">{p.author}</div>
                <p className="ct-principle-desc">{p.description}</p>
                <p className="ct-principle-app">{p.application}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
