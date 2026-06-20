import { motion } from 'framer-motion'
import { experience } from '../data'
import Reveal from './Reveal'
import { useInView } from '../hooks/useInView'
import { Check } from './Icons'

const ease = [0.22, 1, 0.36, 1]

function TimelineItem({ item, i }) {
  const [ref, inView] = useInView({ threshold: 0.2 })
  return (
    <motion.div
      ref={ref}
      className="tl-item"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease }}
    >
      <div className="tl-card">
        <div className="tl-period">{item.period}</div>
        <h3 className="tl-role">{item.role}</h3>
        <div className="tl-company">{item.company}</div>
        <ul>
          {item.bullets.map((b) => <li key={b}><Check width={15} height={15} /> {b}</li>)}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-alt">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-label">Career <span className="idx">/ 03</span></span>
          <h2 className="section-title">Professional <span className="accent">Experience</span></h2>
          <p className="section-sub">Freelance build, AI internship &amp; NGO web role — full responsibilities preserved.</p>
        </Reveal>

        <div className="timeline">
          {experience.map((e, i) => (
            <TimelineItem key={e.role + e.company} item={e} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
