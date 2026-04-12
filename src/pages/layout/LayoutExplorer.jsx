import FlexboxPlayground from './FlexboxPlayground'
import GridPlayground from './GridPlayground'
import SpacingScale from './SpacingScale'
import LayoutPatterns from './LayoutPatterns'
import VideoSection from '../../components/VideoSection'
import { videosBySection } from '../../data/videos'
import './LayoutExplorer.css'

export default function LayoutExplorer() {
  return (
    <div>
      <div className="page-header">
        <h1>Layout</h1>
        <p>
          Experiment with flexbox, CSS grid, spacing scales, and common layout
          patterns used in real-world designs.
        </p>
      </div>
      <FlexboxPlayground />
      <GridPlayground />
      <SpacingScale />
      <LayoutPatterns />
      <VideoSection videos={videosBySection.layout} />
    </div>
  )
}
