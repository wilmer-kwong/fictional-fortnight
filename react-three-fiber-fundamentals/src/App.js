import React, { useRef } from 'react';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Plane } from '@react-three/drei';

function Box(props) {

  const ref = useRef();

  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  )
}

function App() {
  return (
    <>
      <Canvas camera={{position: [0, 0, 4], fov: 120}}>
        
        <ambientLight intensity={0.03} />
        <pointLight position={[10, 10, 10]} />

        <Box color={'#8844aa'} position={[-2, 0, 0]} />
        <Box color={'#44aa88'} position={[0, 0, 0]} />
        <Box color={'#aa8844'} position={[2, 0, 0]} />
        
        <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} scale={10}>
          <meshPhongMaterial attach="material" color="#f3f3f3"/>
        </Plane>


        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
