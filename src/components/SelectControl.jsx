import { handleControlKeyDown } from '../utils/controlNav'

export default function SelectControl({ label, value, onChange, options }) {
  const onKeyDown = (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      handleControlKeyDown(e)
    }
  }

  return (
    <label className="control-group">
      <span className="control-label">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        className="control-select"
      >
        {options.map((opt) => {
          const val = typeof opt === 'string' ? opt : opt.value
          const display = typeof opt === 'string' ? opt : opt.label
          return <option key={val} value={val}>{display}</option>
        })}
      </select>
    </label>
  )
}
