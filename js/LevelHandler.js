import {createDonut} from './Donuts.js';

const configuration = {
    scene: null,
    renderer: null,
    camera: null,
    game_configuration: {
        donuts: [],
        gravity: 0
    }
};

export let setConfiguration = function() {
    
    init();

    const level = prompt('Choose level... easy, medium or hard', 'easy');
    switch(level) {
        case 'easy':
            configuration.game_configuration.donuts = createDonut();  
            configuration.game_configuration.gravity = -0.02;
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
    configuration.renderer.setSize(window.innerWidth, window.innerHeight);
};