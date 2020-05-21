import {setConfiguration} from './LevelHandler.js'; //fix imports with webpack
import {donutsGenerator,dropDonut} from './GameEvents.js';
import {getRandomNumInRange, createRandomColor} from './HelperFunctions.js';
import {haseeGenerator} from './Hasee.js';

const {container, percentageDonuts, gravity } = setConfiguration();

//create the scene
const scene = new THREE.Scene();
//create and locate camera
const camera = new THREE.PerspectiveCamera(30, container.offsetWidth/container.offsetHeight, 1, 1000);
camera.position.z = 7;
//create the renderer 
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.offsetWidth, container.offsetHeight);
renderer.setClearColor("#ffffab");


//Added very basic soft white light to project. This is temporary, will adjust later
const light = new THREE.AmbientLight( 0xffffff ); 
scene.add( light );

container.appendChild(renderer.domElement);

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let requestId;
let donuts = donutsGenerator(scene); 

let hasee = haseeGenerator();
scene.add( hasee);

let mainLoop = function() {

    hasee.position.x = vector.x;
    hasee.rotation.y += 0.01;

    donuts.forEach((donut) => {
       if(Math.random() < percentageDonuts) {
           scene.add(donut);
        }
      
        dropDonut(donut, gravity);
        donut.rotation.x +=0.01;
        donut.rotation.y +=0.01;

        if(donut.position.x <=  -3) {
            donut.position.y = getRandomNumInRange(-1.7, 17);
            donut.position.x =3;
            donut.material.color.set( createRandomColor() );
        }
    });  

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

// vector for motion
var vector = {x: 0, y: 0, z: 0};

// key handler
document.onkeydown = function(e) {
  e.preventDefault();
  if (e.key === 'ArrowRight') {     
    vector.x += 0.02;
  }
  else if (e.key === 'ArrowLeft') { 
    vector.x -= 0.02;
  }
};

document.getElementById( 'stopAnimation' ).addEventListener( 'click', stopAnimation);
window.addEventListener( 'mousemove', onMouseMove, false );
window.addEventListener('resize', () => {
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  camera.aspect = container.offsetWidth/ container.offsetHeight;

  camera.updateProjectMatrix();
}); 

mainLoop(); 