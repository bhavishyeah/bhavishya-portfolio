import { stack, skillGroups } from '../data'
import Reveal from './Reveal'

export default function Stack() {
  return (
    <section id="stack" className="divider pattern-dots">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <span className="section-tag">Tools / 05</span>
            <h2 className="section-title">Tech <span className="grad">Stack</span></h2>
          </div>
          <span className="section-note">Blue dot = daily driver &middot; Grey = growing</span>
        </Reveal>

        <div className="stack-grid">
          {stack.map((s, i) => (
            <Reveal as="div" className="stack-item" key={s.name} delay={(i % 6) * 0.04}>
              <img src={`https://cdn.simpleicons.org/${s.icon}`} alt={s.name} loading="lazy" />
              <div className="stack-meta">
                <span className="stack-name">{s.name}</span>
                <span className="stack-cat">{s.cat}</span>
              </div>
              <span className={`level-dot ${s.level}`} />
            </Reveal>
          ))}
        </div>

        <div className="skill-grid">
          {skillGroups.map((g, i) => (
            <Reveal as="div" className="skill-card" key={g.label} delay={i * 0.07}>
              <span className="section-tag">{g.label}</span>
              <div className="chips">
                {g.items.map((it) => <span className="chip" key={it}>{it}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
