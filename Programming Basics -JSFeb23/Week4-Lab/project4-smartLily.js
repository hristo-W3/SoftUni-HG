function smartLily(input){
    let ageLily = Number(input[0]);
    let priceWasher = Number(input[1]);
    let priceToy = Number(input[2]);
    let totalSaved = 0;
    let countMoney = 0;
    let countToys = 0;

    for (let each = 1; each <= ageLily; each++){
        if (each%2 === 0){
            totalSaved += (10 * (each/2));
            countMoney++;
        } else {
            countToys++;
        }
    }

    totalSaved = totalSaved +  (countToys * priceToy) - countMoney;

    let difference = Math.abs(totalSaved - priceWasher);

    if (totalSaved >= priceWasher){
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        console.log(`No! ${difference.toFixed(2)}`);
    }

}