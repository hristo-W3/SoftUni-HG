function sumAndProduct(input){
    let num = Number(input[0]);
    let numStr = num.toString();
    let break1 = false;
    let isFound = false;

    for (let a = 1; a <= 9; a++){
        for (let b = 9; b >= a; b--){
            for (let c = 0; c <= 9; c++){
                for (let d = 9; d >= c; d--){
                    if (((a + b + c + d) == (a * b * c * d)) && (numStr[numStr.length - 1] == 5)){
                        console.log("" + a + b + c + d);
                        break1 = true;
                        isFound = true;
                        break;
                    }
                    if ((Math.floor((a * b * c * d) / (a + b + c + d)) == 3) && (num % 3 == 0)){
                        console.log("" + d + c + b + a);
                        break1 = true;
                        isFound = true;
                        break;
                    }
                }
                if (break1){break;}
            }
            if (break1){break;}
        }
        if (break1){break;}
    }

    if (!isFound){console.log("Nothing found");}
}

sumAndProduct(['123'])