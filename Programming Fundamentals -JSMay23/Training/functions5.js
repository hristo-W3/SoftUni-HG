function calculator(numOne,numTwo,operation){
    let calc = {
        'add': (a,b) => a + b,
        'subtract': (a,b) => a - b,
        'multiply': (a,b) => a * b,
        'divide': (a,b) => a / b
    }

    return console.log(calc[operation](numOne, numTwo));
}

calculator(50,13,'subtract')