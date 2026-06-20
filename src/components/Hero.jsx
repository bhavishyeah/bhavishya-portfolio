import { lazy } from 'react'
import { motion } from 'framer-motion'
import { profile, stats } from '../data'
import Magnetic from './Magnetic'
import CountUp from './CountUp'
import Typewriter from './Typewriter'
import Lazy3D from './Lazy3D'
import { ArrowRight, ArrowUpRight } from './Icons'

const HeroParticles = lazy(() => import('./three/HeroParticles'))
const ease = [0.16, 1, 0.3, 1]

function Line({ children, delay }) {
  return (
    <span className="line">
      <motion.span
        style={{ display: 'block' }}
        initial={{ y: '115%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.05, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <Lazy3D always fallback={null}>
        <HeroParticles />
      </Lazy3D>

      <div className="container">
        <motion.div
          className="hero-top"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="hero-id">
            <div className="nm">{profile.name}</div>
            <div className="rl">{profile.role} · {profile.location}</div>
          </div>
          <span className="status-pill"><span className="pulse" />{profile.status}</span>
        </motion.div>

        <h1 className="hero-title">
          <Line delay={0.15}><span className="fill">I BUILD</span></Line>
          <Line delay={0.3}><span className="accent">REACT</span> <span className="stroke">PRODUCTS.</span></Line>
        </h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }}>
          <div className="hero-typewriter">
            <span className="tw-prefix">$ building</span>
            <Typewriter words={profile.typewriter} />
          </div>
        </motion.div>

        <div className="hero-sub">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
          >
            {profile.secondaryTagline}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease }}
          >
            <Magnetic><a href="#projects" className="btn">View Work <ArrowRight /></a></Magnetic>
            <Magnetic><a href="#contact" className="btn-outline">Hire Me <ArrowUpRight /></a></Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
        >
          {stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <strong><CountUp value={s.value} suffix={s.suffix} decimals={s.decimals || 0} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div className="scroll-cue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.4 }}>
        <span className="ln" />
        Scroll
      </motion.div>
    </section>
  )
}
