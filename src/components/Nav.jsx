import { useEffect, useState } from 'react'
import { nav, profile } from '../data'
import Magnetic from './Magnetic'
import { ArrowUpRight } from './Icons'

export default function Nav() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    function onScroll() {
      const y = window.scrollY
      setHidden(y > 220 && y > lastY)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${hidden ? 'hidden' : ''}`}>
      <a href="#hero" className="nav-brand"><span className="dot" />{profile.shortName}</a>
      <nav className="nav-pill">
        {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <Magnetic strength={0.4}>
        <a href="#contact" className="nav-cta">Let&rsquo;s talk <ArrowUpRight width={13} height={13} /></a>
      </Magnetic>
      <a href="#contact" className="nav-burger">Menu</a>
    </header>
  )
}
