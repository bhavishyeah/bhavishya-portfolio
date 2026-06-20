import { profile } from '../data'
import Reveal from './Reveal'
import Magnetic from './Magnetic'
import { ArrowRight, Mail } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="divider contact pattern-grid">
      <div className="container">
        <Reveal>
          <span className="section-tag">Contact / 07</span>
          <h2>Let&rsquo;s build <span className="outline">together.</span></h2>
          <p>Available for freelance work, internships, and product-building collaborations.</p>
          <div className="contact-actions">
            <Magnetic>
              <a className="btn" href={`mailto:${profile.email}`}>Start a project <ArrowRight style={{ width: 16, height: 16 }} /></a>
            </Magnetic>
            <Magnetic>
              <a className="btn-outline" href="#hero">Back to top</a>
            </Magnetic>
          </div>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <Mail style={{ width: 22, height: 22 }} /> {profile.email}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
