import {createDonut} from './Donuts.js';

export let donutsGenerator = function( scene) {
    let donuts =[];
    for(let i=0; i<20; i++) {
        let donut = createDonut();
        donuts.push(donut);
    }
    return donuts;
}

export const dropDonut = function(donut, gravity) {
    setTimeout(
        donut.position.y += gravity * Math.random(), 
        Math.random()*10000
    ); 
};


export let colorChangeDonut = function(raycaster, scene, mouse, camera) {
    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera( mouse, camera );
    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects( scene.children );
    for ( var i = 0; i < intersects.length; i++ ) {
        intersects[ i ].object.material.color.set( 0xff0000 );
    }
}

