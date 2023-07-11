function cinema(input){
    let type = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let profit = 0;

    switch(type){
        case "Premiere": profit = rows * cols * 12.00; break;
        case "Normal": profit = rows * cols * 7.50; break;
        case "Discount": profit = rows * cols * 5.00; break;
    }
    
    console.log(profit.toFixed(2));
}