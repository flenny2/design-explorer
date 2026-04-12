import FontControls from './FontControls'
import FontPairings from './FontPairings'
import TypeScale from './TypeScale'
import VideoSection from '../../components/VideoSection'
import { videosBySection } from '../../data/videos'

export default function TypographyExplorer() {
  return (
    <div>
      <div className="page-header">
        <h1>Typography</h1>
        <p>
          Explore fonts, sizes, weights, spacing, pairings, and type scales.
          Adjust the controls and see the CSS update in real time.
        </p>
      </div>
      <FontControls />
      <FontPairings />
      <TypeScale />
      <VideoSection videos={videosBySection.typography} />
    </div>
  )
}
