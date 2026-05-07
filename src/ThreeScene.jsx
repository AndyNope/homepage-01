import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'

function KnotMesh() {
  const groupRef = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    groupRef.current.rotation.x = Math.sin(t * 0.22) * 0.45 + state.pointer.y * 0.5
    groupRef.current.rotation.y = t * 0.17 + state.pointer.x * 0.4
    groupRef.current.position.y = Math.sin(t * 0.75) * 0.12
  })
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[4, 4, 4]} intensity={4} color="#ff8a3b" />
      <pointLight position={[-4, -3, -4]} intensity={2} color="#ffb870" />
      <pointLight position={[1, -5, 2]} intensity={1.5} color="#ff4400" />
      <group ref={groupRef}>
        <mesh>
          <torusKnotGeometry args={[1, 0.3, 256, 24]} />
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
    </>
  )
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <KnotMesh />
    </Canvas>
  )
}
