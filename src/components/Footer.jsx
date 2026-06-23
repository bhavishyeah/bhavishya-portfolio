import { profile, nav } from '../data'

// Big-statement footer (ref: large heading + quick-link pills + contact + giant faded name)
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer grain">
      <div className="container footer-grid">
        <h2 className="footer-head">
          Building polished<br />web products<br />that last.
        </h2>

        <div className="footer-col">
          <span className="footer-col-label">/Quick links</span>
          <div className="footer-links">
            <a href="#hero" className="footer-pill grain">Home</a>
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="footer-pill grain">{item.label}</a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <span className="footer-col-label">/Contact</span>
          <a className="footer-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="footer-email sub" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="footer-email sub" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <div className="footer-giant" aria-hidden="true">{profile.shortName}</div>

      <div className="container footer-base">
        <span>&copy; {year} {profile.name}</span>
        <span>Designed &amp; built with React + Vite</span>
      </div>
    </footer>
  )
}
