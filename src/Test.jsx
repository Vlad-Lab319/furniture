import React, { useRef, useEffect, useLayoutEffect } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas, applyProps } from "@react-three/fiber";

// const source =
//   "https://furniture3d-507196330807.s3-accesspoint.us-east-1.amazonaws.com/wooden_display_shelves_01_8k.glb";
// const source = "./wooden_display_shelves_01_8k.glb";

export default function Test({ ...props }) {
  // const source = "./wooden_display_shelves_01_8k.glb";
  const group = useRef();
  // const { nodes, materials, animations } = useGLTF("./dancer.glb");
  // const { nodes, materials, animations } = useGLTF("./bookcase.glb");
  const { nodes, materials, animations, scene } = useGLTF(
    "./closet_home_builder.glb",
  );
  // const { nodes, materials, animations } = useGLTF("./wardrobe-001.glb");
  // const { scene } = useGLTF("./court.glb");
  // const { actions } = useAnimations(animations, group);

  console.log(nodes);
  console.log(scene);
  // console.log(bkNodes);
  // console.log(bkNodes.materials["Material"]);
  // console.log(scene);
  // console.log(materials);
  // console.log(animations);
  // console.log(props.color);

  // const testObject = nodes.BookCase;

  // testObject.traverse((o) => {
  //   if (o.isMesh) {
  //     applyProps(o, {
  //       castShadow: true,
  //       receiveShadow: true,
  //       "material-envMapIntensity": 0.1,
  //     });
  //   }
  // });

  // console.log(testObject);

  // const bookShelfMaterial = materials["Material"];

  // useEffect(() => {
  //   // actions["Armature|mixamo.com|Layer0"].play();
  // });

  return (
    <group ref={group} {...props} dispose={null} className="test">
      {/* <mesh geometry={nodes.Cube025.geometry} material={bookShelfMaterial} />
      <mesh geometry={nodes.Cube025_1.geometry} material={bookShelfMaterial} /> */}

      {/* <primitive
        object={testObject}
        // object={bkNodes.nodes.BookCase}
        // material={materials["wooden_display_shelves_01"]}
        material={bookShelfMaterial}
        material-color={props.color}
        receiveShadow
      /> */}

      {/*
      <primitive
        object={nodes.wooden_display_shelves_01}
        material={materials["wooden_display_shelves_01"]}
        // material={bkNodes.materials["Material"]}
      />

      <primitive
        object={nodes.wooden_display_shelves_01_drawer_01}
        // material={materials["wooden_display_shelves_01"]}
      />
      <primitive
        object={nodes.wooden_display_shelves_01_drawer_02}
        // material={materials["wooden_display_shelves_01"]}
      />
      <primitive
        object={nodes.wooden_display_shelves_01_drawer_03}
        material={materials["wooden_display_shelves_01"]}
        material-color={props.color}
        // material-color={null}
      />

    */}

      {/* <primitive */}
      {/* // object={nodes.Cube} */}
      {/* // material={materials["Material.003"]} */}
      {/* // material={bookShelfMaterial} */}
      {/* /> */}
      {/* <primitive object={nodes.door} material={materials["glass"]} /> */}
      {/* <primitive object={nodes.door001} material={materials[""]} /> */}

      <primitive object={nodes.Floor} />
      {/* <primitive object={nodes.Wall_Mesh001} /> */}
      {/* <primitive object={nodes.Wall_Mesh002} /> */}
      {/* <primitive object={nodes.Wall_Mesh003} /> */}
      {/* <primitive object={nodes.Wall_Mesh004} /> */}
      <primitive object={nodes.Opening001} />
      <primitive object={nodes.Opening002} />
      <primitive object={nodes.Opening003} />
      {/* <primitive object={scene} /> */}
      {/* <Render /> */}
    </group>
  );
}

function Render(props) {
  // const { scene } = useGLTF("./court.glb");
  const { scene } = useGLTF("./closet_home_builder.glb");
  console.log(scene);
  useLayoutEffect(() => {
    scene.traverse((o) => {
      if (o.isMesh) {
        applyProps(o, {
          castShadow: true,
          receiveShadow: true,
          "material-envMapIntensity": 0.1,
        });
      }
    });
    // const floor = scene.getObjectByName("GymFloor_ParquetShader_0");
    // if (floor) floor.parent.remove(floor);
  }, [scene]);
  return <primitive object={scene} {...props} />;
}

// useGLTF.preload("./dancer.glb");
// useGLTF.preload("./wardrobe-001.glb");
// useGLTF.preload("./bookcase.glb");
// useGLTF.preload("./wooden_display_shelves_01_8k.glb");
// useGLTF.preload(source);
useGLTF.preload("./closet_home_builder.glb");
