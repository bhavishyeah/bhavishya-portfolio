import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

// Abstract low-poly "car" silhouette built from primitives — rotates,
// and spins faster + glows on hover (controlled by parent via `active`).
function CarBody({ active }) {
  const group = useRef()
  useFrame((_, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * (active ? 1.4 : 0.5)
  })
  const emissive = active ? 1.1 : 0.35
  return (
    <group ref={group} rotation={[0.15, 0.5, 0]}>
      {/* chassis */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.6, 0.5, 1.1]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={emissive} metalness={0.6} roughness={0.3} flatShading />
      </mesh>
      {/* cabin */}
      <mesh position={[-0.15, 0.45, 0]}>
        <boxGeometry args={[1.3, 0.5, 0.95]} />
        <meshStandardMaterial color="#a3e635" emissive="#a3e635" emissiveIntensity={emissive} metalness={0.5} roughness={0.35} flatShading />
      </mesh>
      {/* wheels */}
      {[[-0.85, -0.35, 0.6], [0.85, -0.35, 0.6], [-0.85, -0.35, -0.6], [0.85, -0.35, -0.6]].map((p, i) => (
        <mesh key={i} position={p} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.22, 16]} />
          <meshStandardMaterial color="#111" emissive="#222" metalness={0.4} roughness={0.6} />
        </mesh>
      ))}
    </group>
  )
}

export default function CarPreview() {
  const [active, setActive] = useState(false)
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0 }}
      camera={{ position: [0, 1, 5], fov: 50 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 5, 4]} intensity={50} color="#a3e635" />
      <pointLight position={[-4, -2, 3]} intensity={45} color="#8b5cf6" />
      <CarBody active={active} />
    </Canvas>
  )
}
