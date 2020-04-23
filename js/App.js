import {setConfiguration} from './LevelHandler.js';
import {dropDonut, createDonut} from './Donuts.js';

const configuration = setConfiguration();
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

let donuts = [];

if(configuration != null) { // use better error handling ...
    const {renderer, scene, camera, game_configuration } = configuration;
    document.body.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    function onMouseMove(event) {
        // calculate mouse position in normalized device coordinates (-1 to +1) for both components
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    }

    let mainLoop = function() {
        if(Math.random() < game_configuration.percentageDonuts) {
            createDonut(donuts)
        };

        for (const donut of donuts) {
            scene.add(donut);
            dropDonut(donut, game_configuration.gravity);
        } 

        // update the picking ray with the camera and mouse position
	    raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
        var intersects = raycaster.intersectObjects( scene.children );
        for ( var i = 0; i < intersects.length; i++ ) {
            intersects[ i ].object.material.color.set( 0xff0000 );
        }
        
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    }; 

    window.addEventListener( 'mousemove', onMouseMove, false );
    mainLoop();
}