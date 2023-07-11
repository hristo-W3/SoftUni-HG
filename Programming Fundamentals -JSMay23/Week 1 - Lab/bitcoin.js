function bitcoin(input){
    let currentMoney = 0;
    let finalMoney = 0;
    let firstBitcoinDay = 0;
    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;

    let bitcoins = 0;

    for (let i = 0; i < input.length; i++) {
        let currentGrams = Number(input[i]);
        if ((i + 1) % 3 == 0){
            currentGrams *= 0.7;
        }
        currentMoney += currentGrams * goldPrice;

        if (currentMoney >= bitcoinPrice && firstBitcoinDay == 0){
            firstBitcoinDay = i+1;
        }
    }

    bitcoins = Math.floor(currentMoney/bitcoinPrice);
    finalMoney = currentMoney - (bitcoins * bitcoinPrice);

    console.log(`Bought bitcoins: ${bitcoins}`);

    if (bitcoins > 0){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }

    console.log(`Left money: ${finalMoney.toFixed(2)} lv.`);
}

bitcoin([3124.15,504.212,2511.124])