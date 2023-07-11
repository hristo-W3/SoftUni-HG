function repainting(input){
    let plastic = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workerHours = Number(input[3]);

    let pricePlastic = (plastic + 2) * 1.50;
    let pricePaint = (paint + (0.1 * paint)) * 14.50;
    let priceThinner = thinner * 5.00;
    let priceBags = 0.40;
    let priceMaterials = pricePlastic + pricePaint + priceThinner + priceBags;
    let priceWorkers = (priceMaterials * 0.30) * workerHours;
    let finalPrice = priceMaterials + priceWorkers;
    console.log(finalPrice);
}

repainting(['5','10','10','1'])