function shopping(input){
    let budget = Number(input[0]);
    let countGPUs = Number(input[1]);
    let countCPUs = Number(input[2]);
    let countRAM = Number(input[3]);

    let priceGPUs = countGPUs * 250;
    let priceCPUs = countCPUs * (priceGPUs * 0.35);
    let priceRAM = countRAM * (priceGPUs * 0.10);

    let finalPrice = priceGPUs + priceCPUs + priceRAM;
    let discount = 0;
    if (countGPUs > countCPUs){
        discount = finalPrice * 0.15;
        finalPrice -= discount;
    }

    let difference = budget - finalPrice;
    let differenceFormatted = Math.abs(difference).toFixed(2);
    if (difference < 0) {
        console.log(`Not enough money! You need ${differenceFormatted} leva more!`);
    } else {
        console.log(`You have ${differenceFormatted} leva left!`);
    }
}