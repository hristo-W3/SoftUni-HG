function solve(n, m){
    let num1 = Number(n);
    let num2 = Number(m);

    let result = 0;

    for (let i = n; i <= m; i++) {
        result += i;        
    }

    return result;
}