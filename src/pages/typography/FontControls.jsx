import { useState } from 'react'
import SliderControl from '../../components/SliderControl'
import SelectControl from '../../components/SelectControl'
import StepperControl from '../../components/StepperControl'
import CssDisplay from '../../components/CssDisplay'
import { fontFamilies } from '../../data/fonts'

const sampleTexts = [
  'The quick brown fox jumps over the lazy dog',
  'Design is not just what it looks like, design is how it works.',
  'Typography is the craft of endowing human language with a durable visual form.',
  'Good design is as little design as possible.',
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789',
]

export default function FontControls() {
  const [fontFamily, setFontFamily] = useState(fontFamilies[0].value)
  const [fontSize, setFontSize] = useState(24)
  const [fontWeight, setFontWeight] = useState(400)
  const [lineHeight, setLineHeight] = useState(1.6)
  const [letterSpacing, setLetterSpacing] = useState(0)
  const [sampleIndex, setSampleIndex] = useState(0)

  const previewStyle = {
    fontFamily,
    fontSize: `${fontSize}px`,
    fontWeight,
    lineHeight,
    letterSpacing: `${letterSpacing}em`,
  }

  const cssStyles = {
    'font-family': fontFamily,
    'font-size': `${fontSize}px`,
    'font-weight': fontWeight,
    'line-height': lineHeight,
    'letter-spacing': `${letterSpacing}em`,
  }

  return (
    <div className="section">
      <h2 className="section-title">Font Controls</h2>
      <div className="panel">
        <div className="controls-preview-layout">
          <div className="controls">
            <StepperControl
              label="Font Family"
              value={fontFamily}
              onChange={setFontFamily}
              options={fontFamilies}
            />
            <SliderControl
              label="Font Size"
              value={fontSize}
              onChange={setFontSize}
              min={10}
              max={80}
              unit="px"
            />
            <SliderControl
              label="Font Weight"
              value={fontWeight}
              onChange={setFontWeight}
              min={100}
              max={900}
              step={100}
            />
            <SliderControl
              label="Line Height"
              value={lineHeight}
              onChange={setLineHeight}
              min={0.8}
              max={3}
              step={0.05}
            />
            <SliderControl
              label="Letter Spacing"
              value={letterSpacing}
              onChange={setLetterSpacing}
              min={-0.1}
              max={0.5}
              step={0.005}
              unit="em"
            />
            <SelectControl
              label="Sample Text"
              value={sampleIndex}
              onChange={(v) => setSampleIndex(Number(v))}
              options={sampleTexts.map((text, i) => ({
                value: i,
                label: text.length > 40 ? text.slice(0, 40) + '...' : text,
              }))}
            />
          </div>
          <div className="preview-area">
            <p style={previewStyle}>
              {sampleTexts[sampleIndex]}
            </p>
          </div>
        </div>
        <CssDisplay selector=".text" styles={cssStyles} />
      </div>
    </div>
  )
}
