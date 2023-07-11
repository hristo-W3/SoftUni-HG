function basketballEquipment(input){
    let sub = Number(input[0]);
    let shoes = sub * 0.60;
    let clothes = shoes * 0.80;
    let ball = clothes * 0.25;
    let accs = ball * 0.20;

    let totalPrice = sub + shoes + clothes + ball + accs;
    console.log(totalPrice);
}

basketballEquipment(['550']);