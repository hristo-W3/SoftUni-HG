function carFactory(req) {
    let carObj = {
        model: req.model
    }

    let power = req.power;

    if (power <= 90) {
        carObj.engine = {
            power: 90, 
            volume: 1800
        }
    } else if (power <= 120) {
        carObj.engine = {
            power: 120, 
            volume: 2400
        }
    } else {
        carObj.engine = {
            power: 200, 
            volume: 3500
        }
    }

    carObj.carriage = {
        type: req.carriage,
        color: req.color
    }

    let wheels = req.wheelsize;
    if (wheels % 2 === 0){
        wheels--;
    }

    carObj.wheels = Array(4).fill(wheels)
    
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