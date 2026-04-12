import { colorTemperature } from '../../data/colorScience'

export default function ColorTemperatureSection() {
  return (
    <div className="section">
      <h2 className="section-title">Color Temperature</h2>
      <div className="panel">
        <p className="ct-intro">{colorTemperature.explanation}</p>

        <div className="ct-temp-gradient">
          {colorTemperature.gradient.map((stop) => (
            <div
              key={stop.label}
              className="ct-temp-stop"
              style={{ background: stop.hex }}
            >
              <span className="ct-temp-label">{stop.label}</span>
              <span className="ct-temp-desc">{stop.temp}</span>
            </div>
          ))}
        </div>

        <div className="ct-temp-details">
          <div className="ct-temp-card">
            <h4>Warm Colors</h4>
            <p className="ct-meta-value">
              {colorTemperature.warmColors.psychological}
            </p>
            <p className="ct-psych-science" style={{ marginTop: '8px' }}>
              <strong>Spatial effect:</strong>{' '}
              {colorTemperature.warmColors.spatialEffect}
            </p>
            <p className="ct-psych-science" style={{ marginTop: '6px' }}>
              <strong>Best for:</strong>{' '}
              {colorTemperature.warmColors.bestFor}
            </p>
          </div>
          <div className="ct-temp-card">
            <h4>Cool Colors</h4>
            <p className="ct-meta-value">
              {colorTemperature.coolColors.psychological}
            </p>
            <p className="ct-psych-science" style={{ marginTop: '8px' }}>
              <strong>Spatial effect:</strong>{' '}
              {colorTemperature.coolColors.spatialEffect}
            </p>
            <p className="ct-psych-science" style={{ marginTop: '6px' }}>
              <strong>Best for:</strong>{' '}
              {colorTemperature.coolColors.bestFor}
            </p>
          </div>
        </div>

        <div className="ct-temp-card" style={{ marginTop: '16px' }}>
          <h4>Neutrals</h4>
          <p className="ct-meta-value">{colorTemperature.neutrals.range}</p>
          <p className="ct-psych-science" style={{ marginTop: '6px' }}>
            {colorTemperature.neutrals.impact}
          </p>
        </div>
      </div>
    </div>
  )
}
