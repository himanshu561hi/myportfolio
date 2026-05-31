import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function FloatingShape({ shape, position, color, scale, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.002 * speed;
    meshRef.current.rotation.y += 0.003 * speed;
    meshRef.current.rotation.z += 0.001 * speed;
  });

  return (
    <Float speed={speed * 1.2} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {shape === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {shape === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 100]} />}
        {shape === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />}
        <meshStandardMaterial 
          color={color} 
          roughness={0.1}
          metalness={0.7}
          transparent
          opacity={0.16}
        />
      </mesh>
    </Float>
  );
}

function Scene({ isDarkMode }) {
  const shapesColor = isDarkMode ? '#2dd4bf' : '#6366f1'; // teal-400 vs indigo-500
  const altColor = isDarkMode ? '#06b6d4' : '#ec4899'; // cyan-500 vs pink-500

  return (
    <>
      <ambientLight intensity={isDarkMode ? 0.4 : 0.8} />
      <directionalLight position={[10, 10, 5]} intensity={isDarkMode ? 0.6 : 1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Renders 3D meshes strategically spread vertically */}
      <FloatingShape shape="box" position={[-2, 3, -5]} color={shapesColor} scale={1.2} speed={0.8} />
      <FloatingShape shape="torus" position={[2.5, 1, -4]} color={altColor} scale={1.4} speed={0.9} />
      <FloatingShape shape="sphere" position={[-3, -1, -6]} color={shapesColor} scale={1.6} speed={0.7} />
      <FloatingShape shape="torus" position={[2, -3, -5]} color={shapesColor} scale={1} speed={1.1} />
      <FloatingShape shape="box" position={[-1.5, -5, -4]} color={altColor} scale={1.3} speed={0.6} />
      <FloatingShape shape="sphere" position={[2.5, -7, -6]} color={shapesColor} scale={1.5} speed={0.8} />
    </>
  );
}

export default function ThreeBackground({ isDarkMode }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.75 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene isDarkMode={isDarkMode} />
      </Canvas>
    </div>
  );
}
