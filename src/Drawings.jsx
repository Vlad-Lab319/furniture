import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, BakeShadows } from "@react-three/drei";
import Model from "./Model";
import Test from "./Test";
import Dancer from "./Dancer";
import Court from "./Court";
import Colors from "./Colors";

const Drawings = () => {
  const [position, setPosition] = useState([0, -1.75, 0]);
  const [mainColor, setMainColor] = useState(null);

  return (
    <>
      <div className="drawings-container">
        <Canvas
          camera={{ position: [2, 0, 12, 25], fov: 20 }}
          frameloop="demand"
          dpr={[1, 1.5]}
          shadows
          // camera={{ near: 0.1, far: 40, fov: 75 }}
        >
          <ambientLight intensity={3.5} />

          <Suspense fallback={null}>
            {/* <Model position={position} /> */}
            <Test position={position} color={mainColor} scale={2} />
            {/* <Dancer position={[3, -3.5, 0]} scale={3} /> */}
            {/* <Court /> */}
          </Suspense>
          <OrbitControls />
          <BakeShadows />
        </Canvas>
      </div>
      <Colors color={mainColor} setColor={setMainColor} />
    </>
  );
};

export default Drawings;
