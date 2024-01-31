function solve(order) {
    let carObj = {
        model: order.model,
        engine: {
            power: 0,
            volume: 0
        },
        carriage: {
            type: order.carriage,
            color: order.color
        },
        wheels: []
    }
    console.log(carObj);
}

solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)