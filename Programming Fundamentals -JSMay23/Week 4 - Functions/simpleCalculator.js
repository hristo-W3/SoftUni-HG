function calculator(num1,num2,operation){
    let calc = {
        'add': (a,b) => a + b,
        'subtract': (a,b) => a - b,
        'multiply': (a,b) => a * b,
        'divide': (a,b) => a / b
    }

    return console.log(calc[operation](num1, num2));
}

calculator(50,13,'subtract')