import { useState } from 'react'
import { skillCategories } from '../data'
import Reveal from './Reveal'

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

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-label">Tech Stack <span className="idx">/ 05</span></span>
          <h2 className="section-title">Skills &amp; <span className="accent">Technologies</span></h2>
          <p className="section-sub">Every technology, organised by category. Filled dot = daily driver, outlined = growing.</p>
        </Reveal>

        <div className="skills-wrap">
          {skillCategories.map((cat, i) => (
            <Reveal as="div" key={cat.label} delay={(i % 3) * 0.05}>
              <h3 className="skill-cat-head">{cat.label} <span className="count">{cat.items.length}</span></h3>
              <div className="skill-row">
                {cat.items.map((s) => (
                  <span className="skill-pill" key={s.name}>
                    <SkillIcon slug={s.slug} name={s.name} />
                    <span className="sname">{s.name}</span>
                    <span className={`prof ${s.level}`} title={s.level === 'core' ? 'Daily driver' : 'Growing'} />
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="skills-legend">
          <span className="key"><span className="prof core" /> Daily driver</span>
          <span className="key"><span className="prof growing" /> Growing</span>
        </Reveal>
      </div>
    </section>
  )
}
