import {createDonut} from './Donuts.js';
import {getRandomNumInRange, createRandomColor} from './HelperFunctions.js'; 

export let donutsGenerator = function() {
    let donuts =[];
    for(let i=0; i<20; i++) {
        let donut = createDonut();
        donuts.push(donut);
    }
    return donuts;
}

export let updateDonuts = (donut, gravity, percentageDonuts, scene) => {
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
};

export let colorChangeDonut = (raycaster, scene, mouse, camera) => {
    // update the picking ray with the camera and mouse position
    // & calculate objects intersecting the picking ray
    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects( scene.children );
    for ( var i = 0; i < intersects.length; i++ ) {
        intersects[ i ].object.material.color.set( 0xff0000 );
    }
}

const dropDonut = (donut, gravity) => {
    donut.rotation.y += 0.001;
    setTimeout(
        donut.position.x += gravity * Math.random(), 
        Math.random()*10000
    ); 
};

