import './SideBySide.css'

export default function SideBySide({ left, right, leftLabel, rightLabel }) {
  return (
    <div className="side-by-side">
      <div className="side-by-side-panel">
        {leftLabel && <div className="side-by-side-label">{leftLabel}</div>}
        <div className="side-by-side-content">{left}</div>
      </div>
      <div className="side-by-side-divider" />
      <div className="side-by-side-panel">
        {rightLabel && <div className="side-by-side-label">{rightLabel}</div>}
        <div className="side-by-side-content">{right}</div>
      </div>
    </div>
  )
}
