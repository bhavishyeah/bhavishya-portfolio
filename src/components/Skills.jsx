import { lazy } from 'react'
import { skillCategories, techGalaxy } from '../data'
import Reveal from './Reveal'
import TextScramble from './TextScramble'
import SkillMotif from './SkillMotif'
import Lazy3D from './Lazy3D'

const TechGalaxy = lazy(() => import('./three/TechGalaxy'))

export default function Skills() {
  return (
    <section id="skills" className="dot-grid">
      <div className="container section-inner">
        <div className="section-head">
          <div>
            <span className="section-label"><span className="bar" /><TextScramble text="TOOLS" /> <span className="idx">/ 07</span></span>
            <h2 className="section-title">Tech <span className="grad">Stack</span> &amp; Skills</h2>
          </div>
          <span className="section-note">Every technology preserved across 7 categories.</span>
        </div>

        <Reveal as="div" className="galaxy-wrap">
          <Lazy3D
            fallback={<div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontFamily: 'JetBrains Mono, monospace', color: '#a1a1a1', fontSize: '0.8rem', letterSpacing: '0.1em' }}>TECH GALAXY</div>}
          >
            <TechGalaxy nodes={techGalaxy} />
          </Lazy3D>
        </Reveal>

        <div className="skills-grid">
          {skillCategories.map((c, i) => (
            <Reveal as="div" className="skill-quad" key={c.key} delay={(i % 2) * 0.06} style={{ borderColor: 'var(--line)' }}>
              <SkillMotif type={c.motif} color={c.accent} />
              <div className="quad-head">
                <span className="quad-dot" style={{ background: c.accent }} />
                <h3>{c.label}</h3>
              </div>
              <div className="chips">
                {c.items.map((it) => <span className="chip" key={it}>{it}</span>)}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="skills-legend" style={{ marginTop: '2rem' }}>
          <span className="key"><span className="sw" style={{ background: '#a3e635' }} /> Lime = Daily Driver</span>
          <span className="key"><span className="sw" style={{ background: '#8b5cf6' }} /> Violet = Growing</span>
        </Reveal>
      </div>
    </section>
  )
}
