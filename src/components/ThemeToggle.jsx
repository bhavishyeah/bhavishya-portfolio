import { useEffect, useState } from 'react'
import { Sun, Moon } from './Icons'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Persisted light/dark switch. The initial theme is applied pre-paint by an
// inline script in index.html; this keeps React state in sync and persists it.
export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#070b16' : '#eff6ff')
  }, [theme])

  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
    >
      <span className="tt-thumb">
        {isDark ? <Moon width={13} height={13} /> : <Sun width={13} height={13} />}
      </span>
    </button>
  )
}
