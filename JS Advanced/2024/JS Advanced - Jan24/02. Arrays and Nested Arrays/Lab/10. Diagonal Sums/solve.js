function solve(arr){
    let diag1 = 0;
    let diag2 = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i == j) {
                diag1 += arr[i][j];
            }
            if (i == arr.length - j - 1){
                diag2 += arr[i][j];
            }
        }
    }
    console.log(`${diag1} ${diag2}`);
}

solve(
    [[20, 40],
 [10, 60]]
)
console.log('-----------');
solve(
    [[3, 5, 17],
 [-1, 7, 14],
 [1, -8, 89]]
)