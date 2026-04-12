import { useState } from 'react'
import SelectControl from '../../components/SelectControl'
import StepperControl from '../../components/StepperControl'
import SideBySide from '../../components/SideBySide'
import ThemePreview from './ThemePreview'
import ThemeBreakdown from './ThemeBreakdown'
import { designSystems } from '../../data/designSystems'
import VideoSection from '../../components/VideoSection'
import { videosBySection } from '../../data/videos'
import './DesignSystemsExplorer.css'

export default function DesignSystemsExplorer() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [compareA, setCompareA] = useState(0)
  const [compareB, setCompareB] = useState(1)

  const selected = designSystems[selectedIndex]

  return (
    <div>
      <div className="page-header">
        <h1>Design Systems</h1>
        <p>
          Compare Material, Brutalist, Glassmorphism, Neumorphism, and more.
          See exactly which CSS properties define each style.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Explore a Style</h2>
        <div className="panel">
          <div style={{ maxWidth: '320px', marginBottom: '20px' }}>
            <StepperControl
              label="Design System"
              value={selectedIndex}
              onChange={(v) => setSelectedIndex(Number(v))}
              options={designSystems.map((ds, i) => ({ value: i, label: ds.name }))}
            />
          </div>
          <p style={{ color: 'var(--app-text-muted)', fontSize: '0.9rem', marginBottom: '24px', maxWidth: '640px' }}>
            {selected.description}
          </p>
          <ThemePreview theme={selected} />
          <ThemeBreakdown theme={selected} />
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Side-by-Side Comparison</h2>
        <div className="panel">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px', maxWidth: '640px' }}>
            <SelectControl
              label="Left"
              value={compareA}
              onChange={(v) => setCompareA(Number(v))}
              options={designSystems.map((ds, i) => ({ value: i, label: ds.name }))}
            />
            <SelectControl
              label="Right"
              value={compareB}
              onChange={(v) => setCompareB(Number(v))}
              options={designSystems.map((ds, i) => ({ value: i, label: ds.name }))}
            />
          </div>
          <SideBySide
            leftLabel={designSystems[compareA].name}
            rightLabel={designSystems[compareB].name}
            left={<ThemePreview theme={designSystems[compareA]} compact />}
            right={<ThemePreview theme={designSystems[compareB]} compact />}
          />
        </div>
      </div>
      <VideoSection videos={videosBySection.systems} />
    </div>
  )
}
