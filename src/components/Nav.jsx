import { useEffect, useState } from 'react'
import { nav, profile } from '../data'
import Magnetic from './Magnetic'
import ThemeToggle from './ThemeToggle'
import { ArrowUpRight } from './Icons'

export default function Nav({ theme, onToggle }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    function onScroll() {
      const y = window.scrollY
      if (y > 200 && y > lastY) setHidden(true)
      else setHidden(false)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${hidden ? 'hidden' : ''}`}>
      <a href="#hero" className="nav-brand">
        <span className="dot" />
        {profile.shortName}
      </a>

      <nav className="nav-pill">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <div className="nav-right">
        <ThemeToggle theme={theme} onToggle={onToggle} />
        <Magnetic strength={0.4}>
          <a href="#contact" className="nav-cta">
            Let&rsquo;s talk <ArrowUpRight style={{ width: 14, height: 14 }} />
          </a>
        </Magnetic>
        <a href="#contact" className="nav-burger">Menu</a>
      </div>
    </header>
  )
}
