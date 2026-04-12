import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import TypographyExplorer from './pages/typography/TypographyExplorer'
import ColorExplorer from './pages/color/ColorExplorer'
import LayoutExplorer from './pages/layout/LayoutExplorer'
import ComponentExplorer from './pages/components/ComponentExplorer'
import DesignSystemsExplorer from './pages/systems/DesignSystemsExplorer'
import DesignAdvisor from './pages/advisor/DesignAdvisor'
import './App.css'

export default function App() {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advisor" element={<DesignAdvisor />} />
          <Route path="/typography" element={<TypographyExplorer />} />
          <Route path="/color" element={<ColorExplorer />} />
          <Route path="/layout" element={<LayoutExplorer />} />
          <Route path="/components" element={<ComponentExplorer />} />
          <Route path="/systems" element={<DesignSystemsExplorer />} />
        </Routes>
      </main>
    </>
  )
}
