import { useEffect, useRef, useState } from 'react'
import { nav } from '../data'

// Retractable floating navbar:
// - Full pill at the top.
// - After scrolling past the stats section (~2 sections), the pill retracts
//   right-to-left into a compact "B" shell.
// - Clicking the "B" shell expands the full navbar back out.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [compact, setCompact] = useState(false) // inside the compact zone
  const [expandedFromPill, setExpandedFromPill] = useState(false) // user re-opened
  const [open, setOpen] = useState(false) // mobile drawer
  const collapseTimer = useRef(null)

  useEffect(() => {
    const clearTimer = () => {
      if (collapseTimer.current) {
        clearTimeout(collapseTimer.current)
        collapseTimer.current = null
      }
    }

    // Compact once the stats section has scrolled above the navbar.
    const inCompactZone = () => {
      const stats = document.querySelector('.stats-bar')
      if (stats) return stats.getBoundingClientRect().bottom <= 80
      return window.scrollY > window.innerHeight * 1.1
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const zone = inCompactZone()

      if (!zone) {
        clearTimer()
        setCompact(false)
        setExpandedFromPill(false)
        setOpen(false)
        return
      }
      // in compact zone
      setCompact(!expandedFromPill)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimer()
      window.removeEventListener('scroll', onScroll)
    }
  }, [expandedFromPill])

  const showFull = !compact || expandedFromPill
  const isCompactOnly = compact && !expandedFromPill

  const handleLogo = () => {
    if (isCompactOnly) {
      setExpandedFromPill(true)
      setCompact(false)
      return
    }
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  const onLinkClick = () => {
    setOpen(false)
    // Re-collapse to the shell after navigating, if we're past the stats zone.
    const stats = document.querySelector('.stats-bar')
    if (stats && stats.getBoundingClientRect().bottom <= 80) {
      collapseTimer.current = setTimeout(() => {
        setExpandedFromPill(false)
        setCompact(true)
      }, 600)
    }
  }

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className={`nav-pill ${showFull ? 'is-full' : 'is-compact'}`}>
        <button
          type="button"
          className="nav-logo"
          aria-label={isCompactOnly ? 'Expand navigation' : 'Back to top'}
          aria-expanded={!isCompactOnly}
          onClick={handleLogo}
        >
          B
        </button>

        <div className="nav-reveal" aria-hidden={isCompactOnly}>
          <nav className="nav-links">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="pill-link" onClick={onLinkClick} tabIndex={isCompactOnly ? -1 : 0}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            tabIndex={isCompactOnly ? -1 : 0}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && showFull && (
        <div className="nav-drawer">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="drawer-link" onClick={onLinkClick}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
