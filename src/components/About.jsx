import { profile, facts } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="divider">
      <div className="container about-grid">
        <Reveal>
          <span className="section-tag">About / 06</span>
          <h2>Builder first.<br /><em>Polish</em> obsessed.</h2>
          <p>{profile.bio1}</p>
          <p>{profile.bio2}</p>
        </Reveal>
        <Reveal className="fact-grid" delay={0.1}>
          {facts.map((f) => (
            <div className="fact" key={f.label}>
              <label>{f.label}</label>
              <strong>{f.value}</strong>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
