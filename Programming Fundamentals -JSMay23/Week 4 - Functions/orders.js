function orders(order,qty){
    let price = 0;
    switch(order){
        case 'coffee': 
            price = qty * 1.50;
            break;
        case 'coke': 
            price = qty * 1.40;
            break;
        case 'water': 
            price = qty * 1.00;
            break;
        case 'snacks': 
            price = qty * 2.00;
            break;
        default:            
            break;
    }
    console.log(price.toFixed(2));
}

orders('water',5)


