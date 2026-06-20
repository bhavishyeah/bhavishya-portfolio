import { awards, workshops, volunteering } from '../data'
import Reveal from './Reveal'
import CountUp from './CountUp'
import { Trophy, Check, Users } from './Icons'

export default function Awards() {
  return (
    <section id="awards" className="section-alt">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-label">Awards &amp; Community <span className="idx">/ 05</span></span>
          <h2 className="section-title">Recognition &amp; <span className="accent">Impact</span></h2>
        </Reveal>

        <div className="awards-grid">
          {awards.map((a, i) => (
            <Reveal as="div" className="award-card" key={a.title} delay={(i % 2) * 0.06}>
              <Trophy className="trophy" width={22} height={22} />
              <div>
                <div className="award-title">{a.title}</div>
                {a.event && <div className="award-event">{a.event}</div>}
                {a.date && <div className="award-date">{a.date}</div>}
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
