import { Sparkle } from './Icons'

// Pure-CSS infinite marquee — buttery smooth, no JS scroll.
export default function Marquee({ items }) {
  const loop = [...items, ...items, ...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span className="marquee-item" key={i}>{item}<Sparkle /></span>
        ))}
      </div>
    </div>
  )
}
