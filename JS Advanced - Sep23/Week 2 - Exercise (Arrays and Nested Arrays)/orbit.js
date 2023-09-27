function orbit(arr){
    let [rows,cols,pointX,pointY] = arr;

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

orbit([5, 5, 2, 2])