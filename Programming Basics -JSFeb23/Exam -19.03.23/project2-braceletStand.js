function braceletStand(input){
    let dailyAllowance = Number(input[0]);
    let dailyIncome = Number(input[1]);
    let dailyExpences = Number(input[2]);
    let giftPrice = Number(input[3]);

    let days = 5;

    let totalProfit = (days * dailyAllowance) + (days * dailyIncome) - dailyExpences;

    let priceDifference = Math.abs(totalProfit - giftPrice);
    if (totalProfit >= giftPrice){
        console.log(`Profit: ${totalProfit.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${priceDifference.toFixed(2)} BGN.`);
    }
}

// braceletStand(["5.12","32.05","15","150",])
// braceletStand(["2.10","17.50","20.20","148.50","15.20","200.00 ","7.30 ","1500.12"])
// braceletStand(["5.12","32.05","15","150"])
// braceletStand(["2.10","17.50","20.20","148.50"])
braceletStand(["15.20","200.00","7.30","1500.12"])




