import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data'
import Reveal from './Reveal'
import SectionBg from './SectionBg'

const SCROLL_SPEED = 2.0
const FLIP_THRESHOLD = 0.7
const LERP_FACTOR = 0.08 // Smoothing factor — lower = smoother/slower interpolation

function NavArrow({ progress }) {
  const pointsUp = progress > FLIP_THRESHOLD
  const targetId = pointsUp ? 'hero' : 'experience'
  const label = pointsUp ? 'Back to top' : 'Skip section'

  const handleClick = (e) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'instant' })
    }
  }

  return (
    <a href={`#${targetId}`} className="projects-nav-arrow" aria-label={label} onClick={handleClick}>
      <motion.span
        className="projects-nav-arrow__icon"
        animate={{ rotate: pointsUp ? 180 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 4v12M5 11l5 5 5-5" />
        </svg>
      </motion.span>
      <span className="projects-nav-arrow__label">{label}</span>
    </a>
  )
}

function ProjectSlide({ project, isActive }) {
  const initials = project.name
    .replace(/[^A-Za-z0-9 ]/g, '')
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const videoRef = useRef(null)

  // Play video when card is active, pause when not
  useEffect(() => {
    if (!videoRef.current) return
    if (isActive) {
      videoRef.current.play().catch(() => {})
    } else {
      videoRef.current.pause()
    }
  }, [isActive])

  const hasImage = project.image && !imgError
  const hasVideo = project.video

  return (
    <article className="pslide">
      <div className="pslide__image grain" style={{ background: project.gradient }}>
        {/* Screenshot layer */}
        {hasImage && (
          <img
            className={`pslide__screenshot ${imgLoaded ? 'loaded' : ''}`}
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}

        {/* Video layer — crossfades in when card is active */}
        {hasVideo && (
          <video
            ref={videoRef}
            className={`pslide__video ${isActive && imgLoaded ? 'active' : ''}`}
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
          />
        )}

        {/* Fallback initials (visible when no image loaded) */}
        {!imgLoaded && (
          <span className="pslide__initials">{initials}</span>
        )}

        <span className="pslide__badge grain">{project.badge}</span>
        <span className="pslide__num">{project.index}</span>
      </div>
      <div className="pslide__content">
        <div className="pslide__row">
          <div className="pslide__info">
            <span className="pslide__cat">{project.category}</span>
            <h3 className="pslide__title">{project.name}</h3>
            {project.date && <span className="pslide__date">{project.date}</span>}
            <p className="pslide__desc">{project.description}</p>
          </div>
          <div className="pslide__right">
            <div className="pslide__tags">
              {project.tech.map((t) => (
                <span className="pslide__tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="pslide__actions">
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                <span>Live Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
              </a>
              {project.caseStudyPath && (
                <Link className="project-link case-study-link" to={project.caseStudyPath}>
                  <span>Case Study</span>
                </Link>
              )}
              {project.repo && (
                <a className="project-code" href={project.repo} target="_blank" rel="noreferrer" aria-label={`View ${project.name} code on GitHub`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const wrapperRef = useRef(null)
  const trackRef = useRef(null)
  const slidesRef = useRef([])
  const rafRef = useRef(null)
  const currentRef = useRef(0) // current interpolated position
  const targetRef = useRef(0) // target position from scroll
  const [uiState, setUiState] = useState({ activeIdx: 0, progress: 0 })
  const count = projects.length

  useEffect(() => {
    let running = true

    const onScroll = () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return
      const rect = wrapper.getBoundingClientRect()
      const totalScroll = wrapper.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll))
      targetRef.current = progress

      // Toggle body class for nav/reactions hiding
      const inProjects = scrolled > 0 && scrolled < totalScroll
      document.body.classList.toggle('projects-active', inProjects)
    }

    // Smooth animation loop — lerp toward target
    const animate = () => {
      if (!running) return

      const target = targetRef.current
      const current = currentRef.current
      const diff = target - current

      // Lerp: smoothly interpolate toward target
      if (Math.abs(diff) > 0.0001) {
        currentRef.current += diff * LERP_FACTOR
      } else {
        currentRef.current = target
      }

      const progress = currentRef.current
      const activeIndex = progress * (count - 1)

      // Direct DOM updates — no React re-render needed
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${activeIndex * 100}vw)`
      }

      // Update individual slide opacity/scale
      slidesRef.current.forEach((el, i) => {
        if (!el) return
        const dist = Math.min(Math.abs(activeIndex - i), 1)
        const scale = 1 - dist * 0.06
        const opacity = 1 - dist * 0.5
        el.style.transform = `scale(${scale})`
        el.style.opacity = opacity
      })

      // Update React state only when active dot or arrow flip changes
      const newIdx = Math.round(activeIndex)
      setUiState((prev) => {
        if (prev.activeIdx !== newIdx || Math.abs(prev.progress - progress) > 0.05) {
          return { activeIdx: newIdx, progress }
        }
        return prev
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      running = false
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
      document.body.classList.remove('projects-active')
    }
  }, [count])

  return (
    <>
      <div className="projects-intro" id="projects">
        <div className="container" style={{ position: 'relative' }}>
          <SectionBg word="PROJECTS" num={1} />
          <Reveal as="div" className="section-head">
            <h2 className="section-title">Featured <span className="accent">Projects</span></h2>
            <p className="section-sub">Six builds across products, 3D, social impact, healthcare &amp; realtime systems.</p>
          </Reveal>
        </div>
      </div>

      <div
        className="projects-hijack"
        ref={wrapperRef}
        style={{ height: `${count * 100 * SCROLL_SPEED}vh` }}
      >
        <div className="projects-pin">
          <div className="projects-pin__track" ref={trackRef}>
            {projects.map((p, i) => (
              <div
                key={p.name}
                className="pslide-wrap"
                ref={(el) => { slidesRef.current[i] = el }}
              >
                <ProjectSlide project={p} isActive={uiState.activeIdx === i} />
              </div>
            ))}
          </div>

          <div className="projects-pin__dots">
            {projects.map((_, i) => (
              <span
                key={i}
                className={`projects-dot${uiState.activeIdx === i ? ' active' : ''}`}
              />
            ))}
          </div>

          <div className="projects-pin__skip">
            <NavArrow progress={uiState.progress} />
          </div>
        </div>
      </div>
    </>
  )
}
