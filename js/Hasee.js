// Follow this to create Hasee: https://www.smashingmagazine.com/2017/09/animation-interaction-techniques-webgl/

export let haseeGenerator = () => {

    //create a mesh that will hold the body.
    let mesh = new THREE.Group();
    let body = new THREE.Group();
    mesh.add(body);

    let bodyMaterial1 = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
    let armsMaterial = new THREE.MeshLambertMaterial( {color: 0x0000ff} );

    //create different parts and add them to the body 
    let torsoGeom = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
    let torso = new THREE.Mesh( torsoGeom, bodyMaterial1 );
    torso.rotation.y = 0.3;
    torso.position.z=0;
    body.add(torso);

    let handGeom = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
    let handL = new THREE.Mesh( handGeom, armsMaterial );
    handL.position.x = -0.3;
    body.add(handL);

    let handR = new THREE.Mesh( handGeom, armsMaterial );
    handR.position.x = 0.3;
    body.add(handR);

    let footGeom = new THREE.BoxGeometry( 0.2, 0.1, 0.1 );
    let footL = new THREE.Mesh( footGeom, armsMaterial );
    footL.position.x = -0.3;
    footL.position.y= -0.3;
    body.add(footL);

    let footR = new THREE.Mesh( footGeom, armsMaterial );
    footR.position.x = 0.3;
    footR.position.y= -0.3;
    body.add(footR);

    let eyeGeom = new THREE.BoxGeometry( 0.1, 0.1, 0.01 );
    let eyeL = new THREE.Mesh( eyeGeom, armsMaterial );
    eyeL.position.x =-0.15;
    eyeL.position.y= 0.1;
    eyeL.position.z= 0.33;
    body.add(eyeL);

    let eyeR = new THREE.Mesh( eyeGeom, armsMaterial );
    eyeR.position.x = 0.25;
    eyeR.position.y= 0.1;
    eyeR.position.z= 0.25;
    body.add(eyeR);


    return body; 
}



