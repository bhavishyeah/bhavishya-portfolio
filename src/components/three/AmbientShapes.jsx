import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

// Scroll velocity tracker (shared) — reads Lenis or falls back to scroll delta
function useScrollVelocity() {
  const vel = useRef(0)
  const last = useRef(typeof window !== 'undefined' ? window.scrollY : 0)
  useFrame(() => {
    const y = window.scrollY
    const dv = Math.abs(y - last.current)
    last.current = y
    vel.current += (dv - vel.current) * 0.2
  })
  return vel
}

function Shape({ geometry, position, color, speed = 1 }) {
  const ref = useRef()
  const vel = useScrollVelocity()
  useFrame((_, delta) => {
    if (!ref.current) return
    const boost = 1 + Math.min(vel.current * 0.04, 6)
    ref.current.rotation.x += delta * 0.12 * speed * boost
    ref.current.rotation.y += delta * 0.16 * speed * boost
  })
  return (
    <mesh ref={ref} position={position}>
      {geometry}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.12} />
    </mesh>
  )
}

export default function AmbientShapes({ variant = 'a' }) {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      camera={{ position: [0, 0, 7], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      {variant === 'a' ? (
        <>
          <Shape geometry={<icosahedronGeometry args={[1.6, 0]} />} position={[-3.5, 1.2, 0]} color="#a3e635" speed={0.8} />
          <Shape geometry={<torusKnotGeometry args={[0.9, 0.3, 80, 12]} />} position={[3.6, -1.4, -1]} color="#8b5cf6" speed={1.1} />
        </>
      ) : (
        <>
          <Shape geometry={<octahedronGeometry args={[1.5, 0]} />} position={[3.4, 1.5, 0]} color="#8b5cf6" speed={0.9} />
          <Shape geometry={<dodecahedronGeometry args={[1.2, 0]} />} position={[-3.4, -1.3, -1]} color="#a3e635" speed={1.0} />
        </>
      )}
    </Canvas>
  )
}
