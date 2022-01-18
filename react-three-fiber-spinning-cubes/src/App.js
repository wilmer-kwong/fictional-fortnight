import React, { useRef, useState } from "react";
import './App.css';
import { Canvas, useFrame } from "@react-three/fiber";

const TextBox = () => {
  return (
    <div className='App'>Hello World</div>
  )
}

const SpinningBox = (props) => {

  // Reference variable to mesh object
  const ref = useRef(null);

  // hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // re-render and update component to frame rate
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function App() {
  return (
    <>
      {/* Non-ThreeJS-Component */}
      <TextBox />
      
      <Canvas colorMangement camera={{ posiiton: [0, 0, 0], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <SpinningBox position={[-2, 2, -1]} />
        <SpinningBox position={[0, 0, 0]} />
        <SpinningBox position={[2, -2, -1]} />
        
      </Canvas>
    </>
  );
}

export default App;
