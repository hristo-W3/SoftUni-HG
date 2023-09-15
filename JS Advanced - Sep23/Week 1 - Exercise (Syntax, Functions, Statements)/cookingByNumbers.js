function cookingByNumbers (...params) {
    let myNumber = Number(params[0]);
    let operationObj = {
        chop: () => myNumber / 2,
        dice: () => Math.sqrt(myNumber),
        spice: () => myNumber + 1,
        bake: () => myNumber * 3,
        fillet: () => myNumber * 0.80
    }

    for (let i = 1; i < params.length; i++) {
        myNumber = operationObj[params[i]]();
        console.log(myNumber);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')