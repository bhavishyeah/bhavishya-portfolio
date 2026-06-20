import Reveal from './Reveal'
import { ExternalLink } from './Icons'

export default function ProjectCard({ project, delay = 0 }) {
  const initials = project.name.replace(/[^A-Za-z0-9 ]/g, '').split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()
  return (
    <Reveal as="article" className="project-card" delay={delay}>
      <div className="project-thumb" style={{ background: project.gradient }}>
        <span className="initials">{initials}</span>
        <span className="badge">{project.badge}</span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span className="project-num">{project.index}</span>
          <span className="project-cat">{project.category}</span>
        </div>
        <h3 className="project-title">{project.name}</h3>
        {project.date && <div className="project-date">{project.date}</div>}
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tech.map((t) => <span className="project-tag" key={t}>{t}</span>)}
        </div>
        <a className="project-link" href={project.link} target={project.link !== '#' ? '_blank' : undefined} rel="noreferrer">
          <span>Live Demo</span> <ExternalLink width={15} height={15} />
        </a>
      </div>
    </Reveal>
  )
}
