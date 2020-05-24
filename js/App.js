import {setConfiguration} from './LevelHandler.js'; //fix imports with webpack
import {donutsGenerator, updateDonuts, colorChangeDonut} from './GameEvents.js';
import {Interact} from './GameController.js';

const {percentageDonuts, gravity } = setConfiguration();

//initialize variables
const container = document.getElementById('game-container');
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let requestId;

// Create a three.js scene; set up the camera and the renderer.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, container.offsetWidth/container.offsetHeight, 1, 1000);
camera.position.z = 8;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.offsetWidth, container.offsetHeight);
renderer.setClearColor("#A1D7D2");
container.appendChild(renderer.domElement);

//Added very basic soft white light to project. This is temporary, will adjust later
const light = new THREE.AmbientLight( 0xffffff ); 
scene.add( light );

//populate the scene
let donuts = donutsGenerator(); 
let interact = new Interact();
scene.add(interact.mesh); 

let mainLoop = () => {

    interact.moveHasee();

    donuts.forEach((donut) => {
      updateDonuts(donut, gravity, percentageDonuts, scene);
    }); 

    colorChangeDonut(raycaster, scene, mouse, camera);

    renderer.render(scene, camera);
    requestId = requestAnimationFrame(mainLoop);
}; 

let stopAnimation = () => {
    cancelAnimationFrame( requestId );
}

let onMouseMove = function(event) {
    // calculate mouse position in normalized device coordinates (-1 to +1) for both components
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
} 

let handleWindowResize = () => {
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  camera.aspect = container.offsetWidth/ container.offsetHeight;
  camera.updateProjectionMatrix();
}

document.getElementById( 'stopAnimation' ).addEventListener( 'click', stopAnimation);
window.addEventListener( 'mousemove', onMouseMove, false );
window.addEventListener( 'resize', handleWindowResize); 

mainLoop(); 