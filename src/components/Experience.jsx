import { experience, education, awards } from '../data'
import Reveal from './Reveal'
import { ArrowRight, Trophy } from './Icons'

export default function Experience() {
  return (
    <section id="experience" className="divider pattern-grid">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <span className="section-tag">Career / 04</span>
            <h2 className="section-title">Experience &amp; <span className="grad">Timeline</span></h2>
          </div>
          <span className="section-note">Internship + ongoing freelance practice</span>
        </Reveal>

        <div className="timeline">
          {experience.map((e, i) => (
            <Reveal as="article" className="timeline-item" key={e.role} delay={i * 0.1}>
              <div className="timeline-card">
                <span className="timeline-period">{e.period}</span>
                <h3 className="timeline-role">{e.role}</h3>
                <div className="timeline-company">{e.company}</div>
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b}><ArrowRight /> {b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="edu-awards-grid">
          <Reveal as="div" className="edu-card">
            <span className="section-tag">Education</span>
            <div className="edu-top">
              <div>
                <h3 className="edu-degree">{education.degree}</h3>
                <div className="edu-school">{education.school}</div>
                <div className="edu-grad">{education.grad}</div>
              </div>
              <div className="edu-cgpa">
                <strong>{education.cgpa}</strong>
                <span>CGPA</span>
              </div>
            </div>
          </Reveal>
          <Reveal as="div" className="awards-card" delay={0.1}>
            <span className="section-tag">Awards &amp; Community</span>
            <ul>
              {awards.map((a) => (
                <li key={a}><Trophy /> {a}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
