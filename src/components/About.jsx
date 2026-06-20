import { lazy } from 'react'
import { profile, facts, education } from '../data'
import Reveal from './Reveal'
import TextScramble from './TextScramble'
import Lazy3D from './Lazy3D'

const AmbientShapes = lazy(() => import('./three/AmbientShapes'))

export default function About() {
  return (
    <section id="about" className="dot-grid">
      <Lazy3D fallback={null}><AmbientShapes variant="b" /></Lazy3D>
      <div className="container section-inner">
        <div className="section-head" style={{ marginBottom: '2.5rem' }}>
          <div>
            <span className="section-label"><span className="bar" /><TextScramble text="ABOUT" /> <span className="idx">/ 06</span></span>
            <h2 className="section-title">Builder first. <span className="grad">Polish obsessed.</span></h2>
          </div>
        </div>

        <div className="about-grid">
          <Reveal as="div" className="about-left">
            <h2>Engineered, <em>not assembled.</em></h2>
            <p>{profile.bio}</p>
            <p className="about-summary">{profile.summary}</p>

            <div className="edu-strip">
              <div>
                <div className="e-deg">{education.degree}</div>
                <div className="e-school">{education.school}</div>
                <div className="e-grad">{education.grad}</div>
              </div>
              <div className="e-cgpa">
                <strong>{education.cgpa}</strong>
                <span>CGPA{education.cgpaOutOf}</span>
              </div>
            </div>

            <div className="lang-row">
              {profile.languages.map((l) => (
                <span className="lang-chip" key={l.name}><b>{l.name}</b> — {l.level}</span>
              ))}
            </div>
          </Reveal>

          <Reveal as="div" className="bento" delay={0.1}>
            {facts.map((f) => (
              <div className="cell" key={f.label}>
                <label>{f.label}</label>
                <strong>{f.value}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
