import { profile } from '../data'
import Reveal from './Reveal'
import SectionBg from './SectionBg'
import { Mail, Github, Linkedin, Instagram } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionBg word="CONTACT" align="center" />
        <Reveal className="contact-inner">
          <span className="section-label" style={{ justifyContent: 'center' }}>{'// '}<span className="idx">06</span>_contact</span>
          <h2>LET&rsquo;S BUILD TOGETHER</h2>
          <p>Available for freelance work, internships, and collaborations.</p>
          <div>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact-actions">
            <a className="btn" href={`mailto:${profile.email}`}><Mail width={17} height={17} /> Email Me</a>
            <a className="btn-outline" href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin width={17} height={17} /> LinkedIn</a>
          </div>
          <div className="contact-social">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin width={20} height={20} /></a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github width={20} height={20} /></a>
            <a href="https://www.instagram.com/bhavish.yeah" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram width={20} height={20} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail width={20} height={20} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
