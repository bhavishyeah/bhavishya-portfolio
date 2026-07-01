import { motion } from 'framer-motion'
import { profile } from '../data'
import { ArrowRight, ArrowUpRight, Download } from './Icons'
import Typewriter from './Typewriter'

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
          I BUILD<br />
          <span className="grad">&ldquo;<Typewriter words={['SCALABLE', 'BEAUTIFUL', 'REACT', 'REAL-TIME', 'POLISHED']} />&rdquo;</span><br />
          PRODUCTS.
        </motion.h1>

        <motion.p className="hero-bio" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}>
          {profile.bio}
          <span className="secondary">{profile.secondaryBio}</span>
        </motion.p>

        <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.32, ease }}>
          <a href="#projects" className="btn">View My Work <ArrowRight width={17} height={17} /></a>
          <a href="#contact" className="btn-outline">Start A Project <ArrowUpRight width={17} height={17} /></a>
          <a href="/resume.pdf" className="btn-ghost" target="_blank" rel="noreferrer" download>Download Resume <Download width={16} height={16} /></a>
        </motion.div>

        <motion.div className="hero-status" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <span className="pulse" />{profile.status}
        </motion.div>
      </div>
    </section>
  )
}
