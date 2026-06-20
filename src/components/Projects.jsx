import { projects } from '../data'
import Reveal from './Reveal'
import ProjectRow from './ProjectRow'

export default function Projects() {
  return (
    <section id="projects" className="divider pattern-glow">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <span className="section-tag">Selected Work / 03</span>
            <h2 className="section-title">Featured <span className="grad">Projects</span></h2>
          </div>
          <span className="section-note">Ranked by scope &amp; impact, not chronology</span>
        </Reveal>

        <div className="projects-list">
          {projects.map((p, i) => (
            <ProjectRow key={p.name} project={p} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}
