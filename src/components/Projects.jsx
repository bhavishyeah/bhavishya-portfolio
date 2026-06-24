import { projects } from '../data'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import SectionBg from './SectionBg'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionBg word="PROJECTS" num={1} />
        <Reveal as="div" className="section-head">
          <h2 className="section-title">Featured <span className="accent">Projects</span></h2>
          <p className="section-sub">Six builds across products, 3D, social impact, healthcare &amp; realtime systems.</p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
