function carFactory(req) {
    let model = req.model;
    let power = req.power;
    let carriage = req.carriage;
    let color = req.color;
    let wheels = req.wheelsize;

    let carObj = {};

    carObj.model = model;

    let engineEnum = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    };

    let carriageEnum = {
        "hatchback": {type: "hatchback", color},
        "coupe": {type: "coupe", color}
    }
    
    if (power <= 90) {
        carObj.engine = engineEnum["Small engine"];
    } else if (power <= 120) {
        carObj.engine = engineEnum["Normal engine"];
    } else {
        carObj.engine = engineEnum["Monster engine"];
    }

    carObj.carriage = carriageEnum[carriage];
    
    if (wheels % 2 === 0){
        wheels--;
    }

    carObj.wheels = Array(4).fill(wheels);
    
    return carObj;
}
    //console.log(carObj);
    //console.log(carObj.engine);
    //console.log(carObj.carriage);
    //console.log(carObj.wheels);
    //console.table(carObj);

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