function solve(input) {
    for (let i = 0; i < input; i++) {
        let result = '*';
        for (let j = 1; j < input; j++) {
            result += " *";
        }
        console.log(result);
    }
}

solve(5)