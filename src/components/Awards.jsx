import { awards, workshops, volunteering } from '../data'
import Reveal from './Reveal'
import TextScramble from './TextScramble'
import CountUp from './CountUp'
import { Trophy, Star, Check } from './Icons'

export default function Awards() {
  return (
    <section id="awards" className="glow-lime">
      <div className="container section-inner">
        <div className="section-head">
          <div>
            <span className="section-label"><span className="bar" /><TextScramble text="AWARDS & COMMUNITY" /> <span className="idx">/ 05</span></span>
            <h2 className="section-title">Awards &amp; <span className="grad">Recognition</span></h2>
          </div>
          <span className="section-note">Competitions, workshops &amp; volunteering — all preserved.</span>
        </div>

        <div className="awards-constellation">
          {awards.map((a, i) => (
            <Reveal as="div" className="award-node" key={a.title} delay={(i % 3) * 0.06}>
              <Trophy className="star" width={22} height={22} />
              <h4>{a.title}</h4>
              {a.detail && <p>{a.detail}</p>}
            </Reveal>
          ))}
        </div>

        <div className="community-grid">
          <Reveal as="div" className="workshops-card">
            <span className="section-label" style={{ marginBottom: '0.4rem' }}><Star width={14} height={14} /> Workshops &amp; Events</span>
            <ul>
              {workshops.map((w) => <li key={w}><Check width={15} height={15} /> {w}</li>)}
            </ul>
          </Reveal>

          <Reveal as="div" className="volunteer-card" delay={0.1}>
            <div className="v-stat"><CountUp value={volunteering.stat.value} suffix={volunteering.stat.suffix} /></div>
            <div className="v-stat-lbl">{volunteering.stat.label}</div>
            <h4>{volunteering.role}</h4>
            <div className="v-org">{volunteering.org}</div>
            <div className="v-period">{volunteering.period}</div>
            <ul>
              {volunteering.bullets.map((b) => <li key={b}><Check width={14} height={14} /> {b}</li>)}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
