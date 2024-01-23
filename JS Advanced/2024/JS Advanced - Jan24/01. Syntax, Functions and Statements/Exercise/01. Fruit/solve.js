function solve(fruit, weight, price) {
    let finalWeight = weight / 1000;
    let finalPrice = finalWeight * price;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${finalWeight.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)