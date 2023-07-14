function spiceMustFlow(startingYield){
    let days = 0;
    let finalYield = 0;
    while (startingYield >= 100){
        finalYield += startingYield -26;
        startingYield -= 10;
        days++;
    }
    finalYield -=26;
    console.log(days);
    console.log(days === 0 ? 0 : finalYield);
}

spiceMustFlow(50)