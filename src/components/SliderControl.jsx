import { handleControlKeyDown } from '../utils/controlNav'

export default function SliderControl({ label, value, onChange, min, max, step = 1, unit = '' }) {
  const onKeyDown = (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      handleControlKeyDown(e)
    }
  }

  return (
    <label className="control-group">
      <span className="control-label">
        {label}
        <span className="control-value">{value}{unit}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        onKeyDown={onKeyDown}
        className="control-slider"
      />
    </label>
  )
}
