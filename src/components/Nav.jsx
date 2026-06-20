import { useEffect, useState } from 'react'
import { nav, profile } from '../data'
import { ArrowUpRight } from './Icons'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    function onScroll() {
      const y = window.scrollY
      setScrolled(y > 30)
      setHidden(y > 240 && y > lastY)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <a href="#hero" className="nav-brand"><span className="dot" />{profile.shortName}</a>
      <nav className="nav-links">
        {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a href="#contact" className="nav-cta">Let&rsquo;s talk <ArrowUpRight width={14} height={14} /></a>
      <a href="#contact" className="nav-burger">Menu</a>
    </header>
  )
}
