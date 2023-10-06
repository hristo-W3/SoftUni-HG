function carFactory(req) {
    let engines = {
        small: {
            power: 90,
            volume: 1800
        },
        normal: {
            power: 120,
            volume: 2400
        },
        monster: {
            power: 200,
            volume: 3500
        }
    }

    // let carriages = {
    //     hatchback: {
    //         type: 'hatchback',
    //         color: req.color
    //     },
    //     coupe: {
    //         type: 'coupe',
    //         color: req.color
    //     }
    // }

    if (req.wheelsize % 2 === 0){
        req.wheelsize--;
    }
    let wheelsArr = Array(4).fill(req.wheelsize)
    
    let neededPower = 0;
    let neededVolume = 0;
    if (req.power <= engines.small.power) {
        neededPower = engines.small.power;
        neededVolume = engines.small.volume;
    } else if (req.power <= engines.normal.power) {
        neededPower = engines.normal.power;
        neededVolume = engines.normal.volume;
    } else {
        neededPower = engines.monster.power;
        neededVolume = engines.monster.volume;
    }

    let carObj = {
        model: req.model,
        engine: {
            power: neededPower,
            volume: neededVolume
        },
        carriage: {
            type: req.carriage,
            color: req.color
        },
        wheels: wheelsArr
    };
    console.log(carObj);
    console.log(carObj.engine);
    console.log(carObj.carriage);
    console.log(carObj.wheels);
}

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)
console.log("----------------");
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
)