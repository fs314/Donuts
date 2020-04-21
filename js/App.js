import {setConfiguration} from './LevelHandler.js';
import {dropDonut} from './Donuts.js';

const configuration = setConfiguration();

if(configuration != null) { // use better error handling ...
    const {renderer, scene, camera, game_configuration } = configuration;

    document.body.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    let mainLoop = function() {
        for (const donut of game_configuration.donuts) {
            scene.add(donut);
            dropDonut(donut, game_configuration.gravity);

        } 
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    }; 

    mainLoop();
}