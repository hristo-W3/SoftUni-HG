function solve(arr, order) {
    let result = arr.sort((a, b) => order === 'asc' ? a - b : b - a)
    return result;
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'))