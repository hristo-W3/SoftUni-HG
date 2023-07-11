function bonusPoints(input){
    let num1 = Number(input[0]);
    let bonus = 0;

    if (num1 <= 100){
        bonus += 5;
    } else if (num1 <= 1000){
        bonus += 0.2*num1;
    } else {
        bonus += 0.1*num1;
    }

    if (num1 % 2 == 0) {
        bonus += 1;
    }

    if ((num1 % 5 == 0) && (num1 % 2 != 0)){
        bonus += 2;
    }

    num1 += bonus;
    
    console.log(bonus);
    console.log(num1);
}