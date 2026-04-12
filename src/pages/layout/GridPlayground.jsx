import { useState } from 'react'
import SliderControl from '../../components/SliderControl'
import StepperControl from '../../components/StepperControl'
import CssDisplay from '../../components/CssDisplay'

const boxColors = ['#6366f1', '#ec4899', '#14b8a6', '#f59e0b', '#8b5cf6', '#ef4444', '#22c55e', '#06b6d4', '#f97316']

export default function GridPlayground() {
  const [columns, setColumns] = useState(3)
  const [rows, setRows] = useState(2)
  const [gap, setGap] = useState(12)
  const [colUnit, setColUnit] = useState('1fr')
  const [rowUnit, setRowUnit] = useState('1fr')

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, ${colUnit})`,
    gridTemplateRows: `repeat(${rows}, ${rowUnit})`,
    gap: `${gap}px`,
  }

  const cssStyles = {
    display: 'grid',
    'grid-template-columns': `repeat(${columns}, ${colUnit})`,
    'grid-template-rows': `repeat(${rows}, ${rowUnit})`,
    gap: `${gap}px`,
  }

  const totalCells = columns * rows

  return (
    <div className="section">
      <h2 className="section-title">Grid Playground</h2>
      <div className="panel">
        <div className="controls-preview-layout">
          <div className="controls">
            <SliderControl label="Columns" value={columns} onChange={setColumns} min={1} max={6} />
            <SliderControl label="Rows" value={rows} onChange={setRows} min={1} max={6} />
            <SliderControl label="gap" value={gap} onChange={setGap} min={0} max={48} unit="px" />
            <StepperControl
              label="Column Unit"
              value={colUnit}
              onChange={setColUnit}
              options={['1fr', 'auto', '100px', '150px', 'minmax(100px, 1fr)']}
            />
            <StepperControl
              label="Row Unit"
              value={rowUnit}
              onChange={setRowUnit}
              options={['1fr', 'auto', '80px', '120px', 'minmax(80px, 1fr)']}
            />
          </div>
          <div className="layout-demo-container" style={containerStyle}>
            {Array.from({ length: totalCells }, (_, i) => (
              <div
                key={i}
                className="layout-demo-box"
                style={{ background: boxColors[i % boxColors.length] }}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        <CssDisplay selector=".grid" styles={cssStyles} />
      </div>
    </div>
  )
}
