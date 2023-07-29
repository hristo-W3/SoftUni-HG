function carWash(arr){
    let value = 10;

    for (let i = 1; i < arr.length; i++) {    
        switch(arr[i]){
            case 'soap': value += 10; break;
            case 'water': value *= 1.20; break;
            case 'vacuum cleaner': value *= 1.25; break;
            case 'mud': value *= 0.90; break;
            default: break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])