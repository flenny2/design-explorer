import { Link } from 'react-router-dom'
import './Home.css'

const sections = [
  {
    path: '/advisor',
    title: 'Design Advisor',
    icon: '◎',
    description: 'Describe what you\'re building and the vibe you want — get tailored design recommendations with reasoning.',
    color: '#10b981',
  },
  {
    path: '/typography',
    title: 'Typography',
    icon: 'Aa',
    description: 'Explore fonts, sizes, weights, line height, letter spacing, pairings, and type scales.',
    color: '#6366f1',
  },
  {
    path: '/color',
    title: 'Color',
    icon: '◉',
    description: 'Pick colors, generate palettes, check contrast ratios, and compare color schemes.',
    color: '#ec4899',
  },
  {
    path: '/layout',
    title: 'Layout',
    icon: '⊞',
    description: 'Experiment with flexbox, CSS grid, spacing scales, and common layout patterns.',
    color: '#14b8a6',
  },
  {
    path: '/components',
    title: 'Components',
    icon: '◧',
    description: 'Customize buttons, cards, forms, and navbars with live style controls.',
    color: '#f59e0b',
  },
  {
    path: '/systems',
    title: 'Design Systems',
    icon: '◆',
    description: 'Compare Material, Brutalist, Glassmorphism, and more — see what CSS defines each style.',
    color: '#8b5cf6',
  },
]

export default function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <h1>Design Explorer</h1>
        <p>
          An interactive playground to learn front-end design. Pick a section below
          to start experimenting with live controls, side-by-side comparisons, and
          real CSS output.
        </p>
      </div>
      <div className="home-grid">
        {sections.map(({ path, title, icon, description, color }) => (
          <Link to={path} key={path} className="home-card" style={{ '--card-accent': color }}>
            <div className="home-card-icon">{icon}</div>
            <h2>{title}</h2>
            <p>{description}</p>
            <span className="home-card-arrow">&rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
