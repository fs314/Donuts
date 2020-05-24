const configuration = {
    percentageDonuts: 0,
    gravity: 0
};

export let setConfiguration = function() {
    
    const level = prompt('Choose level... easy, medium or hard', 'easy');
    switch(level) {
        case 'easy':
            configuration.percentageDonuts = 0.2;  
            configuration.gravity = -0.02;
            return configuration;
        case 'medium':
            configuration.percentageDonuts = 0.3;  
            configuration.gravity = -0.03;
            return configuration;
        case 'hard':
            configuration.percentageDonuts = 0.5; 
            configuration.gravity = -0.05;
            return configuration;

        default:
            console.log('something went wrong...');
            return null;
    }
};
