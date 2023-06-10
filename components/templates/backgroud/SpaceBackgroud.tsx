import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import SmoothStars from "@/components/Atoms/Star/StarCustom";

const SpaceBackground = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} style={{ height: "100vh", position: "absolute" }}>
      <Canvas style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <OrbitControls />
        <SmoothStars />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;
