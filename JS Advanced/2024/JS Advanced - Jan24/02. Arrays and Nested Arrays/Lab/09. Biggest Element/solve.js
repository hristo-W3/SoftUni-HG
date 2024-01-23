function solve(array){
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > max){
                max = array[i][j];
            }
        }
    }
    return max;
}

console.log(solve(
    [[20, 50, 10],
 [8, 33, 145]]
));
console.log('---------------------------');
console.log(solve(
    [[3, 5, 7, 12],
 [-1, 4, 33, 2],
 [8, 3, 0, 4]]

));