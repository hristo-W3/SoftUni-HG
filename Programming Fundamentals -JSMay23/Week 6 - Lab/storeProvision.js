function storeProvision(arr1, arr2) {
    let myStore = {};
    for (let i = 0; i < arr1.length; i += 2) {
        let product = arr1[i];
        myStore[product] = Number(arr1[i + 1]);
    }

    for (let i = 0; i < arr2.length; i += 2) {
        let product = arr2[i];
        if (myStore.hasOwnProperty(product)) {
            myStore[product] += Number(arr2[i + 1]);
        } else {
            myStore[product] = Number(arr2[i + 1]);
        }
    }

    for (let [key, value] of Object.entries(myStore)) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])
console.log('-----------');
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14',
    'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7',
        'Tomatoes', '7', 'Bananas', '30'
    ]
)