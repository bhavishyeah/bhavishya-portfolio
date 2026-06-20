import { profile, facts, education } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-label">About <span className="idx">/ 06</span></span>
          <h2 className="section-title">Builder first. <span className="accent">Polish obsessed.</span></h2>
        </Reveal>

        <div className="about-grid">
          <Reveal as="div" className="about-text">
            <p className="lead">{profile.bio}</p>
            <p>{profile.summary}</p>

            <div className="edu-card">
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
