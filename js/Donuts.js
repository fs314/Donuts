import {getRandomNumInRange, createRandomColor} from './HelperFunctions.js';

let donut;

//onclick remove donut

export const createDonut = function(donuts) {
    let radiusTube = Math.random()/ 10; 
    let dntColor = createRandomColor();
 
    let geometry = new THREE.TorusGeometry(radiusTube, radiusTube, 3, 100, Math.PI * 2);
    let material = new THREE.MeshBasicMaterial({ color: dntColor });

    donut = new THREE.Mesh(geometry, material);

    donut.position.y = 1.7;
    donut.position.x = getRandomNumInRange(-15, 15);
   
    donuts.push(donut);

    return donuts;
};

export const dropDonut = function(donut, gravity) {
    setTimeout(
        donut.position.y += gravity * Math.random(), 
        Math.random()*10000
    ); 
};
