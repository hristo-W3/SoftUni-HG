function yardGreening(input){
    let size = Number(input[0]);
    let price = size * 7.61;
    let discount = price * 0.18;
    let finalPrice = price - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(['550'])