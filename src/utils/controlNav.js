const CONTROL_SELECTOR = '.stepper, .control-slider, .control-select'

export function focusNextControl(current, direction) {
  const panel = current.closest('.panel')
  if (!panel) return
  const controls = [...panel.querySelectorAll(CONTROL_SELECTOR)]
  const idx = controls.indexOf(current)
  if (idx === -1) return
  const next = direction > 0
    ? controls[idx + 1] || controls[0]
    : controls[idx - 1] || controls[controls.length - 1]
  next.focus()
}

export function handleControlKeyDown(e) {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    e.preventDefault()
    focusNextControl(e.currentTarget, e.key === 'ArrowUp' ? -1 : 1)
  }
}
