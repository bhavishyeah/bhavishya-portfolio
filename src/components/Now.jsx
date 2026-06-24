import { nowContent } from '../data'
import Reveal from './Reveal'

export default function Now() {
  return (
    <section id="now">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-label">Now <span className="idx">/ 06</span></span>
          <h2 className="section-title">What I'm <span className="accent">building now.</span></h2>
        </Reveal>
        <Reveal as="p" className="now-text">{nowContent}</Reveal>
      </div>
    </section>
  )
}
