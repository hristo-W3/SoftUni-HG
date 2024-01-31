function solve(order) {
    let carObj = {};

    carObj.model = order.model;

    // Object with the different engine types
    let engineEnum = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    };

    // Object with the carriage types
    let carriageEnum = {
        "hatchback": {type: "hatchback", color: order.color},
        "coupe": {type: "coupe", color: order.color}
    }

    // Assign smallest engine possible, that fits the req for power
    if (order.power <= 90) {
        carObj.engine = engineEnum["Small engine"];
    } else if (order.power <= 120) {
        carObj.engine = engineEnum["Normal engine"];
    } else {
        carObj.engine = engineEnum["Monster engine"];
    }

    carObj.carriage = carriageEnum[order.carriage];

    if (order.wheelsize % 2 == 0) {
        order.wheelsize--;
    }

    carObj.wheels = Array(4).fill(order.wheelsize);
    

    return carObj;
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));
console.log('--------------------------');
console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));