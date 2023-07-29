function signCheck(numOne, numTwo, numThree){
    let negativesCount = 0;
    let isNegative = false;
    if (numOne.toString()[0] === '-'){negativesCount++;}
    if (numTwo.toString()[0] === '-'){negativesCount++;}
    if (numThree.toString()[0] === '-'){negativesCount++;}

    if (negativesCount % 2 !== 0){isNegative = true;}
    console.log((isNegative) ? "Negative" : "Positive");
}

signCheck(-2,3,5)