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
            move: 'move',
            explosion: 'explosion'
        },
        tankModels: {
            player1: 0,
            player2: 1,
            T1: 2,
            T2: 3,
            T3: 4,
            T4: 5,
            T5: 6,
            T6: 7,
            T7: 8,
            T8: 9,
            blinkT1: 10,
            blinkT2: 11,
            blinkT3: 12,
            blinkT4: 13,
            blinkT5: 14,
            blinkT6: 15,
            blinkT7: 16,
            blinkT8: 17
        },
        shellStates: {
            ready: 'ready',
            flying: 'flying',
            explosion: 'explosion'
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
            swamp: 9,
            flagAliveTopLeft: 10,
            flagAliveTopRight: 11,
            flagAliveBottomLeft: 12,
            flagAliveBottomRight: 13,
            flagDeadTopLeft: 14,
            flagDeadTopRight: 15,
            flagDeadBottomLeft: 16,
            flagDeadBottomRight: 17
        },
        powerUps: {
            helmet: {
                id: 0,
                applyable: true
            },
            clock: {
                id: 1,
                applyable: true
            },
            shovel: {
                id: 2,
                applyable: true
            },
            star: {
                id: 3,
                applyable: true
            },
            grenade: {
                id: 4,
                applyable: true
            },
            tank: {
                id: 5,
                applyable: true
            },
            gun: {
                id: 6,
                applyable: true
            },
            protectiveField: {
                id: 7,
                applyable: false
            }
        }
    },
    modelParams: [
        // Player 1
        {
            holderSize: 1,
            cooldownTime: 100,
            scale: 1,
            speed: 4.0,
            initX: 300,
            initY: 800
        },
        
        // Player 2
        {
            holderSize: 1,
            cooldownTime: 100,
            scale: 1,
            speed: 4.0,
            initX: 532,
            initY: 800
        },
        
        // T1
        {
            holderSize: 1,
            cooldownTime: 100,
            scale: 1,
            speed: 4.0,
            initX: 532,
            initY: 100
        },
        
        //T2
        {
            holderSize: 1,
            cooldownTime: 100,
            scale: 1,
            speed: 4.0,
            initX: 532,
            initY: 100
        },
        
        // T3
        {
            holderSize: 1,
            cooldownTime: 100,
            scale: 1,
            speed: 4.0,
            initX: 532,
            initY: 100
        },
        
        // T4
        {
            holderSize: 1,
            cooldownTime: 100,
            scale: 1,
            speed: 4.0,
            initX: 532,
            initY: 100
        },
        
        //T5
        {
            holderSize: 1,
            cooldownTime: 100,
            scale: 1,
            speed: 4.0,
            initX: 532,
            initY: 100
        },
        
        //T6
        {
            holderSize: 1,
            cooldownTime: 100,
            scale: 1,
            speed: 4.0,
            initX: 532,
            initY: 100
        },
        
        //T7
        {
            holderSize: 1,
            cooldownTime: 100,
            scale: 1,
            speed: 4.0,
            initX: 532,
            initY: 100
        },
        
        //T8
        {
            holderSize: 1,
            cooldownTime: 100,
            scale: 1,
            speed: 4.0,
            initX: 532,
            initY: 100
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