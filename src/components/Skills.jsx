import { useState } from 'react'
import { skillCategoriesScored } from '../data'
import Reveal from './Reveal'
import SectionBg from './SectionBg'

function SkillIcon({ slug, name }) {
  const [err, setErr] = useState(false)
  const letter = name.replace(/[^A-Za-z0-9]/g, '').charAt(0).toUpperCase()
  if (!slug || err) return <span className="letter">{letter}</span>
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={name}
      loading="lazy"
      onError={() => setErr(true)}
    />
  )
}

// Modern, minimal proficiency meter — five diamond pips, filled = level.
function SkillRating({ score }) {
  return (
    <span className="skill-rating" title={`${score} / 5`} aria-label={`Proficiency ${score} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} className={`pip ${n <= score ? 'on' : ''}`} viewBox="0 0 10 10" width="8" height="8" aria-hidden="true">
          <path d="M5 0 L10 5 L5 10 L0 5 Z" />
        </svg>
      ))}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionBg word="SKILLS" />
        <Reveal as="div" className="section-head">
          <span className="section-label">Tech Stack <span className="idx">/ 05</span></span>
          <h2 className="section-title">Skills &amp; <span className="accent">Technologies</span></h2>
          <p className="section-sub">Every technology, organised by category. Proficiency shown out of five.</p>
        </Reveal>

        <div className="skills-wrap">
          {skillCategoriesScored.map((cat, i) => (
            <Reveal as="div" key={cat.label} delay={(i % 3) * 0.05}>
              <h3 className="skill-cat-head">{cat.label} <span className="count">{cat.items.length}</span></h3>
              <div className="skill-row">
                {cat.items.map((s) => (
                  <span className="skill-pill grain" key={s.name} title={s.name}>
                    <SkillIcon slug={s.slug} name={s.name} />
                    <span className="sname">{s.name}</span>
                    <SkillRating score={s.score} />
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="skills-legend">
          <span className="key">
            <span className="skill-rating">
              <svg className="pip on" viewBox="0 0 10 10" width="8" height="8"><path d="M5 0 L10 5 L5 10 L0 5 Z" /></svg>
              <svg className="pip" viewBox="0 0 10 10" width="8" height="8"><path d="M5 0 L10 5 L5 10 L0 5 Z" /></svg>
            </span>
            Filled diamonds indicate proficiency / 5
          </span>
        </Reveal>
      </div>
    </section>
  )
}
