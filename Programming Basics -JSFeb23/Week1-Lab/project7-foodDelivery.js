function foodDelivery(input){
    let meal_chicken = Number(input[0]);
    let meal_fish = Number(input[1]);
    let meal_vegan = Number(input[2]);

    let price_meal_chicken = meal_chicken * 10.35;
    let price_meal_fish = meal_fish * 12.40;
    let price_meal_vegan = meal_vegan * 8.15;

    let total_price_meals = price_meal_chicken + price_meal_fish + price_meal_vegan;
    let price_dessert = total_price_meals * 0.20;
    let price_delivery = 2.50;

    let final_price = total_price_meals + price_dessert + price_delivery;

    console.log(final_price);
}

foodDelivery(['9','2','6'])