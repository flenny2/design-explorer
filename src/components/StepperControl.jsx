import { focusNextControl } from '../utils/controlNav'
import './StepperControl.css'

export default function StepperControl({ label, value, onChange, options = [] }) {
  if (options.length === 0) return null

  const currentIndex = options.findIndex((opt) => {
    const val = typeof opt === 'string' ? opt : opt.value
    return val === value
  })

  const getLabel = (opt) => (typeof opt === 'string' ? opt : opt.label)
  const getValue = (opt) => (typeof opt === 'string' ? opt : opt.value)

  const prev = () => {
    const next = currentIndex <= 0 ? options.length - 1 : currentIndex - 1
    onChange(getValue(options[next]))
  }

  const next = () => {
    const next = currentIndex >= options.length - 1 ? 0 : currentIndex + 1
    onChange(getValue(options[next]))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault()
      focusNextControl(e.currentTarget, e.key === 'ArrowUp' ? -1 : 1)
    }
  }

  return (
    <div className="control-group">
      <span className="control-label">
        {label}
        <span className="control-value">{currentIndex + 1}/{options.length}</span>
      </span>
      <div
        className="stepper"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="listbox"
        aria-label={label}
      >
        <button className="stepper-btn" onClick={prev} aria-label="Previous" tabIndex={-1}>&lsaquo;</button>
        <span className="stepper-value">{currentIndex >= 0 ? getLabel(options[currentIndex]) : ''}</span>
        <button className="stepper-btn" onClick={next} aria-label="Next" tabIndex={-1}>&rsaquo;</button>
      </div>
      <span className="stepper-hint">Arrow keys to browse</span>
    </div>
  )
}
