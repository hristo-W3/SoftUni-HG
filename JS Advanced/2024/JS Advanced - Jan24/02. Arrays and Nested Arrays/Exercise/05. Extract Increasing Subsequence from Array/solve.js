function solve(arr){
    let result = [];
    let currentMax = arr.shift();
    result.push(currentMax);

    arr.forEach((x) => {
        if (x >= currentMax) {
            result.push(x);
            currentMax = x;
        }
    })
    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log("----------------------");
console.log(solve([1, 2, 3, 4]));
console.log("----------------------");
console.log(solve([20, 3, 2, 15, 6, 1]));