import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import StepperControl from '../../components/StepperControl'
import CssDisplay from '../../components/CssDisplay'
import { hexToHsl, hslToHex, getHarmonyColors } from '../../utils/color'

const harmonyModes = [
  { value: 'complementary', label: 'Complementary' },
  { value: 'analogous', label: 'Analogous' },
  { value: 'triadic', label: 'Triadic' },
  { value: 'split-complementary', label: 'Split Complementary' },
  { value: 'tetradic', label: 'Tetradic (Square)' },
]

const modeDescriptions = {
  complementary: 'Two colors opposite on the color wheel. High contrast, vibrant when used together.',
  analogous: 'Three colors next to each other on the wheel. Harmonious, comfortable, low contrast.',
  triadic: 'Three colors equally spaced (120 apart). Balanced and vibrant.',
  'split-complementary': 'A base color plus two adjacent to its complement. High contrast but less tension than complementary.',
  tetradic: 'Four colors forming a rectangle on the wheel. Rich color scheme, works best with one dominant color.',
}

export default function PaletteGenerator() {
  const [baseColor, setBaseColor] = useState('#6366f1')
  const [mode, setMode] = useState('complementary')

  const baseHsl = hexToHsl(baseColor)
  const harmonyHsls = getHarmonyColors(baseHsl, mode)
  const harmonyHexes = harmonyHsls.map(hslToHex)

  const cssVars = {}
  harmonyHexes.forEach((hex, i) => {
    cssVars[`--color-${i + 1}`] = hex
  })

  return (
    <div className="section">
      <h2 className="section-title">Palette Generator</h2>
      <div className="panel">
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '24px', alignItems: 'start' }}>
          <div>
            <HexColorPicker color={baseColor} onChange={setBaseColor} style={{ width: '100%', marginBottom: '16px' }} />
            <StepperControl label="Harmony" value={mode} onChange={setMode} options={harmonyModes} />
          </div>
          <div>
            <p style={{ color: 'var(--app-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
              {modeDescriptions[mode]}
            </p>
            <div className="palette-strip">
              {harmonyHexes.map((hex, i) => (
                <div
                  key={i}
                  className="palette-strip-color"
                  style={{ background: hex }}
                >
                  <span>{hex.toUpperCase()}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
              {harmonyHexes.map((hex, i) => {
                const hsl = hexToHsl(hex)
                return (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div
                      className="color-swatch"
                      style={{ background: hex }}
                    />
                    <div className="color-swatch-label">{hex.toUpperCase()}</div>
                    <div className="color-swatch-label">H:{hsl.h} S:{hsl.s} L:{hsl.l}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <CssDisplay selector=":root" styles={cssVars} />
      </div>
    </div>
  )
}
