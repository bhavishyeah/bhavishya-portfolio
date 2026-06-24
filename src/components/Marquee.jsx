import { useState } from 'react'
import { marqueeLogos } from '../data'

// Each item shows the brand logo directly next to its name (logo + label chip).
function LogoChip({ name, slug }) {
  const [err, setErr] = useState(false)
  return (
    <span className="logo-item">
      {!err && (
        <img
          src={`https://cdn.simpleicons.org/${slug}/ffffff`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={() => setErr(true)}
        />
      )}
      <span className="logo-name">{name}</span>
    </span>
  )
}

// Dark logo banner with a smooth pure-CSS infinite marquee.
export default function Marquee() {
  const loop = [...marqueeLogos, ...marqueeLogos, ...marqueeLogos]
  return (
    <div className="logo-banner grain" aria-label="Technologies I work with">
      <div className="logo-track">
        {loop.map((logo, i) => (
          <LogoChip name={logo.name} slug={logo.slug} key={`${logo.slug}-${i}`} />
        ))}
      </div>
    </div>
  )
}
