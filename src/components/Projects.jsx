import { projects } from '../data'
import ProjectCard from './ProjectCard'
import TextScramble from './TextScramble'

export default function Projects() {
  return (
    <section id="projects" className="dot-grid glow-lime">
      <div className="container section-inner">
        <div className="section-head">
          <div>
            <span className="section-label"><span className="bar" /><TextScramble text="SELECTED WORK" /> <span className="idx">/ 06</span></span>
            <h2 className="section-title">Featured <span className="grad">Projects</span></h2>
          </div>
          <span className="section-note">Six builds across products, 3D, social impact &amp; realtime — full case content preserved.</span>
        </div>

        <div className="projects-stack">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={(i % 2) * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}
