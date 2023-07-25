function magicMatrices(arr){
    let isMagical = true;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][0];
    }
    for (let i = 0; i < arr.length; i++) {
        let rowSum = 0;
        let colSum = 0
        for (let j = 0; j < arr.length; j++) {
            rowSum += arr[i][j];
            colSum += arr[j][i];
        }
        if ((rowSum !== colSum) || (rowSum !== sum)){
            isMagical = false;
            break;
        }
    }
    console.log(isMagical);    
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
    )

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
    )

magicMatrices([[1, 1, 0],
               [0, 1, 1],
               [1, 1, 0]]
    )