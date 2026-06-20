import { lazy, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import Lazy3D from './Lazy3D'
import CountUp from './CountUp'
import { Check, ArrowRight } from './Icons'

const CarPreview = lazy(() => import('./three/CarPreview'))

export default function ProjectCard({ project, delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.15 })
  const reduced = usePrefersReducedMotion()
  const cardRef = useRef(null)

  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 200, damping: 18 })
  const sry = useSpring(ry, { stiffness: 200, damping: 18 })
  const rotateX = useTransform(srx, (v) => `${v}deg`)
  const rotateY = useTransform(sry, (v) => `${v}deg`)

  function onMove(e) {
    if (reduced) return
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * 16) // max ~8deg each side
    rx.set(-py * 16)
  }
  function onLeave() { rx.set(0); ry.set(0) }

  const tag = project.tag
  const tagColor = project.accent

  return (
    <div className={`project-row ${project.layout}`} style={{ perspective: 1200 }}>
      <motion.article
        ref={(n) => { cardRef.current = n; ref.current = n }}
        className={`project-card ${project.layout}`}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="glow-border" />

        <div className="p-visual">
          {project.statBadge && (
            <span className="p-stat-badge">
              <b><CountUp value={project.statBadge.value} suffix={project.statBadge.suffix} /></b> {project.statBadge.label}
            </span>
          )}
          {project.is3D ? (
            <Lazy3D
              fallback={<div className="p-thumb" style={{ color: project.accent }}>GTR</div>}
            >
              <CarPreview />
            </Lazy3D>
          ) : (
            <div className="p-thumb" style={{ color: project.accent }}>{project.name.slice(0, 2)}</div>
          )}
        </div>

        <div className="p-head">
          <span className="p-index" style={{ background: project.accent }}>{project.index}</span>
          <div>
            <h3 className="p-name">{project.name}</h3>
          </div>
          <span className="p-badge" style={{ color: tagColor, borderColor: tagColor }}>{tag}</span>
        </div>
        <div className="p-cat">{project.category}{project.date ? ` · ${project.date}` : ''}</div>

        <p className="p-tagline">{project.tagline}</p>

        <ul className="p-bullets">
          {project.bullets.map((b) => <li key={b}><Check width={15} height={15} /> {b}</li>)}
        </ul>

        <div className="p-chips">
          {project.stack.map((s) => <span className="p-chip" key={s}>{s}</span>)}
        </div>

        <a className="p-view" href="#contact">View Project <ArrowRight width={14} height={14} /></a>
      </motion.article>
    </div>
  )
}
