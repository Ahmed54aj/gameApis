import React, { useEffect } from 'react';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';
import px from './px.png'; 
import nx from './nx.png'; 
import ny from './ny.png'; 
import py from './py.png'; 
import pz from './pz.png'; 
import nz from './nz.png'; 
function Pokeball() {
useEffect(() => {
    // const pokeArea = document.getElementById('pokemon-section');
    document.querySelector('#pokeball-area').append(renderer.domElement);
}, []);
// 1) create scene
const scene = new THREE.Scene();
scene.backgroundColor = 0xffffff;
scene.fog = new THREE.Fog(0xffffff, 0.0025, 200);
const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
        px,
         nx,
        py,
         ny,
        pz,
        nz,
]);
scene.background = texture;
// 2) load the model
const pokeball_loader = new GLTFLoader();
let ball
pokeball_loader.load('object.glb', function (gltf) {
    ball = gltf.scene;
    ball.scale.set(1,  1,  1);
    ball.position.x = -5.4;
    ball.castShadow = true;
    scene.add(ball);
    // Adjust the camera to look at the model
    // camera.lookAt(ball.position);
}, undefined, function ( error ) {
	console.error( error );

} );
// 3) setup camera and basic renderer
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 3000 );
camera.position.z = 10;
camera.position.x = 0;
camera.position.y = 0;
// 4) setup renderer and attach camera
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.setSize(window.innerWidth, (window.innerHeight / 4));
renderer.setClearColor(0xffffff, 1);
// 5) add lights
const ambientLight = new THREE.AmbientLight(0xffffff,  0.8); // Soft white light, half intensity
const directionalLight = new THREE.DirectionalLight(0xffffff,  0.5); // Increased intensity // Bright white light, full intensity
directionalLight.position.set(0,  10, 10); // Adjusted position
directionalLight.castShadow = true;
// Adjust shadow camera near and far
directionalLight.shadow.camera.near =  10;
directionalLight.shadow.camera.far =  1000;
// Adjust shadow bias
directionalLight.shadow.bias =  0.0001;
scene.add(ambientLight);
scene.add(directionalLight);


// add orbit controls to pan around
// Add OrbitControls to pan around
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Optional, enables damping (inertia)
controls.dampingFactor =  0.25;
controls.enabled = false;
controls.autoRotate = true; // Optional, damping factor
controls.screenSpacePanning = false; // Optional, enables screen-space panning
controls.minDistance =  10; // Optional, minimum distance to the target
controls.maxDistance =  50; // Optional, maximum distance to the target
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
  }
  animate();
    return (

        <section id='pokeball-area'>
     
        </section>
    );
}

export default Pokeball;

