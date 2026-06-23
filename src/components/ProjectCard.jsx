import { useState } from 'react'
import Reveal from './Reveal'
import { ExternalLink } from './Icons'
import { techSlug } from '../data'

function TechTag({ name }) {
  const slug = techSlug(name)
  const [err, setErr] = useState(false)
  return (
    <span className="project-tag">
      {slug && !err && (
        <img
          className="tag-logo"
          src={`https://cdn.simpleicons.org/${slug}`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={() => setErr(true)}
        />
      )}
      {name}
    </span>
  )
}

export default function ProjectCard({ project, delay = 0 }) {
  const initials = project.name.replace(/[^A-Za-z0-9 ]/g, '').split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()
  return (
    <Reveal as="article" className="project-card grain" delay={delay}>
      <div className="project-thumb grain" style={{ background: project.gradient }}>
        <span className="initials">{initials}</span>
        <span className="badge grain">{project.badge}</span>
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
          {project.tech.map((t) => <TechTag name={t} key={t} />)}
        </div>
        <a className="project-link" href={project.link} target={project.link !== '#' ? '_blank' : undefined} rel="noreferrer">
          <span>Live Demo</span> <ExternalLink width={15} height={15} />
        </a>
      </div>
    </Reveal>
  )
}
