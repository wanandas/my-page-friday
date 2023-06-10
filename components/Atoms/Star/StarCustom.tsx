import React, { useRef } from "react";
import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const SmoothStars = () => {
  const starFieldRef = useRef<any>();

  useFrame(({ clock }) => {
    if (starFieldRef.current) {
      starFieldRef.current.rotation.y = clock.getElapsedTime() * 0.019;
    }
  });

  return (
    <group ref={starFieldRef}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={1}
        fade
      />
    </group>
  );
};

export default SmoothStars;
