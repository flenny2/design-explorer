import { useState } from 'react'
import SliderControl from '../../components/SliderControl'
import CssDisplay from '../../components/CssDisplay'

export default function FormShowcase() {
  const [radius, setRadius] = useState(6)
  const [borderWidth, setBorderWidth] = useState(1)
  const [paddingX, setPaddingX] = useState(12)
  const [paddingY, setPaddingY] = useState(10)
  const [accent, setAccent] = useState('#6366f1')
  const [focusedField, setFocusedField] = useState(null)

  const getInputStyle = (field) => ({
    borderRadius: `${radius}px`,
    border: `${borderWidth}px solid ${focusedField === field ? accent : '#d1d5db'}`,
    padding: `${paddingY}px ${paddingX}px`,
    fontSize: '14px',
    fontFamily: 'var(--font-sans)',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
    background: 'white',
    boxShadow: focusedField === field ? `0 0 0 3px ${accent}25` : 'none',
  })

  return (
    <div className="section">
      <h2 className="section-title">Form Elements</h2>
      <div className="panel">
        <div className="controls-preview-layout">
          <div className="controls">
            <SliderControl label="Border Radius" value={radius} onChange={setRadius} min={0} max={20} unit="px" />
            <SliderControl label="Border Width" value={borderWidth} onChange={setBorderWidth} min={0} max={4} unit="px" />
            <SliderControl label="Padding X" value={paddingX} onChange={setPaddingX} min={4} max={24} unit="px" />
            <SliderControl label="Padding Y" value={paddingY} onChange={setPaddingY} min={4} max={20} unit="px" />
            <label className="control-group">
              <span className="control-label">Accent / Focus Color</span>
              <input
                type="color"
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                style={{ width: '100%', height: '32px', border: 'none', cursor: 'pointer' }}
              />
            </label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '360px' }}>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 500, display: 'block', marginBottom: '4px' }}>
                Text Input
              </label>
              <input
                type="text"
                placeholder="Enter your name..."
                style={getInputStyle('text')}
                onFocus={() => setFocusedField('text')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 500, display: 'block', marginBottom: '4px' }}>
                Email Input
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                style={getInputStyle('email')}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 500, display: 'block', marginBottom: '4px' }}>
                Select
              </label>
              <select
                style={{ ...getInputStyle('select'), cursor: 'pointer' }}
                onFocus={() => setFocusedField('select')}
                onBlur={() => setFocusedField(null)}
              >
                <option>Choose an option...</option>
                <option>Option A</option>
                <option>Option B</option>
                <option>Option C</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 500, display: 'block', marginBottom: '4px' }}>
                Textarea
              </label>
              <textarea
                rows={3}
                placeholder="Write something..."
                style={{ ...getInputStyle('textarea'), resize: 'vertical' }}
                onFocus={() => setFocusedField('textarea')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <label style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: accent, width: '16px', height: '16px' }} defaultChecked />
                Checkbox
              </label>
              <label style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                <input type="radio" name="demo" style={{ accentColor: accent, width: '16px', height: '16px' }} defaultChecked />
                Radio A
              </label>
              <label style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                <input type="radio" name="demo" style={{ accentColor: accent, width: '16px', height: '16px' }} />
                Radio B
              </label>
            </div>
          </div>
        </div>
        <CssDisplay
          selector="input, select, textarea"
          styles={{
            'border-radius': `${radius}px`,
            'border': `${borderWidth}px solid #d1d5db`,
            'padding': `${paddingY}px ${paddingX}px`,
            'font-size': '14px',
            'outline': 'none',
            'transition': 'border-color 0.15s, box-shadow 0.15s',
          }}
        />
      </div>
    </div>
  )
}
