function toyShop(input){
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let discount = 0.0;

    let totalToys = puzzles + dolls + bears + minions + trucks;

    if (totalToys >= 50) {
        discount = 0.25;
    }

    let totalPrice = ((puzzles * 2.60) + (dolls * 3.00) + (bears * 4.10) + (minions * 8.20) + (trucks * 2));
    let discountedPrice = totalPrice * (1-discount);

    let rent = discountedPrice * 0.10;

    let finalProfit = discountedPrice - rent;

    

    if (tripPrice <= finalProfit){
        let spareMoney = (finalProfit - tripPrice).toFixed(2);
        console.log(`Yes! ${spareMoney} lv left.`);
    } else {
        let overBudget = (tripPrice - finalProfit).toFixed(2);
        console.log(`Not enough money! ${overBudget} lv needed.`);
    }
}