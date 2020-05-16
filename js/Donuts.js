import {getRandomNumInRange, createRandomColor} from './HelperFunctions.js';

export const createDonut = function() {
    let radiusTube = Math.random()/ 10; 
    let dntColor = createRandomColor();
 
    let geometry = new THREE.TorusGeometry(radiusTube, radiusTube, 3, 100, Math.PI * 2);
    let material = new THREE.MeshBasicMaterial({ color: dntColor });

    let donut = new THREE.Mesh(geometry, material);

    donut.position.y = 1.7;
    donut.position.x = getRandomNumInRange(-15, 15);

    return donut;
};
