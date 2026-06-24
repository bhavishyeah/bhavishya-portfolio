import { useParams, Navigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { caseStudies } from '../data'

function CaseStudyPage() {
  const { slug } = useParams()
  const study = caseStudies[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!study) return <Navigate to="/" replace />

  return (
    <div className="case-study-page">
      <div className="container">
        {/* Back navigation */}
        <Link to="/" className="cs-back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>Back to Portfolio</span>
        </Link>

        {/* Project heading */}
        <header className="cs-header">
          <span className="section-label">Case Study</span>
          <h1 className="section-title cs-title">{study.name}</h1>
        </header>

        {/* Problem statement */}
        <section className="cs-section">
          <h2 className="cs-section-heading">The Problem</h2>
          <p className="cs-problem">{study.problem}</p>
        </section>

        {/* Architecture & technical decisions */}
        <section className="cs-section">
          <h2 className="cs-section-heading">Architecture &amp; Key Decisions</h2>
          <ul className="cs-decisions">
            {study.decisions.map((decision, i) => (
              <li key={i} className="cs-decision-card">
                <h3 className="cs-decision-title">{decision.title}</h3>
                <p className="cs-decision-desc">{decision.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Media / screenshots */}
        <section className="cs-section">
          <h2 className="cs-section-heading">Screenshots &amp; Diagrams</h2>
          <div className="cs-media-grid">
            {study.media.map((item, i) => (
              <figure key={i} className="cs-media-figure">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="cs-media-img"
                  loading="lazy"
                />
                <figcaption className="cs-media-caption">{item.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* What I'd Improve Next */}
        <section className="cs-section">
          <h2 className="cs-section-heading">What I'd Improve Next</h2>
          <ul className="cs-improvements">
            {study.improvements.map((item, i) => (
              <li key={i} className="cs-improvement-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom back link */}
        <div className="cs-footer-nav">
          <Link to="/" className="btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyPage
