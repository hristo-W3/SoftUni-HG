function solve(num1, num2, op) {
    let result;

    switch(op){
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "/": result = num1 / num2; break;
        case "*": result = num1 * num2; break;
        case "%": result = num1 % num2; break;
        case "**": result = num1 ** num2; break;
        default: break;
    }

    console.log(result);
}

solve(5,6,'+')
solve(3, 5.5, '*')