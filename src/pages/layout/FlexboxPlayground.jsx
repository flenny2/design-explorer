import { useState } from 'react'
import StepperControl from '../../components/StepperControl'
import SliderControl from '../../components/SliderControl'
import ToggleControl from '../../components/ToggleControl'
import CssDisplay from '../../components/CssDisplay'

const boxColors = ['#6366f1', '#ec4899', '#14b8a6', '#f59e0b', '#8b5cf6', '#ef4444']

const propertyDescriptions = {
  'flex-direction': {
    row: 'Items flow left to right (default). The main axis is horizontal.',
    'row-reverse': 'Items flow right to left. Main axis is horizontal but reversed.',
    column: 'Items stack top to bottom. The main axis becomes vertical.',
    'column-reverse': 'Items stack bottom to top. Vertical main axis, reversed.',
  },
  'justify-content': {
    'flex-start': 'Items pack to the start of the main axis.',
    'flex-end': 'Items pack to the end of the main axis.',
    center: 'Items center along the main axis.',
    'space-between': 'First item at start, last at end, equal space between.',
    'space-around': 'Equal space around each item (edges get half-space).',
    'space-evenly': 'Perfectly equal space between all items and edges.',
  },
  'align-items': {
    stretch: 'Items stretch to fill the cross axis (default).',
    'flex-start': 'Items align to the start of the cross axis.',
    'flex-end': 'Items align to the end of the cross axis.',
    center: 'Items center on the cross axis.',
    baseline: 'Items align by their text baseline.',
  },
}

export default function FlexboxPlayground() {
  const [direction, setDirection] = useState('row')
  const [justifyContent, setJustifyContent] = useState('flex-start')
  const [alignItems, setAlignItems] = useState('stretch')
  const [gap, setGap] = useState(12)
  const [wrap, setWrap] = useState(false)
  const [boxCount, setBoxCount] = useState(5)

  const containerStyle = {
    display: 'flex',
    flexDirection: direction,
    justifyContent,
    alignItems,
    gap: `${gap}px`,
    flexWrap: wrap ? 'wrap' : 'nowrap',
  }

  const cssStyles = {
    display: 'flex',
    'flex-direction': direction,
    'justify-content': justifyContent,
    'align-items': alignItems,
    gap: `${gap}px`,
    'flex-wrap': wrap ? 'wrap' : 'nowrap',
  }

  return (
    <div className="section">
      <h2 className="section-title">Flexbox Playground</h2>
      <p style={{ color: 'var(--app-text-muted)', fontSize: '0.9rem', marginBottom: '16px', maxWidth: '640px' }}>
        Flexbox lays out items along a <strong>main axis</strong> (set by flex-direction) and a <strong>cross axis</strong> (perpendicular).
        justify-content controls the main axis, align-items controls the cross axis.
      </p>
      <div className="panel">
        <div className="controls-preview-layout">
          <div className="controls">
            <StepperControl
              label="flex-direction"
              value={direction}
              onChange={setDirection}
              options={['row', 'row-reverse', 'column', 'column-reverse']}
            />
            <StepperControl
              label="justify-content"
              value={justifyContent}
              onChange={setJustifyContent}
              options={['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']}
            />
            <StepperControl
              label="align-items"
              value={alignItems}
              onChange={setAlignItems}
              options={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
            />
            <SliderControl label="gap" value={gap} onChange={setGap} min={0} max={48} unit="px" />
            <SliderControl label="Items" value={boxCount} onChange={setBoxCount} min={1} max={12} />
            <ToggleControl label="flex-wrap" checked={wrap} onChange={setWrap} />
          </div>
          <div>
            <div className="layout-demo-container" style={containerStyle}>
              {Array.from({ length: boxCount }, (_, i) => (
                <div
                  key={i}
                  className="layout-demo-box"
                  style={{
                    background: boxColors[i % boxColors.length],
                    width: direction.startsWith('row') ? `${60 + (i % 3) * 20}px` : undefined,
                    height: direction.startsWith('column') ? `${40 + (i % 3) * 15}px` : undefined,
                    minWidth: '40px',
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="flex-description">
              <p><strong>flex-direction: {direction}</strong> — {propertyDescriptions['flex-direction'][direction]}</p>
              <p><strong>justify-content: {justifyContent}</strong> — {propertyDescriptions['justify-content'][justifyContent]}</p>
              <p><strong>align-items: {alignItems}</strong> — {propertyDescriptions['align-items'][alignItems]}</p>
            </div>
          </div>
        </div>
        <CssDisplay selector=".container" styles={cssStyles} />
      </div>
    </div>
  )
}
