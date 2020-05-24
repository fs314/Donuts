import {setConfiguration} from './LevelHandler.js'; //fix imports with webpack
import {donutsGenerator, updateDonuts, updateHasee, colorChangeDonut} from './GameEvents.js';
import {Hasee} from './Hasee.js';
import {Swing} from './Swing.js';

const {percentageDonuts, gravity } = setConfiguration();

//initialize variables
const container = document.getElementById('game-container');
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let requestId;
let positionVector = {x: 4, y: -1.5, z: 0}; 

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
let hasee = new Hasee();
hasee.body.rotation.y=-0.5;
hasee.body.position.z=1;
scene.add(hasee.mesh);

let swing = new Swing();
swing.swing.position.z=0.5;
scene.add(swing.mesh);

let mainLoop = () => {

    updateHasee(hasee, positionVector);

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

// key handler
document.onkeydown = function(e) {
  e.preventDefault();
  if (e.key === 'ArrowRight') {     
    positionVector.x += 0.02;
    //hasee.walk();
  }
  else if (e.key === 'ArrowLeft') { 
    positionVector.x -= 0.02;
    //hasee.walk();
  }
  else if (e.key === ' ' || e.key === 'Spacebar') {
    hasee.jump();
  } 
};

let handleWindowResize = () => {
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  camera.aspect = container.offsetWidth/ container.offsetHeight;

  camera.updateProjectionMatrix();
}

document.getElementById( 'stopAnimation' ).addEventListener( 'click', stopAnimation);
window.addEventListener( 'mousemove', onMouseMove, false );
window.addEventListener( 'resize', handleWindowResize); 

mainLoop(); 