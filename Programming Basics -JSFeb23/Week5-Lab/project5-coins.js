function coins(input){
    let totalMoney = (100 * Number(input[0])).toFixed(0);
    let countCoins = 0;
    let tempCoins = 0;

    while(totalMoney > 0){
        if (totalMoney >= 200) {
            countCoins += Math.floor(totalMoney / 200);
            tempCoins = Math.floor(totalMoney / 200);
            totalMoney -= (200 * tempCoins);
            tempCoins = 0;
        }

        if (totalMoney >= 100) {
            countCoins += Math.floor(totalMoney / 100);
            tempCoins = Math.floor(totalMoney / 100);
            totalMoney -= (100 * tempCoins);
            tempCoins = 0;
        }

        if (totalMoney >= 50) {
            countCoins += Math.floor(totalMoney / 50);
            tempCoins = Math.floor(totalMoney / 50);
            totalMoney -= (50 * tempCoins);
            tempCoins = 0;
        }

        if (totalMoney >= 20) {
            countCoins += Math.floor(totalMoney / 20);
            tempCoins = Math.floor(totalMoney / 20);
            totalMoney -= (20 * tempCoins);
            tempCoins = 0;
        }

        if (totalMoney >= 10) {
            countCoins += Math.floor(totalMoney / 10);
            tempCoins = Math.floor(totalMoney / 10);
            totalMoney -= (10 * tempCoins);
            tempCoins = 0;
        }

        if (totalMoney >= 5) {
            countCoins += Math.floor(totalMoney / 5);
            tempCoins = Math.floor(totalMoney / 5);
            totalMoney -= (5 * tempCoins);
            tempCoins = 0;
        }

        if (totalMoney >= 2) {
            countCoins += Math.floor(totalMoney / 2);
            tempCoins = Math.floor(totalMoney / 2);
            totalMoney -= (2 * tempCoins);
            tempCoins = 0;
        }

        if (totalMoney > 0) {
            countCoins += totalMoney;
            tempCoins = totalMoney;
            totalMoney = 0;
            tempCoins = 0;
        }
    }

    console.log(countCoins);
}

coins(["2.73"])