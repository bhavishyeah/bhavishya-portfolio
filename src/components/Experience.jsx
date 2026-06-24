import { motion } from 'framer-motion'
import { experience } from '../data'
import Reveal from './Reveal'
import SectionBg from './SectionBg'
import { useInView } from '../hooks/useInView'
import { Check } from './Icons'

const ease = [0.22, 1, 0.36, 1]

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

function XpCard({ item, i }) {
  const [ref, inView] = useInView({ threshold: 0.15 })
  const current = /present/i.test(item.period)
  return (
    <motion.article
      ref={ref}
      className={`xp-card ${i === 0 ? 'xp-featured' : ''}`}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease }}
    >
      <span className="xp-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>

      <div className="xp-top">
        <span className="xp-logo">{initials(item.company)}</span>
        <div className="xp-tags">
          {current && (
            <span className="xp-current"><i className="dot" /> Current</span>
          )}
          <span className="xp-period">{item.period}</span>
        </div>
      </div>

      <h3 className="xp-role">{item.role}</h3>
      <div className="xp-company">{item.company}</div>

      <ul className="xp-bullets">
        {item.bullets.map((b) => (
          <li key={b}><Check width={14} height={14} /> {b}</li>
        ))}
      </ul>
    </motion.article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-alt">
      <div className="container">
        <SectionBg word="CAREER" />
        <Reveal as="div" className="section-head">
          <span className="section-label">Career <span className="idx">/ 02</span></span>
          <h2 className="section-title">Professional <span className="accent">Experience</span></h2>
          <p className="section-sub">Freelance build, AI internship &amp; NGO web role — full responsibilities preserved.</p>
        </Reveal>

        <div className="xp-bento">
          {experience.map((e, i) => (
            <XpCard key={e.role + e.company} item={e} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
