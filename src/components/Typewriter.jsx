import { useEffect, useState } from 'react'

const DEFAULT_WORDS = ['SCALABLE', 'BEAUTIFUL', 'REACT', 'REAL-TIME', 'POLISHED']

// Smooth typewriter that cycles an adjective: types → pauses → deletes → next.
// The surrounding phrase ("I BUILD ... PRODUCTS.") stays static in the Hero.
export default function Typewriter({
  words = DEFAULT_WORDS,
  typeSpeed = 95,
  deleteSpeed = 55,
  pause = 1100,
  startDelay = 450,
}) {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [text, setText] = useState(reduced ? words[0] : '')

  useEffect(() => {
    if (reduced) return
    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timer

    const tick = () => {
      const current = words[wordIndex]
      charIndex = deleting ? charIndex - 1 : charIndex + 1
      setText(current.slice(0, charIndex))

      let speed = deleting ? deleteSpeed : typeSpeed
      if (!deleting && charIndex === current.length) {
        speed = pause
        deleting = true
      } else if (deleting && charIndex === 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length
        speed = 240
      }
      timer = setTimeout(tick, speed)
    }

    timer = setTimeout(tick, startDelay)
    return () => clearTimeout(timer)
  }, [words, typeSpeed, deleteSpeed, pause, startDelay, reduced])

  return (
    <>
      {text}
      <i className="type-caret" aria-hidden="true" />
    </>
  )
}
