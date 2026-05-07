import { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'

function ModelMesh({ type }) {
  switch (type) {
    case 'torusKnot':
      return <torusKnotGeometry args={[1, 0.3, 256, 24]} />
    case 'torus':
      return <torusGeometry args={[1, 0.4, 64, 100]} />
    case 'icosahedron':
      return <icosahedronGeometry args={[1, 0]} />
    case 'box':
      return <boxGeometry args={[1.4, 1.4, 1.4]} />
    case 'cone':
      return <coneGeometry args={[1, 2, 64]} />
    case 'cylinder':
      return <cylinderGeometry args={[0.9, 0.9, 1.8, 64]} />
    case 'sphere':
      return <sphereGeometry args={[1, 64, 64]} />
    default:
      return <torusKnotGeometry args={[1, 0.3, 256, 24]} />
  }
}

function FloatingModel({ type }) {
  const groupRef = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    const px = state.pointer.x
    const py = state.pointer.y
    if (!groupRef.current) return
    groupRef.current.rotation.x = Math.sin(t * 0.22) * 0.45 + py * 0.5
    groupRef.current.rotation.y = t * 0.17 + px * 0.4
    groupRef.current.position.y = Math.sin(t * 0.75) * 0.12
  })
  return (
    <group ref={groupRef}>
      <mesh castShadow receiveShadow>
        <ModelMesh type={type} />
        <MeshDistortMaterial
          color="#c85c18"
          emissive="#6b2200"
          emissiveIntensity={0.7}
          metalness={0.95}
          roughness={0.05}
          distort={0.12}
          speed={2.5}
        />
      </mesh>
    </group>
  )
}

export default function ThreeScene() {
  const models = useMemo(() => ['torusKnot', 'torus', 'icosahedron', 'box', 'cone', 'cylinder', 'sphere'], [])
  const [model, setModel] = useState(() => models[Math.floor(Math.random() * models.length)])

  return (
    <div className="relative h-full w-full">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <ambientLight intensity={0.1} />
        <pointLight position={[4, 4, 4]} intensity={4} color="#ff8a3b" />
        <pointLight position={[-4, -3, -4]} intensity={2} color="#ffb870" />
        <pointLight position={[1, -5, 2]} intensity={1.5} color="#ff4400" />
        <FloatingModel type={model} />
      </Canvas>

      <div className="absolute right-3 top-3 z-10 flex gap-2">
        <button
          onClick={() => setModel(models[Math.floor(Math.random() * models.length)])}
          className="rounded-full bg-white/6 px-3 py-1 text-xs text-orange-100/90 border border-orange-100/20 hover:bg-white/10"
        >
          Random
        </button>
        <button
          onClick={() => setModel('torusKnot')}
          className="rounded-full bg-white/6 px-3 py-1 text-xs text-orange-100/90 border border-orange-100/20 hover:bg-white/10"
        >
          Reset
        </button>
      </div>

      <div className="pointer-events-none absolute left-0 bottom-2 w-full text-center text-xs text-orange-100/25">Interaktiv — Maus bewegen</div>
    </div>
  )
}
