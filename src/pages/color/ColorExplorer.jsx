import ColorWheelSection from './ColorWheelSection'
import ColorPsychologySection from './ColorPsychologySection'
import ColorTemperatureSection from './ColorTemperatureSection'
import ContrastAndRulesSection from './ContrastAndRulesSection'
import ColorAccessibilitySection from './ColorAccessibilitySection'
import ColorPickerSection from './ColorPickerSection'
import PaletteGenerator from './PaletteGenerator'
import ContrastChecker from './ContrastChecker'
import NamedPalettes from './NamedPalettes'
import VideoSection from '../../components/VideoSection'
import { videosBySection } from '../../data/videos'
import './ColorExplorer.css'
import './ColorTheory.css'

export default function ColorExplorer() {
  return (
    <div>
      <div className="page-header">
        <h1>Color</h1>
        <p>
          Explore the science behind color — theory, psychology, contrast,
          accessibility — then experiment with interactive tools.
        </p>
      </div>
      <ColorWheelSection />
      <ColorPsychologySection />
      <ColorTemperatureSection />
      <ContrastAndRulesSection />
      <ColorPickerSection />
      <PaletteGenerator />
      <ContrastChecker />
      <ColorAccessibilitySection />
      <NamedPalettes />
      <VideoSection videos={videosBySection.color} />
    </div>
  )
}
