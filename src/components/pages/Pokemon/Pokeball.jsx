import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { Html, useProgress } from '@react-three/drei';
import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';


function Pokeball() {

    function Object() {
        const gltf = useLoader(GLTFLoader, 'pokeball.glb');
        return <primitive object={gltf.scene} />;
      }
      function Loader() {
        const { progress } = useProgress();
        return <Html center>{progress} % loaded</Html>;
      }
  return (
       <Canvas>
      <Suspense fallback={<Loader />}>
        <Object />
      </Suspense>
    </Canvas>
  );
}

export default Pokeball;