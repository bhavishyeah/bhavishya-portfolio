import { useEffect, useRef, useState } from 'react'
import { awards, workshops, volunteering } from '../data'
import Reveal from './Reveal'
import SectionBg from './SectionBg'
import Carousel from './Carousel'
import CountUp from './CountUp'
import { Trophy, Check, Users } from './Icons'

export default function Awards() {
  const sectionRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  // Auto-play the card carousels only while the section is actually on screen.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="awards" className="section-alt" ref={sectionRef}>
      <div className="container">
        <SectionBg word="IMPACT" />
        <Reveal as="div" className="section-head">
          <span className="section-label">{'// '}<span className="idx">04</span>_recognition</span>
          <h2 className="section-title">Recognition &amp; <span className="accent">Impact</span></h2>
        </Reveal>

        <div className="awards-grid">
          {awards.map((a, i) => (
            <Reveal as="article" className="award-card" key={a.title} delay={(i % 3) * 0.06}>
              <div className="award-top">
                <Trophy className="trophy" width={18} height={18} />
                {a.date && <span className="award-date">{a.date}</span>}
              </div>

              <Carousel images={a.images} playing={playing} start={i} interval={3000 + i * 250} />

              <div className="award-body">
                <span className="award-rank">{a.rank}</span>
                <div className="award-title">{a.title}</div>
                {a.event && <div className="award-event">{a.event}</div>}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="community-grid">
          <Reveal as="div" className="workshops-card">
            <h3>Workshops &amp; Events</h3>
            <ul>
              {workshops.map((w) => <li key={w}><Check width={15} height={15} /> {w}</li>)}
            </ul>
          </Reveal>

          <Reveal as="div" className="volunteer-card" delay={0.1}>
            <Users className="v-icon" width={26} height={26} />
            <div className="v-stat"><CountUp value={volunteering.stat.value} suffix={volunteering.stat.suffix} /></div>
            <div className="v-stat-lbl">{volunteering.stat.label}</div>
            <div className="v-role">{volunteering.role}</div>
            <div className="v-org">{volunteering.org}</div>
            <div className="v-period">{volunteering.period}</div>
            <div className="v-detail">{volunteering.detail}</div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
