const configuration = {
    container:  document.getElementById('game-container'),
    scene: null,
    renderer: null,
    camera: null,
    game_configuration: {
        percentageDonuts: 0,
        gravity: 0
    }
};

export let setConfiguration = function() {
    
    init();

    const level = prompt('Choose level... easy, medium or hard', 'easy');
    switch(level) {
        case 'easy':
            configuration.game_configuration.percentageDonuts = 0.2;  
            configuration.game_configuration.gravity = -0.02;
            return configuration;
        case 'medium':
            configuration.game_configuration.percentageDonuts = 0.3;  
            configuration.game_configuration.gravity = -0.03;
            return configuration;
        case 'hard':
            configuration.game_configuration.percentageDonuts = 0.5; 
            configuration.game_configuration.gravity = -0.05;
            return configuration;

        default:
            console.log('something went wrong...');
            return null;
    }
};

let init = function() {
    //create the scene
    configuration.scene = new THREE.Scene();
    configuration.scene.background = new THREE.Color(0xabffab);
    //create and locate camera
    configuration.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
    configuration.camera.position.z = 7;
    //create the renderer 
    configuration.renderer = new THREE.WebGLRenderer();
    configuration.renderer.setSize(configuration.container.offsetWidth, configuration.container.offsetHeight);
};