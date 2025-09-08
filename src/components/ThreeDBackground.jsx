import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#aaa"
          size={0.005} 
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function ThreeDBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['transparent']} /> {/* बैकग्राउंड को पारदर्शी बनाएं */}
        <Stars />
      </Canvas>
    </div>
  );
}

export default ThreeDBackground;