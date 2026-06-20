import { useEffect, useState } from 'react'

export default function Typewriter({
  words = [],
  prefix = '',
  typeSpeed = 70,
  deleteSpeed = 38,
  pause = 1500,
}) {
  const [index, setIndex] = useState(0)
  const [sub, setSub] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return
    const current = words[index % words.length]

    // Decide the delay before the next transition
    let delay = deleting ? deleteSpeed : typeSpeed
    if (!deleting && sub === current.length) delay = pause

    const t = setTimeout(() => {
      if (!deleting && sub === current.length) {
        // Finished typing -> start deleting
        setDeleting(true)
      } else if (deleting && sub === 0) {
        // Finished deleting -> advance to next word
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setSub((s) => s + (deleting ? -1 : 1))
      }
    }, delay)

    return () => clearTimeout(t)
  }, [sub, deleting, index, words, typeSpeed, deleteSpeed, pause])

  const text = (words[index % words.length] || '').slice(0, sub)

  return (
    <div className="typewriter-wrap">
      {prefix && <span className="tw-prefix">{prefix}&nbsp;</span>}
      <span className="tw-text">{text}</span>
      <span className="tw-caret" />
    </div>
  )
}
