function excursionCalculator(input){
    let people = Number(input[0]);
    let season = input[1];
    let total = 0;

    switch(season){
        case "spring":
            if (people <= 5){total = people * 50;} 
            else {total = people * 48}
            break;
        case "summer": 
            if (people <= 5){total = people * 48.50;} 
            else {total = people * 45}
            total *= 0.85;
            break;
        case "autumn": 
            if (people <= 5){total = people * 60;} 
            else {total = people * 49.50}
            break;
        case "winter": 
            if (people <= 5){total = people * 86;} 
            else {total = people * 85}
            total *= 1.08;
            break;
        default: break;
    }

    console.log(`${total.toFixed(2)} leva.`);
}

excursionCalculator(["10","summer"])