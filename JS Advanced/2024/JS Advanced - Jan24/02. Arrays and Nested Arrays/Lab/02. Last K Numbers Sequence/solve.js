function solve(n,k){
    let result = [1];

    for (let i = 1; i < n; i++) {
        let checker = result.length > k ? k : result.length;
        let currentEl = 0;
        for (let j = 1; j <= checker; j++) {
            currentEl += result[i-j];
          
        }
        result.push(currentEl);
    }
    return result;
}

console.log(solve(6, 3));
console.log(solve(8, 2));