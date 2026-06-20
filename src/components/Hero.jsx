import { motion } from 'framer-motion'
import { profile, stats } from '../data'
import Magnetic from './Magnetic'
import Typewriter from './Typewriter'
import { ArrowRight, ArrowUpRight } from './Icons'

const ease = [0.16, 1, 0.3, 1]

function Line({ children, delay }) {
  return (
    <span className="line">
      <motion.span
        style={{ display: 'block' }}
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <motion.div
          className="hero-eyebrow-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="status-pill">
            <span className="pulse" />
            {profile.status}
          </span>
          <span className="eyebrow">
            <span className="num">01</span> {profile.location}
          </span>
        </motion.div>

        <h1>
          <Line delay={0.15}>I BUILD</Line>
          <Line delay={0.28}>
            <span className="accent-text">DIGITAL</span>&nbsp;THINGS.
          </Line>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Typewriter prefix="$ specialising in" words={profile.typewriter} />
        </motion.div>

        <div className="hero-sub">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
          >
            {profile.role} crafting polished platforms, payment flows, real-time systems,
            and AI-assisted ideas &mdash; engineered, not assembled.
          </motion.p>
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
          >
            {stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease }}
        >
          <Magnetic>
            <a href="#projects" className="btn">View Projects <ArrowRight style={{ width: 16, height: 16 }} /></a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn-outline">Hire Me <ArrowUpRight style={{ width: 16, height: 16 }} /></a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <span className="bar" />
        Scroll
      </motion.div>
    </section>
  )
}
