function accBalance(input){
    let totalMoney = 0;
    let index = 0;
    let checkMarker = 0;

    while(checkMarker === 0){
        let moneyIn = input[index];
        if (moneyIn === "NoMoreMoney"){
            //checkMarker++;
            break;
        } else {
            moneyIn = Number(moneyIn);
            if (moneyIn >= 0){
                totalMoney += moneyIn;
                console.log(`Increase: ${moneyIn.toFixed(2)}`);
            } else {
                //checkMarker++;
                console.log("Invalid operation!");
                break;
            }
        }
        index++;
    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);  
}

accBalance(["5.51","69.42","100","NoMoreMoney"])
accBalance(["120","45.55","-150"])
