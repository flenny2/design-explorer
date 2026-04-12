import { useState } from 'react'
import SliderControl from '../../components/SliderControl'
import CssDisplay from '../../components/CssDisplay'

const buttonStyles = [
  {
    name: 'Flat',
    getStyle: (c) => ({
      background: c.color, color: 'white', border: 'none',
      borderRadius: `${c.radius}px`, padding: `${c.paddingY}px ${c.paddingX}px`,
      fontSize: `${c.fontSize}px`, fontWeight: 500, cursor: 'pointer',
    }),
  },
  {
    name: 'Outlined',
    getStyle: (c) => ({
      background: 'transparent', color: c.color, border: `2px solid ${c.color}`,
      borderRadius: `${c.radius}px`, padding: `${c.paddingY}px ${c.paddingX}px`,
      fontSize: `${c.fontSize}px`, fontWeight: 500, cursor: 'pointer',
    }),
  },
  {
    name: 'Rounded',
    getStyle: (c) => ({
      background: c.color, color: 'white', border: 'none',
      borderRadius: '999px', padding: `${c.paddingY}px ${c.paddingX * 1.5}px`,
      fontSize: `${c.fontSize}px`, fontWeight: 500, cursor: 'pointer',
    }),
  },
  {
    name: 'Ghost',
    getStyle: (c) => ({
      background: `${c.color}15`, color: c.color, border: 'none',
      borderRadius: `${c.radius}px`, padding: `${c.paddingY}px ${c.paddingX}px`,
      fontSize: `${c.fontSize}px`, fontWeight: 500, cursor: 'pointer',
    }),
  },
  {
    name: 'Gradient',
    getStyle: (c) => ({
      background: `linear-gradient(135deg, ${c.color}, ${c.color}99)`,
      color: 'white', border: 'none',
      borderRadius: `${c.radius}px`, padding: `${c.paddingY}px ${c.paddingX}px`,
      fontSize: `${c.fontSize}px`, fontWeight: 500, cursor: 'pointer',
      boxShadow: `0 4px 15px ${c.color}40`,
    }),
  },
  {
    name: '3D',
    getStyle: (c) => ({
      background: c.color, color: 'white', border: 'none',
      borderRadius: `${c.radius}px`, padding: `${c.paddingY}px ${c.paddingX}px`,
      fontSize: `${c.fontSize}px`, fontWeight: 600, cursor: 'pointer',
      boxShadow: `0 4px 0 ${c.color}88, 0 6px 12px rgba(0,0,0,0.15)`,
      transform: 'translateY(-2px)',
    }),
  },
  {
    name: 'Soft',
    getStyle: (c) => ({
      background: `${c.color}20`, color: c.color,
      border: `1px solid ${c.color}30`,
      borderRadius: `${c.radius}px`, padding: `${c.paddingY}px ${c.paddingX}px`,
      fontSize: `${c.fontSize}px`, fontWeight: 500, cursor: 'pointer',
    }),
  },
]

export default function ButtonShowcase() {
  const [radius, setRadius] = useState(8)
  const [paddingX, setPaddingX] = useState(20)
  const [paddingY, setPaddingY] = useState(10)
  const [fontSize, setFontSize] = useState(14)
  const [color, setColor] = useState('#6366f1')

  const config = { radius, paddingX, paddingY, fontSize, color }

  return (
    <div className="section">
      <h2 className="section-title">Buttons</h2>
      <div className="panel">
        <div className="controls-preview-layout">
          <div className="controls">
            <label className="control-group">
              <span className="control-label">Color</span>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{ width: '100%', height: '32px', border: 'none', cursor: 'pointer' }}
              />
            </label>
            <SliderControl label="Border Radius" value={radius} onChange={setRadius} min={0} max={24} unit="px" />
            <SliderControl label="Padding X" value={paddingX} onChange={setPaddingX} min={8} max={48} unit="px" />
            <SliderControl label="Padding Y" value={paddingY} onChange={setPaddingY} min={4} max={24} unit="px" />
            <SliderControl label="Font Size" value={fontSize} onChange={setFontSize} min={12} max={24} unit="px" />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'start', alignContent: 'start' }}>
            {buttonStyles.map(({ name, getStyle }) => (
              <div key={name} className="showcase-item">
                <button style={{ ...getStyle(config), fontFamily: 'var(--font-sans)' }}>
                  {name}
                </button>
                <div className="showcase-item-label">{name}</div>
              </div>
            ))}
          </div>
        </div>
        <CssDisplay
          selector=".btn"
          styles={{
            'background': color,
            'color': 'white',
            'border': 'none',
            'border-radius': `${radius}px`,
            'padding': `${paddingY}px ${paddingX}px`,
            'font-size': `${fontSize}px`,
            'font-weight': 500,
            'cursor': 'pointer',
          }}
        />
      </div>
    </div>
  )
}
