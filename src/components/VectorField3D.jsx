import { Canvas } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial, Stars } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function VectorField() {
  const pointsRef = useRef();
  const particlesCount = 2500;
  
  // Позиции частиц (случайные в кубе)
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i*3] = (Math.random() - 0.5) * 8;
      pos[i*3+1] = (Math.random() - 0.5) * 5;
      pos[i*3+2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  // Цвета частиц (от красного до оранжевого)
  const colors = useMemo(() => {
    const cols = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const mix = Math.random();
      cols[i*3] = 0.8 + mix * 0.2;     // R
      cols[i*3+1] = 0.2 + mix * 0.3;   // G
      cols[i*3+2] = 0.1 + mix * 0.2;   // B
    }
    return cols;
  }, []);

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors={true}
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function VectorField3D() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden bg-black/40">
      <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#D32F2F" />
        <Stars radius={10} depth={50} count={800} factor={4} saturation={0.5} fade speed={0.5} />
        <VectorField />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1.2}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}