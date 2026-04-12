import './SampleCard.css'

export default function SampleCard({ style = {}, className = '' }) {
  return (
    <div className={`sample-card ${className}`} style={style}>
      <div className="sample-card-header">
        <div className="sample-card-avatar" />
        <div>
          <div className="sample-card-title">Card Title</div>
          <div className="sample-card-subtitle">Subtitle text</div>
        </div>
      </div>
      <p className="sample-card-body">
        This is a sample card component used for previewing different design styles, color schemes, and visual treatments.
      </p>
      <div className="sample-card-actions">
        <button className="sample-card-btn primary">Primary</button>
        <button className="sample-card-btn secondary">Secondary</button>
      </div>
    </div>
  )
}
