import {getRandomNumInRange, createRandomColor} from './HelperFunctions.js';

export const createDonut = function() {
    let dntColor = createRandomColor();
 
    let geometry = new THREE.TorusGeometry(0.17, 0.1, 10, 100);
    let material = new THREE.MeshLambertMaterial({ color: dntColor });

    let donut = new THREE.Mesh(geometry, material);

    donut.position.y = getRandomNumInRange(-5, 5);
    donut.position.x =3;

    return donut;
};
