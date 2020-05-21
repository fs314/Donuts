import {getRandomNumInRange, createRandomColor} from './HelperFunctions.js';

export const createDonut = function() {
    let radiusTube = Math.random()/ 10; 
    let dntColor = createRandomColor();
 
    let geometry = new THREE.TorusGeometry(radiusTube, radiusTube, 3, 100, Math.PI * 2);
    let material = new THREE.MeshLambertMaterial({ color: dntColor });

    let donut = new THREE.Mesh(geometry, material);

    donut.position.y = getRandomNumInRange(-5, 5);
    donut.position.x =3;

    return donut;
};
