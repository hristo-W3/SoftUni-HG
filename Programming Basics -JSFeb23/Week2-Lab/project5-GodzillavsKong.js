function GodzillavsKong(input){
    let movieBudget = Number(input[0]);
    let extras = Number(input[1]);
    let clothingPricePer1 = Number(input[2]);

    let priceDecor = movieBudget * 0.10;
    
    if (extras > 150) {
        clothingPricePer1 *= 0.90;
    }

    let priceExtras = extras * clothingPricePer1;
    let totalExpenses = priceDecor + priceExtras;

    if (movieBudget < totalExpenses){
        let shortage = (totalExpenses - movieBudget).toFixed(2);
        console.log("Not enough money!");
        console.log(`Wingard needs ${shortage} leva more.`);
    } else {
        let overBudget = (movieBudget - totalExpenses).toFixed(2);
        console.log("Action!");
        console.log(`Wingard starts filming with ${overBudget} leva left.`)
    }
}