import { projects } from '../data'
import Reveal from './Reveal'
import ProjectRow from './ProjectRow'

export default function Projects() {
  return (
    <section id="projects" className="divider">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <span className="section-tag">Selected Work / 03</span>
            <h2 className="section-title">Projects</h2>
          </div>
          <span className="section-note">Ranked by scope &amp; impact, not chronology</span>
        </Reveal>
      </div>
      <div className="projects-list">
        {projects.map((p) => (
          <ProjectRow key={p.name} project={p} />
        ))}
      </div>
    </section>
  )
}
