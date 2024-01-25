function solve(arr){
    let rows = arr[0];
    let cols = arr[1];
    let pointX = arr[2]
    let pointY = arr[3];

    let orbitMatrix = [];

    for (let i = 0; i < rows; i++) {
        orbitMatrix.push([]);
    }

    for (let row = 0; row < rows; row++){
        for (let col = 0; col < cols; col++) {
            orbitMatrix[row][col] = Math.max(Math.abs(row - pointX), Math.abs(col - pointY)) + 1
        }
    }

    console.log(orbitMatrix.map(rows => rows.join(' ')).join('\n'));
}

solve([4, 4, 0, 0])
console.log('-------------');
solve([5, 5, 2, 2])
console.log('-------------');
solve([3, 3, 2, 2])