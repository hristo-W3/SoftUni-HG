function solve(order, quantity) {    

    function drinkPrice(type, num) {
        let drinks = ['coffee', 'water', 'coke', 'snacks'];
        let prices = [1.50, 1.00, 1.40, 2.00];
        let selected = drinks.indexOf(type);
        return `${(prices[selected] * num).toFixed(2)}`
    }

    console.log(drinkPrice(order, quantity));
}

solve('coffee', 2)