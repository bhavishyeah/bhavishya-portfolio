import { useEffect, useRef, useState } from 'react'
import { experience } from '../data'
import Reveal from './Reveal'
import TextScramble from './TextScramble'
import { ArrowRight } from './Icons'

export default function Experience() {
  const lineRef = useRef(null)
  const [drawH, setDrawH] = useState(0)

  useEffect(() => {
    function onScroll() {
      const el = lineRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // progress: 0 when top of line hits 75% of viewport, 1 when bottom passes 35%
      const start = vh * 0.75
      const end = vh * 0.35
      const total = r.height + (start - end)
      const passed = start - r.top
      const p = Math.max(0, Math.min(1, passed / total))
      setDrawH(p * r.height)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="experience" className="glow-violet">
      <div className="container section-inner">
        <div className="section-head">
          <div>
            <span className="section-label"><span className="bar" /><TextScramble text="CAREER" /> <span className="idx">/ 03</span></span>
            <h2 className="section-title">Experience &amp; <span className="grad">Timeline</span></h2>
          </div>
          <span className="section-note">Freelance build, AI internship &amp; NGO web role — full responsibilities preserved.</span>
        </div>

        <div className="timeline" ref={lineRef}>
          <div className="timeline-line">
            <div className="draw" style={{ height: drawH }} />
          </div>
          {experience.map((e, i) => (
            <div className={`tl-item ${i % 2 === 0 ? 'left' : 'right'}`} key={e.role + e.company}>
              <span className="tl-node" />
              <Reveal as="div" className="tl-card" delay={0.05}>
                <span className="tl-period">{e.period}</span>
                <h3 className="tl-role">{e.role}</h3>
                <div className="tl-company">{e.company}</div>
                <ul>
                  {e.bullets.map((b) => <li key={b}><ArrowRight width={15} height={15} /> {b}</li>)}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
