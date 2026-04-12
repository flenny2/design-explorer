import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const sections = [
  { path: '/', label: 'Home', icon: '◈' },
  { path: '/advisor', label: 'Design Advisor', icon: '◎' },
  { path: '/typography', label: 'Typography', icon: 'Aa' },
  { path: '/color', label: 'Color', icon: '◉' },
  { path: '/layout', label: 'Layout', icon: '⊞' },
  { path: '/components', label: 'Components', icon: '◧' },
  { path: '/systems', label: 'Design Systems', icon: '◆' },
]

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-logo">◇</span>
        <span className="sidebar-title">Design Explorer</span>
      </div>
      <ul className="sidebar-nav">
        {sections.map(({ path, label, icon }) => (
          <li key={path}>
            <NavLink
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`
              }
            >
              <span className="sidebar-icon">{icon}</span>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <span>Learn by experimenting</span>
      </div>
    </nav>
  )
}
