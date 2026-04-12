export default function ThemeBreakdown({ theme }) {
  const annotatedProps = Object.keys(theme.annotations)

  const isColor = (value) => {
    if (!value) return false
    return value.startsWith('#') || value.startsWith('rgb') || value.startsWith('hsl')
  }

  return (
    <div className="theme-breakdown">
      <h3 className="theme-breakdown-title">
        What makes it {theme.name}?
      </h3>
      <div className="theme-prop-list">
        {annotatedProps.map((prop) => {
          const value = theme.variables[prop]
          return (
            <div key={prop} className="theme-prop">
              <div className="theme-prop-name">{prop}</div>
              <div className="theme-prop-value">
                {isColor(value) && (
                  <span className="theme-color-dot" style={{ background: value }} />
                )}
                <span>{value}</span>
              </div>
              <div className="theme-prop-annotation">
                {theme.annotations[prop]}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
