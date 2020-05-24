let darkgrey = new THREE.MeshLambertMaterial( {color: 0x3D3D3D}); 

export let Swing = function() {

    //tells on which side the swing is up
    //let leftUp = false;

    this.mesh = new THREE.Group();
    this.swing = new THREE.Group();
    this.mesh.add(this.swing);

    let baseGeom = new THREE.CylinderGeometry( 0.25, 0.25, 0.5, 32 );
    this.baseCylinder = new THREE.Mesh( baseGeom, darkgrey );
    this.baseCylinder.rotation.x= 1.6;
    this.baseCylinder.position.y= -1.7;
    this.swing.add(this.baseCylinder);

    let swingTopGeom = new THREE.BoxGeometry(5, 0.10, 0.3);
    this.swingTop = new THREE.Mesh(swingTopGeom, darkgrey);
    this.swingTop.rotation.x= 1;
    this.swingTop.position.y = -1.4;

    this.swingTop.rotation.y = -0.2;
    this.swing.add(this.swingTop);

    let balance = () => {}
}

