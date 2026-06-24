import { nowContent } from '../data'
import Reveal from './Reveal'
import SectionBg from './SectionBg'

export default function Now() {
  return (
    <section id="now">
      <div className="container">
        <SectionBg word="NOW" num={7} />
        <Reveal as="div" className="section-head">
          <h2 className="section-title">What I'm <span className="accent">building now.</span></h2>
        </Reveal>
        <Reveal as="p" className="now-text">{nowContent}</Reveal>
      </div>
    </section>
  )
}
