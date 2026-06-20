import { profile } from '../data'
import Reveal from './Reveal'
import Magnetic from './Magnetic'
import { ArrowRight, Mail, Github, Linkedin, Phone } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="contact glow-violet">
      <div className="container section-inner">
        <Reveal>
          <span className="section-label" style={{ justifyContent: 'center' }}><span className="bar" />CONTACT <span className="idx">/ 08</span></span>
          <h2><span className="fill">LET&rsquo;S BUILD</span><br /><span className="stroke">TOGETHER</span></h2>
          <p>Available for freelance work, internships, and full-time roles. Let&rsquo;s create something engineered, beautiful, and memorable.</p>
          <div className="contact-actions">
            <Magnetic><a className="btn" href={`mailto:${profile.email}`}>Start a project <ArrowRight /></a></Magnetic>
            <Magnetic><a className="btn-outline" href="#hero">Back to top</a></Magnetic>
          </div>
          <div className="contact-meta">
            <a href={`mailto:${profile.email}`}><Mail width={14} height={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />{profile.email}</a>
            <a href={`tel:${profile.phone}`}><Phone width={14} height={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />{profile.phone}</a>
            <a href={profile.links.github} target="_blank" rel="noreferrer"><Github width={14} height={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin width={14} height={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />LinkedIn</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
