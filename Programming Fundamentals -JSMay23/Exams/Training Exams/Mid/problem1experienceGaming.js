function solve(input) {
    let xpNeeded = input[0];
    let totalBattles = input[1];
    let totalXP = 0;
    for (let i = 0; i < totalBattles; i++) {
        let currentXP = input[i + 2];
        if ((i + 1) % 3 === 0) {
            currentXP *= 1.15;
        }
        if ((i + 1) % 5 === 0) {
            currentXP *= 0.90;
        }
        if ((i + 1) % 15 === 0) {
            currentXP *= 1.05;
        }
        totalXP += currentXP;
        if (totalXP >= xpNeeded){
            console.log(`Player successfully collected his needed experience for ${i+1} battles.`);
            break;
        }
    }
    if (totalXP < xpNeeded){
        console.log(`Player was not able to collect the needed experience, ${(xpNeeded - totalXP).toFixed(2)} more needed.`);
    }
}

solve([500,5,50,100,200,100,30])
console.log('--------------');
solve([500,5,50,100,200,100,20])
console.log('--------------');
solve([400,5,50,100,200,100,20])