import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import CssDisplay from '../../components/CssDisplay'
import { hexToRgb, hexToHsl } from '../../utils/color'

export default function ColorPickerSection() {
  const [color, setColor] = useState('#6366f1')

  const rgb = hexToRgb(color)
  const hsl = hexToHsl(color)

  return (
    <div className="section">
      <h2 className="section-title">Color Picker</h2>
      <div className="panel">
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '24px', alignItems: 'start' }}>
          <HexColorPicker color={color} onChange={setColor} style={{ width: '100%' }} />
          <div>
            <div
              style={{
                width: '100%',
                height: '80px',
                borderRadius: 'var(--radius-md)',
                background: color,
                marginBottom: '16px',
                border: '1px solid rgba(0,0,0,0.1)',
              }}
            />
            <div className="color-info-grid">
              <div className="color-info-item">
                <label>Hex</label>
                <span>{color.toUpperCase()}</span>
              </div>
              <div className="color-info-item">
                <label>RGB</label>
                <span>{rgb.r}, {rgb.g}, {rgb.b}</span>
              </div>
              <div className="color-info-item">
                <label>HSL</label>
                <span>{hsl.h}, {hsl.s}%, {hsl.l}%</span>
              </div>
            </div>
          </div>
        </div>
        <CssDisplay
          selector=".element"
          styles={{
            'color': color,
            'background-color': color,
          }}
        />
      </div>
    </div>
  )
}
