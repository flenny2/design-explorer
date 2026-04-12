import './ToggleControl.css'

export default function ToggleControl({ label, checked, onChange }) {
  return (
    <label className="control-group toggle-group">
      <span className="control-label">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        className={`toggle ${checked ? 'toggle--on' : ''}`}
        onClick={() => onChange(!checked)}
      >
        <span className="toggle-thumb" />
      </button>
    </label>
  )
}
