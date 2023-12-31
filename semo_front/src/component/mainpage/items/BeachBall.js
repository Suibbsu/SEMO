import { animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export function BeachBall(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/beachBall/beachBall.gltf");
  return (
    <group>
      <animated.group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.Sphere000.geometry}
          material={materials["White.008"]}
        />
        <mesh
          geometry={nodes.Sphere000_1.geometry}
          material={materials["Blue.004"]}
        />
        <mesh
          geometry={nodes.Sphere000_2.geometry}
          material={materials["Red.003"]}
        />
        <mesh
          geometry={nodes.Sphere000_3.geometry}
          material={materials["Yellow.012"]}
        />
      </animated.group>
    </group>
  );
}
