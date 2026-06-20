import { Suspense } from 'react'
import { useInView } from '../hooks/useInView'
import { usePrefersReducedMotion, useIsDesktop } from '../hooks/usePrefersReducedMotion'

// Mounts heavy 3D children only when: motion allowed + desktop + scrolled into view.
// `fallback` is rendered otherwise (static gradient / placeholder).
export default function Lazy3D({ children, fallback = null, minWidth = 768, always = false }) {
  const [ref, inView] = useInView({ threshold: 0.05, rootMargin: '200px' })
  const reduced = usePrefersReducedMotion()
  const desktop = useIsDesktop(minWidth)

  const enabled = !reduced && desktop && (always || inView)

  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      {enabled ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  )
}
