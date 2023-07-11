function boat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let people = Number(input[2]);

    let rentSpring = 3000;
    let rentSummer = 4200;
    let rentAutumn = 4200;
    let rentWinter = 2600;

    let totalPrice = 0.0;

    switch(season){
        case "Spring": totalPrice = rentSpring; break;
        case "Summer": totalPrice = rentSummer; break;
        case "Autumn": totalPrice = rentAutumn; break;
        case "Winter": totalPrice = rentWinter; break;
        default: console.log("error"); break;
    }

    if (people <= 6){
        totalPrice *= 0.90;
    } else if ((7 <= people) && (people <= 11)){
        totalPrice *= 0.85;
    } else if (people >= 12){
        totalPrice *= 0.75;
    }

    if ((people % 2 == 0) && (!(season==="Autumn"))){
        totalPrice *= 0.95;
    }

    let difference = Math.abs(budget - totalPrice).toFixed(2);
    if (budget < totalPrice){
        console.log(`Not enough money! You need ${difference} leva.`);
    } else {
        console.log(`Yes! You have ${difference} leva left.`);
    }

}