import ButtonShowcase from './ButtonShowcase'
import CardShowcase from './CardShowcase'
import FormShowcase from './FormShowcase'
import NavbarShowcase from './NavbarShowcase'
import VideoSection from '../../components/VideoSection'
import { videosBySection } from '../../data/videos'
import './ComponentExplorer.css'

export default function ComponentExplorer() {
  return (
    <div>
      <div className="page-header">
        <h1>Components</h1>
        <p>
          Customize buttons, cards, forms, and navbars with live controls.
          See how border-radius, padding, shadows, and colors change the feel.
        </p>
      </div>
      <ButtonShowcase />
      <CardShowcase />
      <FormShowcase />
      <NavbarShowcase />
      <VideoSection videos={videosBySection.components} />
    </div>
  )
}
