import { stack, skillGroups } from '../data'
import Reveal from './Reveal'

export default function Stack() {
  return (
    <section id="stack" className="divider">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <span className="section-tag">Tools / 05</span>
            <h2 className="section-title">Tech Stack</h2>
          </div>
          <span className="section-note">Lime = daily driver &middot; Violet = growing</span>
        </Reveal>

        <Reveal className="stack-grid">
          {stack.map((s) => (
            <div className="stack-item" key={s.name}>
              <img src={`https://cdn.simpleicons.org/${s.icon}`} alt={s.name} loading="lazy" />
              <div className="stack-meta">
                <span className="stack-name">{s.name}</span>
                <span className="stack-cat">{s.cat}</span>
              </div>
              <span className={`level-dot ${s.level}`} />
            </div>
          ))}
        </Reveal>

        <div className="skill-grid">
          {skillGroups.map((g, i) => (
            <Reveal as="div" className="skill-card" key={g.label} delay={i * 0.07}>
              <span className="section-tag" style={{ marginBottom: 0 }}>{g.label}</span>
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
