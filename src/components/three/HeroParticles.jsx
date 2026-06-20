/* eslint-disable react-hooks/immutability */
// Imperative WebGL particle system: typed-array buffers are intentionally
// mutated in the render loop (useFrame) for performance.
import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 220
const BOUND = 9
const LINK_DIST = 1.9
const MAX_SEGMENTS = 1400

// Deterministic pseudo-random (pure) — avoids Math.random() impurity in render.
function prng(n) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

function Constellation() {
  const pointsRef = useRef()
  const linesRef = useRef()
  const { pointer, viewport } = useThree()
  const mouseWorld = useRef(new THREE.Vector3())

  const positions = useMemo(() => {
    const a = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      a[i * 3] = (prng(i * 3) - 0.5) * BOUND * 2
      a[i * 3 + 1] = (prng(i * 3 + 1) - 0.5) * BOUND * 2
      a[i * 3 + 2] = (prng(i * 3 + 2) - 0.5) * BOUND
    }
    return a
  }, [])
  const velocities = useMemo(() => {
    const a = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT * 3; i++) a[i] = (prng(1000 + i) - 0.5) * 0.006
    return a
  }, [])
  const linePositions = useMemo(() => new Float32Array(MAX_SEGMENTS * 2 * 3), [])

  useFrame((state, delta) => {
    const d = Math.min(delta, 0.05)
    const pos = positions
    mouseWorld.current.set((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0)

    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2
      const x = pos[ix], y = pos[iy]
      const angle = 0.05 * d
      const cos = Math.cos(angle), sin = Math.sin(angle)
      pos[ix] = x * cos - y * sin
      pos[iy] = x * sin + y * cos

      pos[ix] += velocities[ix]
      pos[iy] += velocities[iy]
      pos[iz] += velocities[iz]

      const dxm = pos[ix] - mouseWorld.current.x
      const dym = pos[iy] - mouseWorld.current.y
      const dist2 = dxm * dxm + dym * dym
      if (dist2 < 4) {
        const f = (4 - dist2) * 0.012
        const inv = 1 / Math.sqrt(dist2 + 0.001)
        pos[ix] += dxm * inv * f
        pos[iy] += dym * inv * f
      }

      if (pos[ix] > BOUND) pos[ix] = -BOUND
      if (pos[ix] < -BOUND) pos[ix] = BOUND
      if (pos[iy] > BOUND) pos[iy] = -BOUND
      if (pos[iy] < -BOUND) pos[iy] = BOUND
      if (pos[iz] > BOUND / 2) pos[iz] = -BOUND / 2
      if (pos[iz] < -BOUND / 2) pos[iz] = BOUND / 2
    }

    if (pointsRef.current) pointsRef.current.geometry.attributes.position.needsUpdate = true

    let s = 0
    const line = linePositions
    for (let i = 0; i < COUNT && s < MAX_SEGMENTS; i++) {
      for (let j = i + 1; j < COUNT && s < MAX_SEGMENTS; j++) {
        const dx = pos[i * 3] - pos[j * 3]
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
        if (dx * dx + dy * dy + dz * dz < LINK_DIST * LINK_DIST) {
          const o = s * 6
          line[o] = pos[i * 3]; line[o + 1] = pos[i * 3 + 1]; line[o + 2] = pos[i * 3 + 2]
          line[o + 3] = pos[j * 3]; line[o + 4] = pos[j * 3 + 1]; line[o + 5] = pos[j * 3 + 2]
          s++
        }
      }
    }
    if (linesRef.current) {
      linesRef.current.geometry.setDrawRange(0, s * 2)
      linesRef.current.geometry.attributes.position.needsUpdate = true
    }

    const g = pointsRef.current && pointsRef.current.parent
    if (g) {
      g.rotation.y += ((pointer.x * 0.25) - g.rotation.y) * 0.03
      g.rotation.x += ((-pointer.y * 0.2) - g.rotation.x) * 0.03
    }
  })

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} count={COUNT} />
        </bufferGeometry>
        <pointsMaterial color="#a3e635" size={0.06} sizeAttenuation transparent opacity={0.9} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} count={MAX_SEGMENTS * 2} />
        </bufferGeometry>
        <lineBasicMaterial color="#8b5cf6" transparent opacity={0.18} />
      </lineSegments>
    </group>
  )
}

export default function HeroParticles() {
  return (
    <Canvas
      className="hero-canvas"
      camera={{ position: [0, 0, 11], fov: 60 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Constellation />
    </Canvas>
  )
}
