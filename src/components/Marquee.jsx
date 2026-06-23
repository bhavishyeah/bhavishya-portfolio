import { useState } from 'react'
import { marqueeLogos } from '../data'

function LogoMark({ name, slug }) {
  const [err, setErr] = useState(false)
  if (err) return <span className="logo-fallback">{name}</span>
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/ffffff`}
      alt={name}
      title={name}
      loading="lazy"
      onError={() => setErr(true)}
    />
  )
}

// Dark logo banner with a smooth pure-CSS infinite marquee (ref: tech-logo strip).
export default function Marquee() {
  const loop = [...marqueeLogos, ...marqueeLogos, ...marqueeLogos]
  return (
    <div className="logo-banner grain" aria-label="Technologies I work with">
      <div className="logo-track">
        {loop.map((logo, i) => (
          <span className="logo-item" key={`${logo.slug}-${i}`}>
            <LogoMark name={logo.name} slug={logo.slug} />
          </span>
        ))}
      </div>
    </div>
  )
}
