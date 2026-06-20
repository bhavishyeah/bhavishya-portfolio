import { useEffect, useState } from 'react'

export default function Typewriter({
  words = [],
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

    let delay = deleting ? deleteSpeed : typeSpeed
    if (!deleting && sub === current.length) delay = pause

    const t = setTimeout(() => {
      if (!deleting && sub === current.length) {
        setDeleting(true)
      } else if (deleting && sub === 0) {
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
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      <span className="tw-text">{text}</span>
      <span className="caret" />
    </span>
  )
}
