function solve(number, power) {
    
    function raised(num1, pow1) {
        let result = num1;
        for (let i = 1; i < pow1; i++) {
            result *= num1;            
        }
        return result;
    }

    console.log(raised(number,power));
}

solve(2,8)