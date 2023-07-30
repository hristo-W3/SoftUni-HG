function solve(arr){
    return arr.sort((a, b) => a - b)
        .slice(0,2)
        .join(' ');
}

console.log(solve([1,6,4,8,2,5]));