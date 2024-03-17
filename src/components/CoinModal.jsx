import { useGLTF, PresentationControls, Stage } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Model(props) {
  const { scene } = useGLTF("./bitcoin.glb");
  const modelref = useRef();
  // useFrame((state, delta) => {
  //   modelref.current.rotation.y += delta;
  // });
  return <primitive object={scene} {...props} ref={modelref} />;
}

function CoinModal() {
  return (
    <div>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ position: "relative", height: "430px" }}
        
      >
        <color attach="background" args={["#1F2544"]} />
        <ambientLight intensity={-20} />

        <PresentationControls
          speed={2.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={null}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default CoinModal;
