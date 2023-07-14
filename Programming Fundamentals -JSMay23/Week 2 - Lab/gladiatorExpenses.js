function expenses(lostFights,priceHelmet,priceSword,priceShield,priceArmor){
    let total = 0;
    if (lostFights / 2 > 0){total += (parseInt(lostFights/2) * priceHelmet);}
    if (lostFights / 3 > 0){total += (parseInt(lostFights/3) * priceSword);}
    if (lostFights / 6 > 0){total += (parseInt(lostFights/6) * priceShield);}
    if (lostFights / 12 > 0){total += (parseInt(lostFights/12) * priceArmor);}

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

expenses(23,12.50,21.50,40,200)