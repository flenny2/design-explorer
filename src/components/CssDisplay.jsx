import { useState } from 'react'
import { formatCss } from '../utils/css'
import './CssDisplay.css'

export default function CssDisplay({ selector, styles, raw }) {
  const [open, setOpen] = useState(false)
  const code = raw || formatCss(selector, styles)

  if (!code) return null

  return (
    <div className={`css-display ${open ? 'css-display--open' : ''}`}>
      <button
        className="css-display-header"
        onClick={() => setOpen(!open)}
        type="button"
        aria-expanded={open}
      >
        <span className="css-display-label">CSS Output</span>
        <span className="css-display-toggle">{open ? '▾' : '▸'}</span>
      </button>
      {open && (
        <pre className="css-display-code">
          <code>{code}</code>
        </pre>
      )}
    </div>
  )
}
