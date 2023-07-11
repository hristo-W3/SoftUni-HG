function excursionSale(input){
    let seaTrips = Number(input[0]);
    let mountainTrips = Number(input[1]);

    let priceSea = 680;
    let priceMountain = 499;
    let profit = 0;

    let command = input[2];
    let index = 3;

    while (command !== "Stop"){
        if ((seaTrips == 0) && (mountainTrips == 0)){
            console.log("Good job! Everything is sold.");
            break;
        }

        switch (command){
            case "sea": 
                if (seaTrips == 0){break;} 
                else {
                profit += priceSea;
                seaTrips--;}
                break;
            case "mountain":
                if (mountainTrips == 0){break;}
                else { 
                profit += priceMountain;
                mountainTrips--;}
                break;
            default: break;
        }
        command = input[index];
        index++;
    }
    console.log(`Profit: ${profit} leva.`);
}

// excursionSale(["2","2","sea","mountain","sea","sea","mountain"])
excursionSale(["6","3","sea","mountain","mountain","mountain","sea","Stop"])

