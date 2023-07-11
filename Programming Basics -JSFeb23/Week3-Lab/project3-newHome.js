function newHome(input){
    let flowers = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);

    let priceRoses = 5.00;
    let priceDahlias = 3.80;
    let priceTulips = 2.80;
    let priceNarcissus = 3.00;
    let priceGladiolus = 2.50;

    totalPrice = 0.0;

    switch(flowers){
        case "Roses":
            if (quantity > 80){
                totalPrice = (quantity * priceRoses) * 0.90;
            } else {
                totalPrice = quantity * priceRoses;
            } break;
        case "Dahlias":
            if (quantity > 90){
                totalPrice = (quantity * priceDahlias) * 0.85;
            } else {
                totalPrice = quantity * priceDahlias;
            } break;
        case "Tulips":
            if (quantity > 80){
                totalPrice = (quantity * priceTulips) * 0.85;
            } else {
                totalPrice = quantity * priceTulips;
            } break;
        case "Narcissus":
            if (quantity < 120){
                totalPrice = (quantity * priceNarcissus) * 1.15;
            } else {
                totalPrice = quantity * priceNarcissus;
            } break;
        case "Gladiolus":
            if (quantity < 80){
                totalPrice = (quantity * priceGladiolus) * 1.20;
            } else {
                totalPrice = quantity * priceGladiolus;
            } break;
        default: console.log("error"); break;
    }
 

    difference = Math.abs(budget - totalPrice).toFixed(2);
    if (budget < totalPrice){
        console.log(`Not enough money, you need ${difference} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${quantity} ${flowers} and ${difference} leva left.`);
    }
}

newHome(["Roses","55","250"]);
