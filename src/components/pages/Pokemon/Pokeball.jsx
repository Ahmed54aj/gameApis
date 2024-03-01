import React from 'react';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';




function Pokeball() {

// 1) create scene
const scene = new THREE.Scene();
scene.backgroundColor = 0xffffff;
scene.fog = new THREE.Fog(0xffffff, 0.0025, 200);
const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
        'px.png',
         './nx.png',
         './py.png',
         './ny.png',
         './pz.png',
         './nz.png',
]);
scene.background = texture;
// 2) load the model
const pokeball_loader = new GLTFLoader();
let ball;
pokeball_loader.load('pokeball.glb', function (gltf) {
    ball = gltf.scene;
    ball.scale.set(2,  2,  2);
    ball.position.x = -10;
    ball.castShadow = true;
    ball.receiveShadow = true;
    scene.add(ball);
    // Adjust the camera to look at the model
    // camera.lookAt(ball.position);
}, undefined, function ( error ) {
	console.error( error );

} );
// 3) setup camera and basic renderer
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 3000 );
camera.position.z = 10;
camera.position.y = 0;
// 4) setup renderer and attach camera
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1);
document.body.appendChild(renderer.domElement);
// 5) add lights
const ambientLight = new THREE.AmbientLight(0xffffff,  1); // Soft white light, half intensity
const directionalLight = new THREE.DirectionalLight(0xffffff,  0.2); // Increased intensity // Bright white light, full intensity
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
controls.dampingFactor =  0.25; // Optional, damping factor
controls.screenSpacePanning = false; // Optional, enables screen-space panning
controls.minDistance =  10; // Optional, minimum distance to the target
controls.maxDistance =  50; // Optional, maximum distance to the target
//  zoom in functionality
function onDocumentMouseWheel( event ) {
    var fovMAX =  50;
    var fovMIN =  1;

    // Adjust the camera's FOV based on the mouse wheel delta
    camera.fov -= event.wheelDeltaY *  0.05;
    camera.fov = Math.max( Math.min( camera.fov, fovMAX ), fovMIN );

    // Update the camera's projection matrix
    camera.updateProjectionMatrix();
}

// Add the event listener for the 'wheel' event
document.addEventListener( 'wheel', onDocumentMouseWheel, false );
    function animate() {
      requestAnimationFrame(animate);
      // ball.rotation.y += 0.010;
      renderer.render(scene, camera);
  }
  animate();
    return (

        <>
     
        </>
    );
}

export default Pokeball;

