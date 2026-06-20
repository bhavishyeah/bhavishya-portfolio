import Reveal from './Reveal'

export default function ProjectRow({ project }) {
  return (
    <Reveal as="article" className="project-row">
      <div className="project-index">{project.index}</div>
      <div className="project-main">
        <div>
          <div className="project-head">
            <h3 className="project-name">{project.name}</h3>
            <span className="project-badge">{project.tag}</span>
          </div>
          <p className="project-tagline">{project.tagline}</p>
          <p className="project-desc">{project.desc}</p>
          <ul className="project-bullets">
            {project.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="project-chips">
            {project.stack.map((s) => (
              <span className="project-chip" key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div
          className="project-visual"
          style={{ '--p-accent': project.accent }}
        >
          <div className="grain" />
          <span className="corner-tag">{project.tag}</span>
          <span className="glyph" style={{ color: project.accent }}>
            {project.name.slice(0, 2)}
          </span>
          <span className="corner-cat">{project.category}</span>
          <span className="underline-bar" style={{ background: project.accent }} />
        </div>
      </div>
    </Reveal>
  )
}
