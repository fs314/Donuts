import {setConfiguration} from './LevelHandler.js'; //fix imports with webpack
import {donutsGenerator, colorChangeDonut} from './GameEvents.js';

const {container, percentageDonuts, gravity } = setConfiguration();

//create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xabffab);
//create and locate camera
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 7;
//create the renderer 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.offsetWidth, container.offsetHeight);

container.appendChild(renderer.domElement);
renderer.render(scene, camera);

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let requestId;

let donuts = [];

let mainLoop = function() {
    donuts = donutsGenerator(donuts, gravity, percentageDonuts, scene);
    
    //colorChangeDonut(raycaster, scene, mouse, camera);
    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera( mouse, camera );
    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects( scene.children );
    for ( var i = 0; i < intersects.length; i++ ) {
        intersects[ i ].object.material.color.set( 0xff0000 );
    }
    renderer.render(scene, camera);
    requestId = requestAnimationFrame(mainLoop);
}; 

let stopAnimation = function() {
    cancelAnimationFrame( requestId );
}

let onMouseMove = function(event) {
    // calculate mouse position in normalized device coordinates (-1 to +1) for both components
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
} 

document.getElementById( 'stopAnimation' ).addEventListener( 'click', stopAnimation);
window.addEventListener( 'mousemove', onMouseMove, false );

mainLoop(); 