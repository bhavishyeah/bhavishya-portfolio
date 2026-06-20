import { useEffect, useState } from 'react'
import { nav, profile } from '../data'
import Magnetic from './Magnetic'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    function onScroll() {
      const y = window.scrollY
      setScrolled(y > 40)
      if (y > 160 && y > lastY) setHidden(true)
      else setHidden(false)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <a href="#hero" className="nav-brand">
        <span className="dot" />
        {profile.shortName}
      </a>
      <nav className="nav-links">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <Magnetic strength={0.4}>
        <a href="#contact" className="nav-cta">
          Let&rsquo;s talk
        </a>
      </Magnetic>
      <a href="#contact" className="nav-burger">Menu</a>
    </header>
  )
}
