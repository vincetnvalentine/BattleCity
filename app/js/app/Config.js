Game = {
    instance: null,
    types: {
        tankDirrections: { 
            top: 'top', 
            right: 'right', 
            bottom: 'bottom', 
            left: 'left' 
        },
        tankStates: { 
            stop: 'stop', 
            move: 'move'
        },
        shellStates: {
            ready: 'ready',
            flying: 'flying'
        },
        mapTails: {
            empty: 0,
            brick: 1,
            rightBrick: 2,
            bottomBrick: 3,
            leftBrick: 4,
            topBrick: 5,
            concrete: 6,
            water: 7,
            tree: 8,
            swamp: 9
        }
    },
    players: [
        {
            instance: null,
            scale: 1,
            speed: 4.0,
            initX: 300,
            initY: 550
        },
        {
            instance: null,
            scale: 1,
            speed: 4.0,
            initX: 700,
            initY: 550
        }
    ],
    config: {
        assets: {
            Atlas: 'app/asset/textures/atlas4x.png',
            maps: [
                'app/asset/maps/level01.json',
                'app/asset/maps/level01.json'
            ]
        },
        tailSize: {
            width: 32,
            height: 32
        }
    }
};