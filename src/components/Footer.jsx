import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>&copy; 2026 {profile.name}</span>
        <span>Built with React, Vite &amp; Framer Motion</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </footer>
  )
}
