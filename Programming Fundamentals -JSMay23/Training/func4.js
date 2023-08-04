function solve(number){
    let numAsString = number.toString();

    let oddSum = 0;
    let evenSum = 0;
    let numLength = numAsString.length;

    for (let index = 0; index < numLength; index++) {
        let currentNumber = Number(numAsString[index]);

        if (currentNumber % 2 === 0) {evenSum += currentNumber;}
        else {oddSum += currentNumber;}
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(solve(123456));