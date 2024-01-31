function solve(input) {
    let result = {};

    for (const line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!result.hasOwnProperty(product)) {
            result[product] = [price, town];
        } else {
            if (result[product][0] > price) {
                result[product] = [price, town]
            }
        }
    }
    for (const product in result) {
        console.log(`${product} -> ${result[product][0]} (${result[product][1]})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)
