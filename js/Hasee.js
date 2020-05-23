// Follow this to create Hasee: https://www.smashingmagazine.com/2017/09/animation-interaction-techniques-webgl/
// https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/

/* let colors = {
    green:006561,
    lightblue: 0xA1D7D2,
    darkblue: 0x186790,
    lightgrey: 0xEBECEB,
    darkgrey: 0x3D3D3D,
    orange:0xF5986E,
    purple: 0x7261AF,
}; */


export let haseeGenerator = () => {

    //create a mesh that will hold the body.
    let mesh = new THREE.Group();
    let body = new THREE.Group();
    mesh.add(body);

    let bodyMaterial1 = new THREE.MeshLambertMaterial( {color: 0x7261AF} );
    let armsMaterial = new THREE.MeshLambertMaterial( {color: 0xFF8D5D} );
    let whiteMat = new THREE.MeshLambertMaterial( {color: 0xEBECEB} );
    let darkMat = new THREE.MeshLambertMaterial( {color: 0x3D3D3D} );

    
    //create different parts and add them to the body 
    let torsoGeom = new THREE.SphereGeometry( 0.5, 10, 10 );
    let torso = new THREE.Mesh( torsoGeom, bodyMaterial1 );
    let headGeom = new THREE.SphereGeometry(0.35, 10, 10);
    let head = new THREE.Mesh( headGeom, bodyMaterial1 );
    //torso.rotation.y = 0.3;
    torso.position.z=0;
    head.position.y=0.30;
   
    body.add(torso);
    body.add(head);
    
    let shoulderGeom = new THREE.SphereGeometry( 0.06, 10, 10 );
    let shoulderL = new THREE.Mesh( shoulderGeom, bodyMaterial1 );
    shoulderL.position.x = -0.5;
    shoulderL.position.y = 0.1;
    body.add(shoulderL);

    let shoulderR = new THREE.Mesh( shoulderGeom, bodyMaterial1 );
    shoulderR.position.x = 0.5;
    shoulderR.position.y = 0.1;
    body.add(shoulderR);

    let handGeom = new THREE.BoxGeometry( 0.1, 0.2, 0.1 );
    let handL = new THREE.Mesh( handGeom, armsMaterial );
    handL.position.x = -0.5;
    body.add(handL);

    let handR = new THREE.Mesh( handGeom, armsMaterial );
    handR.position.x = 0.5;
    body.add(handR);

    let legGeom = new THREE.BoxGeometry( 0.3, 0.3, 0.2 );
    let legL = new THREE.Mesh( legGeom, bodyMaterial1 );
    let legR = new THREE.Mesh( legGeom, bodyMaterial1 );
    legL.position.x = -0.3;
    legL.position.y= -0.3;
    body.add(legL);

    legR.position.x = 0.3;
    legR.position.y= -0.3;
    body.add(legR);

    let footGeom = new THREE.BoxGeometry( 0.3, 0.2, 0.2 );
    let footL = new THREE.Mesh( footGeom, armsMaterial );
    footL.position.x = -0.3;
    footL.position.y= -0.5;
    body.add(footL);

    let footR = new THREE.Mesh( footGeom, armsMaterial );
    footR.position.x = 0.3;
    footR.position.y= -0.5;
  //  footR.rotation.x = -1;
    body.add(footR);
    
    let eyeGeom = new THREE.BoxGeometry( 0.05, 0.05, 0.01 );
    let eyeL = new THREE.Mesh( eyeGeom, darkMat );
    eyeL.position.x =-0.16;
    eyeL.position.y= 0.4;
    eyeL.position.z= 0.3;
    body.add(eyeL);

    let eyeR = new THREE.Mesh( eyeGeom, darkMat );
    eyeR.position.x = 0.16;
    eyeR.position.y= 0.4;
    eyeR.position.z= 0.3;
    body.add(eyeR); 

    let mouthGeom = new THREE.TorusGeometry(0.03, 0.03, 30, 30, -Math.PI);
    let mouth = new THREE.Mesh(mouthGeom, darkMat);
    mouth.position.y= 0.4;
    mouth.position.z= 0.36;
    body.add(mouth);


    return body; 
}



