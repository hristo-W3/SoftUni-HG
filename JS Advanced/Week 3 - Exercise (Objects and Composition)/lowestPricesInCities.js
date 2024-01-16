function lowestPricesInCities(input) {
    let products = {};

    for (let each of input) {
        let [town, product, price] = each.split(' | ');
        price = Number(price);

        if (!products.hasOwnProperty(product)) {
            products[product] = {
                town,
                price
            };
        } 

        if (products[product]["price"] > price) {
            products[product]["town"] = town;
            products[product]["price"] = price;
        }
    }

    for(let [product, productData] of Object.entries(products)){
        console.log(`${product} -> ${productData.price} (${productData.town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])