import { motion } from 'framer-motion'
import { profile } from '../data'
import { ArrowRight, ArrowUpRight } from './Icons'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <motion.div className="hero-eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
          {profile.name}
          <span className="loc">· {profile.location}</span>
        </motion.div>

        <motion.h1 className="hero-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08, ease }}>
          I BUILD <span className="grad">REACT</span> PRODUCTS.
        </motion.h1>

        <motion.p className="hero-bio" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}>
          {profile.bio}
          <span className="secondary">{profile.secondaryBio}</span>
        </motion.p>

        <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.32, ease }}>
          <a href="#projects" className="btn">View My Work <ArrowRight width={17} height={17} /></a>
          <a href="#contact" className="btn-outline">Hire Me <ArrowUpRight width={17} height={17} /></a>
        </motion.div>

        <motion.div className="hero-status" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <span className="pulse" />{profile.status}
        </motion.div>
      </div>
    </section>
  )
}
