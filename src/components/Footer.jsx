import { profile, nav } from '../data'
import { Linkedin, Github, Instagram } from './Icons'

// Big-statement footer (large heading + quick-link grid + contact + giant faded name)
export default function Footer() {
  const year = new Date().getFullYear()
  const links = [{ label: 'Home', href: '#hero' }, ...nav]
  return (
    <footer className="footer grain">
      <div className="container footer-grid">
        <h2 className="footer-head">
          Building polished<br />web products<br />that last.
        </h2>

        <div className="footer-col">
          <span className="footer-col-label">/Quick links</span>
          <div className="footer-links">
            {links.map((item) => (
              <a key={item.href} href={item.href} className="footer-pill grain">{item.label}</a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <span className="footer-col-label">/Contact</span>
          <a className="footer-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="footer-social">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin width={18} height={18} /></a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github width={18} height={18} /></a>
            <a href="https://www.instagram.com/bhavish.yeah" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram width={18} height={18} /></a>
          </div>
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
