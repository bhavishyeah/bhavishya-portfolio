import { profile } from '../data'
import Reveal from './Reveal'
import Magnetic from './Magnetic'

export default function Contact() {
  return (
    <section id="contact" className="divider contact">
      <div className="container">
        <Reveal>
          <span className="section-tag">Contact / 07</span>
          <h2>Let&rsquo;s build <span className="outline">together.</span></h2>
          <p>Available for freelance work, internships, and product-building collaborations.</p>
          <div className="contact-actions">
            <Magnetic>
              <a className="btn" href={`mailto:${profile.email}`}>Start a project</a>
            </Magnetic>
            <Magnetic>
              <a className="btn-outline" href="#hero">Back to top</a>
            </Magnetic>
          </div>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
        </Reveal>
      </div>
    </section>
  )
}
