import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./dancer.glb");
  const { actions } = useAnimations(animations, group);
  const scale = 100;

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} scale={scale} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials["Wolf3D_Body.005"]}
        skeleton={nodes.Wolf3D_Body.skeleton}
        // scale={scale}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials["Wolf3D_Outfit_Bottom.005"]}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        // scale={scale}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials["Wolf3D_Outfit_Footwear.005"]}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        // scale={scale}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials["Wolf3D_Outfit_Top.005"]}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        // scale={scale}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials["Wolf3D_Hair.005"]}
        skeleton={nodes.Wolf3D_Hair.skeleton}
        // scale={scale}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials["Wolf3D_Eye.005"]}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        // scale={scale}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials["Wolf3D_Eye.005"]}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        // scale={scale}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials["Wolf3D_Skin.005"]}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        // scale={scale}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials["Wolf3D_Teeth.005"]}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        // scale={scale}
      />
    </group>
  );
}

useGLTF.preload("./dancer.glb");
