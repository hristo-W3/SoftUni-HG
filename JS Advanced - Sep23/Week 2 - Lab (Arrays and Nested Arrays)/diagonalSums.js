function diagonalSums(arr){
    let diag1 = 0;
    let diag2 = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i == j) {
                diag1 += arr[i][j];

            }
            if (i == arr.length - j - 1){
                console.log(i);
                console.log(j);
                console.log(diag2);
                diag2 += arr[i][j];
            }
        }
    }
    console.log(`${diag1} ${diag2}`);
}

diagonalSums([[20, 40], [10, 60]])