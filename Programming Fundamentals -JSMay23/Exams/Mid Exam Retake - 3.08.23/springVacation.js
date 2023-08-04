function solve(input) {
    let daysOfTrip = Number(input[0]);
    let budget = Number(input[1]);
    let people = Number(input[2]);
    let fuelPrice = Number(input[3]);
    let foodDailyPerOne = Number(input[4]);
    let roomDailyPerOne = Number(input[5]);
    
    let totalExpenses = 0;
    let enoughMoney = true;

    //Initial expenses for the group
    let accExpenses = roomDailyPerOne * people * daysOfTrip;

    //Discount for more than 10
    if (people > 10){
        accExpenses *= 0.75;
    }
    totalExpenses += ((foodDailyPerOne  * people * daysOfTrip) + accExpenses);

    if (totalExpenses > budget) {
        console.log(`Not enough money to continue the trip. You need ${totalExpenses - budget}$ more.`);
        enoughMoney = false;
    }

    for (let eachDay = 1; eachDay <= daysOfTrip; eachDay++) {
        let distanceTraveled = Number(input[eachDay + 5]);
        totalExpenses += (fuelPrice * distanceTraveled);
        if (eachDay % 3 === 0 || eachDay % 5 === 0) {
            totalExpenses *= 1.4;
        }
        if (eachDay % 7 === 0){
            totalExpenses -= (totalExpenses / people);
        }
        if (totalExpenses > budget) {
            console.log(`Not enough money to continue the trip. You need ${(totalExpenses - budget).toFixed(2)}$ more.`);
            enoughMoney = false;
            break;
        }
    }
    if (enoughMoney){
        console.log(`You have reached the destination. You have ${(budget - totalExpenses).toFixed(2)}$ budget left.`);
    }
}

//solve(['7','12000','5','1.5','10','20','512','318','202','154','222','108','123'])
console.log('----------------');
solve(["10","20500","11","1.2","8","13","100","150","500","400","600","130","300","350","200","300"])