import {dropDonut, createDonut} from './Donuts.js';

export let donutsGenerator = function(donuts, gravity, percentageDonuts, scene) {
   
    if(Math.random() < percentageDonuts) {
        createDonut(donuts)
    };

    for (const donut of donuts) {
        scene.add(donut);
        dropDonut(donut, gravity);
        if(donut.position.y <=  -1) {
            donut.geometry.dispose();
            donut.material.dispose();
            scene.remove(donut);
        }
    } 

    return donuts;
}


export let colorChangeDonut = function(raycaster, scene, mouse, camera) {
    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera( mouse, camera );
    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects( scene.children );
    for ( var i = 0; i < intersects.length; i++ ) {
        intersects[ i ].object.material.color.set( 0xff0000 );
    }
}

