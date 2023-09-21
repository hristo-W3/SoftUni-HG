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