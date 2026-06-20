import Reveal from './Reveal'
import { Check } from './Icons'

export default function ProjectRow({ project, delay = 0 }) {
  return (
    <Reveal
      as="article"
      className="project-card"
      delay={delay}
      style={{ '--p-accent': project.accent, '--p-grad': project.grad }}
    >
      <div className="project-info">
        <div className="project-head">
          <span className="project-index">{project.index}</span>
          <h3 className="project-name">{project.name}</h3>
          <span className="project-badge">{project.tag}</span>
        </div>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-desc">{project.desc}</p>
        <ul className="project-bullets">
          {project.bullets.map((b) => (
            <li key={b}><Check /> {b}</li>
          ))}
        </ul>
        <div className="project-chips">
          {project.stack.map((s) => (
            <span className="project-chip" key={s}>{s}</span>
          ))}
        </div>
      </div>

      <div className="project-visual" style={{ background: project.grad }}>
        <span className="corner-tag">{project.tag}</span>
        <span className="glyph">{project.name.slice(0, 2)}</span>
        <span className="corner-cat">{project.category}</span>
      </div>
    </Reveal>
  )
}
