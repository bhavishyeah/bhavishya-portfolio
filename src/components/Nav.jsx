import { useEffect, useState } from 'react'
import { nav } from '../data'

// Floating pill navbar (ref: dark pill + circular accent logo + white pill links)
export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    function onScroll() {
      const y = window.scrollY
      setHidden(y > 320 && y > lastY)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${hidden ? 'hidden' : ''}`}>
      <div className="nav-pill grain">
        <a href="#hero" className="nav-logo" aria-label="Home">
          <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true">
            <path
              fill="currentColor"
              d="M16 3.2c1.7 2.6 3 3.9 5.6 5.6-2.6 1.7-3.9 3-5.6 5.6-1.7-2.6-3-3.9-5.6-5.6 2.6-1.7 3.9-3 5.6-5.6zM16 17.6c1.7 2.6 3 3.9 5.6 5.6-2.6 1.7-3.9 3-5.6 5.6-1.7-2.6-3-3.9-5.6-5.6 2.6-1.7 3.9-3 5.6-5.6zM6.4 10.4c1.1 1.7 2 2.6 3.7 3.7-1.7 1.1-2.6 2-3.7 3.7-1.1-1.7-2-2.6-3.7-3.7 1.7-1.1 2.6-2 3.7-3.7zM25.6 10.4c1.1 1.7 2 2.6 3.7 3.7-1.7 1.1-2.6 2-3.7 3.7-1.1-1.7-2-2.6-3.7-3.7 1.7-1.1 2.6-2 3.7-3.7z"
            />
          </svg>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="pill-link" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
