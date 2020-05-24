import {Hasee} from './Hasee.js';
import {Swing} from './Swing.js';

export let Interact = function() {

    this.mesh = new THREE.Group();
    this.swing = new Swing();
    this.swing.swing.position.z=0.5;

    this.hasee = new Hasee();
    this.hasee.body.rotation.y=-0.5;
    this.hasee.body.position.z=1;


    this.mesh.add(this.swing.swing);
    this.mesh.add(this.hasee.body);


}