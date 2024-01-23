function solve(array){
    let result = array.sort((a,b) => a - b)
    let half = Math.ceil(result.length / 2)

    return result.slice(result.length - half, result.length)
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));