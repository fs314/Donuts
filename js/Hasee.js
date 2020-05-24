// Follow this to create Hasee: https://www.smashingmagazine.com/2017/09/animation-interaction-techniques-webgl/
// https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/

/*let colors = {
    green: new THREE.MeshLambertMaterial( {color: 006561 }),
    lightblue: new THREE.MeshLambertMaterial( {color: 0xA1D7D2} ),
    darkblue: new THREE.MeshLambertMaterial( {color: 0x186790} ),
    lightgrey: new THREE.MeshLambertMaterial( {color: 0xEBECEB} ),
    darkgrey: new THREE.MeshLambertMaterial( {color: 0x3D3D3D} ),
    orange: new THREE.MeshLambertMaterial( {color: 0xFF8D5D} ),
    purple: new THREE.MeshLambertMaterial( {color: 0x7261AF} ),
}; */

let purple = new THREE.MeshLambertMaterial( {color: 0x7261AF} );
    let orange = new THREE.MeshLambertMaterial( {color: 0xFF8D5D} );
    let lightgrey = new THREE.MeshLambertMaterial( {color: 0xEBECEB} );
    let darkgrey = new THREE.MeshLambertMaterial( {color: 0x3D3D3D} ); 

export let Hasee = function() {

    // This will be incremented later at each frame and will be used as the rotation angle of the cycle.
    this.runningCycle = 0;

    //create a mesh that will hold the body.
    this.mesh = new THREE.Group();
    this.body = new THREE.Group();
    this.mesh.add(this.body);

    //create different parts and add them to the body 
    let torsoGeom = new THREE.SphereGeometry( 0.5, 10, 10 );
    this.torso = new THREE.Mesh( torsoGeom, purple );

    let headGeom = new THREE.SphereGeometry(0.35, 10, 10);
    this.head = new THREE.Mesh( headGeom, purple );
    this.torso.position.z=0;
    this.head.position.y=0.30;
   
    this.body.add(this.torso);
    this.body.add(this.head);
    
    let shoulderGeom = new THREE.SphereGeometry( 0.06, 10, 10 );
    this.shoulderL = new THREE.Mesh( shoulderGeom, purple );
    this.shoulderL.position.x = -0.5;
    this.shoulderL.position.y = 0.1;
    this.body.add(this.shoulderL);

    this.shoulderR = new THREE.Mesh( shoulderGeom, purple ); //try this way: this.legL = this.legR.clone();
    this.shoulderR.position.x = 0.5;
    this.shoulderR.position.y = 0.1;
    this.body.add(this.shoulderR);

    let handGeom = new THREE.BoxGeometry( 0.1, 0.2, 0.1 );
    this.handL = new THREE.Mesh( handGeom, orange );
    this.handL.position.x = -0.5;
    this.body.add(this.handL);

    this.handR = new THREE.Mesh( handGeom, orange );
    this.handR.position.x = 0.5;
    this.body.add(this.handR);

    let legGeom = new THREE.BoxGeometry( 0.3, 0.3, 0.2 );
    this.legL = new THREE.Mesh( legGeom, purple );
    this.legR = new THREE.Mesh( legGeom, purple );
    this.legL.position.x = -0.3;
    this.legL.position.y= -0.3;
    this.body.add(this.legL);

    this.legR.position.x = 0.3;
    this.legR.position.y= -0.3;
    this.body.add(this.legR);

    let footGeom = new THREE.BoxGeometry( 0.3, 0.2, 0.2 );
    this.footL = new THREE.Mesh( footGeom, orange );
    this.footL.position.x = -0.3;
    this.footL.position.y= -0.5;
    this.body.add(this.footL);

    this.footR = new THREE.Mesh( footGeom, orange );
    this.footR.position.x = 0.3;
    this.footR.position.y= -0.5;
  //  footR.rotation.x = -1;
    this.body.add(this.footR);
    
    let eyeGeom = new THREE.BoxGeometry( 0.05, 0.05, 0.01 );
    this.eyeL = new THREE.Mesh( eyeGeom, darkgrey );
    this.eyeL.position.x =-0.16;
    this.eyeL.position.y= 0.4;
    this.eyeL.position.z= 0.3;
    this.body.add(this.eyeL);

    this.eyeR = new THREE.Mesh( eyeGeom, darkgrey );
    this.eyeR.position.x = 0.16;
    this.eyeR.position.y= 0.4;
    this.eyeR.position.z= 0.3;
    this.body.add(this.eyeR); 

    let mouthGeom = new THREE.TorusGeometry(0.03, 0.03, 30, 30, -Math.PI);
    this.mouth = new THREE.Mesh(mouthGeom, darkgrey);
    this.mouth.position.y= 0.4;
    this.mouth.position.z= 0.36;
    this.body.add(this.mouth);
    //Add unghiette to hasee character

    this.walk = () => {
        this.runningCycle += .01;
        let t = this.runningCycle;

        t=t%(2%Math.PI);

        let amp = 0.5;

        this.footL.position.x = Math.cos(t) * amp;
        this.footL.position.y = Math.max(0, -Math.sin(t +Math.PI) * amp);
      
        this.footR.position.x = Math.cos(t) * amp;
        this.footR.position.y = Math.max(0, -Math.sin(t +Math.PI) * amp);

        if (t<Math.PI){
            this.footR.rotation.z = Math.cos(t * 2 + Math.PI/2) *Math.PI/4;
            this.footL.rotation.z = 0;
        } else{
            this.footR.rotation.z = 0;
            this.footL.rotation.z = Math.cos(t * 2 + Math.PI/2) *  Math.PI/4;
        }
    };

    this.jump = () => {

        this.footL.rotation.x = 1;
        this.footR.rotation.x = 1;
        this.handL.position.x = -0.57;
        this.handR.position.x = 0.57;
        this.handL.position.y =  0.05;
        this.handR.position.y = 0.05;
        this.handL.rotation.z = -1;
        this.handR.rotation.z = 1;
    };

    /*let antennaeGeom = new THREE.BoxGeometry(0.03, 0.1, 0.02);
    let antennaeL = new THREE.Mesh(antennaeGeom, armsMaterial);
    antennaeL.position.x= 0.16;
    antennaeL.position.y= 0.65;
    antennaeL.rotation.z = -0.25;
    body.add(antennaeL);*/
}


let jump = () => {};

export let haseeGenerator = () => {
    return new Hasee();
};




