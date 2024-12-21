'use client'
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} rotation={[0,4.7,0]} scale={[2, 2, 2]} />;
}

export default function Character() {
  return (
    <Canvas>
      <directionalLight position={[10, 10, 10]} intensity={3} />
      <directionalLight position={[10, -10, -10]} intensity={3} />
      <directionalLight position={[-10, 0, 0]} intensity={3} />
      <Suspense fallback={null}>
        <Model path="/creature.glb" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}


