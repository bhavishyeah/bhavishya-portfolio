import { useEffect, useState, useCallback } from 'react'

/* ─── Minimal chevron SVG icons ─── */
function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  )
}

// Continuous crossfade slideshow with prev/next controls.
// Advances only while `playing` is true (driven by the parent section's intersection observer).
export default function Carousel({ images, playing, interval = 3200, start = 0 }) {
  const [index, setIndex] = useState(start % images.length)

  useEffect(() => {
    if (!playing || images.length < 2) return
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(id)
  }, [playing, images.length, interval])

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  if (!images || images.length === 0) return null

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
      {images.length > 1 && (
        <>
          <button
            type="button"
            className="carousel-arrow carousel-prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="carousel-arrow carousel-next"
            onClick={goNext}
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </>
      )}
    </div>
  )
}
