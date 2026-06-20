import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

// Fibonacci sphere distribution for evenly spaced orbs
function sph(i, n, radius) {
  const offset = 2 / n
  const inc = Math.PI * (3 - Math.sqrt(5))
  const y = i * offset - 1 + offset / 2
  const r = Math.sqrt(1 - y * y)
  const phi = i * inc
  return [Math.cos(phi) * r * radius, y * radius, Math.sin(phi) * r * radius]
}

function Orb({ position, name, level, onHover }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const color = level === 'core' ? '#a3e635' : '#8b5cf6'

  useFrame(() => {
    if (!ref.current) return
    const target = hovered ? 1.5 : 1
    ref.current.scale.x += (target - ref.current.scale.x) * 0.15
    ref.current.scale.y = ref.current.scale.z = ref.current.scale.x
  })

  return (
    <group position={position}>
      <mesh
        ref={ref}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); onHover(true) }}
        onPointerOut={() => { setHovered(false); onHover(false) }}
      >
        <sphereGeometry args={[0.28, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.4 : 0.5}
          roughness={0.35}
          metalness={0.2}
        />
      </mesh>
      {hovered && (
        <Html center distanceFactor={9} style={{ pointerEvents: 'none' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', whiteSpace: 'nowrap',
            background: 'rgba(10,10,10,0.9)', border: `1px solid ${color}`, color: '#f5f5f5',
            padding: '6px 10px', borderRadius: '999px', transform: 'translateY(-28px)',
          }}>
            {name} · {level === 'core' ? 'Daily driver' : 'Growing'}
          </div>
        </Html>
      )}
    </group>
  )
}

function Galaxy({ nodes }) {
  const group = useRef()
  const [paused, setPaused] = useState(false)
  const radius = 3.2
  const positions = useMemo(
    () => nodes.map((_, i) => new THREE.Vector3(...sph(i, nodes.length, radius))),
    [nodes, radius]
  )

  useFrame((_, delta) => {
    if (group.current && !paused) {
      group.current.rotation.y += delta * 0.12
      group.current.rotation.x += delta * 0.02
    }
  })

  return (
    <group ref={group}>
      {nodes.map((nodeData, i) => (
        <Orb
          key={nodeData.name}
          position={positions[i]}
          name={nodeData.name}
          level={nodeData.level}
          onHover={setPaused}
        />
      ))}
    </group>
  )
}

export default function TechGalaxy({ nodes }) {
  return (
    <Canvas camera={{ position: [0, 0, 8.5], fov: 55 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 6]} intensity={60} color="#a3e635" />
      <pointLight position={[-6, -4, 4]} intensity={50} color="#8b5cf6" />
      <Galaxy nodes={nodes} />
    </Canvas>
  )
}
