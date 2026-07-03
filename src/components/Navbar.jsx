import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/academic', label: 'Academic' },
  { to: '/contact', label: 'Contact' },
  
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo">
          <span className="logo-z">Z</span>aryab<span className="logo-dot">.</span>
        </NavLink>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a href="https://wa.me/923250325386" className="nav-cta" target="_blank" rel="noreferrer">
          Hire Me
        </a>

        <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
            {l.label}
          </NavLink>
        ))}
        <a href="https://wa.me/923250325386" className="btn" target="_blank" rel="noreferrer" style={{marginTop:'1rem'}}>
          Hire Me
        </a>
      </div>
    </nav>
  )
}
