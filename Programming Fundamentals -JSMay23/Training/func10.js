function solve(firstNum, secondNum){

    function factorial(number){
        if (number === 0){
            return 1;
        } else {
            return number * factorial(number - 1);
        }
    }

    let firstFact = factorial(firstNum);
    let secondFact = factorial(secondNum);
    let result = firstFact / secondFact;

    console.log(result.toFixed(2));
}

solve(5,2)