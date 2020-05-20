export let haseeGenerator = () => {
    var geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    var cube = new THREE.Mesh( geometry, material );

    cube.rotation.y = 0.3;

    var group = new THREE.Group();
    group.add( cube );

    return group; 
}

