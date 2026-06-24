import { profile, facts, education } from '../data'
import Reveal from './Reveal'
import SectionBg from './SectionBg'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionBg word="ABOUT" />
        <Reveal as="div" className="section-head">
          <span className="section-label">{'// '}<span className="idx">05</span>_about</span>
          <h2 className="section-title">Builder first. <span className="accent">Polish obsessed.</span></h2>
        </Reveal>

        <div className="about-grid">
          <Reveal as="div" className="about-text">
            <p className="lead">{profile.bio}</p>
            <p className="about-summary">{profile.summary}</p>

            <div className="lang-row">
              {profile.languages.map((l) => (
                <span className="lang-chip" key={l.name}><b>{l.name}</b> {l.level}</span>
              ))}
            </div>
          </Reveal>

          <Reveal as="aside" className="about-panel" delay={0.1}>
            <dl className="info-list">
              {facts.map((f) => (
                <div className="info-row" key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="about-edu">
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
          </Reveal>
        </div>
      </div>
    </section>
  )
}
