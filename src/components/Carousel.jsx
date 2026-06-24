import { useEffect, useState } from 'react'

// Continuous crossfade slideshow. Advances only while `playing` is true
// (driven by the parent section's intersection observer).
export default function Carousel({ images, playing, interval = 3200, start = 0 }) {
  const [index, setIndex] = useState(start % images.length)

  useEffect(() => {
    if (!playing || images.length < 2) return
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(id)
  }, [playing, images.length, interval])

  return (
    <div className="award-media">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={`award-slide ${i === index ? 'active' : ''}`}
        />
      ))}
    </div>
  )
}
