import {getRandomNumInRange, createRandomColor} from './HelperFunctions.js';

let donut;
let donuts = [];

//onclick remove donut

export const createDonut = function() {
    let radiusTube = Math.random()/ 10; 
    let dntColor = createRandomColor();
 
    let geometry = new THREE.TorusGeometry(radiusTube, radiusTube, 3, 100);
    let material = new THREE.MeshBasicMaterial({ color: dntColor });

    donut = new THREE.Mesh(geometry, material);

    donut.position.y = 1.7;
    donut.position.x = getRandomNumInRange(-15, 15);
   
    donuts.push(donut);
    if(donuts.length < 30) { 
        createDonut() 
    };

    return donuts;
};

export const dropDonut = function(donut, gravity) {
    setTimeout(
        donut.position.y += gravity * Math.random(), 
        Math.random()*10000
    ); 
};
