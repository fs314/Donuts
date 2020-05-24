import {Hasee} from './Hasee.js';
import {Swing} from './Swing.js';

let positionVector = {x: 2, y: -1.5, z: 0}; 

export let Interact = function() {

    this.mesh = new THREE.Group();
    this.swing = new Swing();
    this.swing.swing.position.z=0.5;

    this.hasee = new Hasee();
    this.hasee.body.rotation.y=-0.5;
    this.hasee.body.position.z=1;

    this.mesh.add(this.swing.swing);
    this.mesh.add(this.hasee.body);

    //NEED TO FIX THIS
    this.update = () => {
        this.hasee.jump();
        this.swing.balance();
    } 

    this.moveHasee= () => {
        this.hasee.body.position.x = positionVector.x;
        this.hasee.body.position.y = positionVector.y;
    }

}

// key handler
document.onkeydown = function(e) {
    e.preventDefault();
    if (e.key === 'ArrowRight') {     
      positionVector.x += 0.02;
      //hasee.walk();
    }
    else if (e.key === 'ArrowLeft') { 
      positionVector.x -= 0.02;
      //hasee.walk();
    }
    else if (e.key === ' ' || e.key === 'Spacebar') {
      this.update();
    } 
  };