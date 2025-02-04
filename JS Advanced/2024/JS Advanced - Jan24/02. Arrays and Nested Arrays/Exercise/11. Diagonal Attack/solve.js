function solve(arr){
    arr = arr.map(row => row.split(' ').map(Number));

    let diagSum1 = arr.map((row,rowID) => 
        row.filter((e, colID) => rowID === colID))
        .reduce((a,b) => Number(a) + Number(b));

    let diagSum2 = arr.map((row,rowID) => 
        row.filter((e,colID) => colID === row.length - 1 - rowID))
        .reduce((a,b) => Number(a) + Number(b));

    let isDiagonal = (row, col) => row === col || col === arr[row].length - 1 - row;

    diagSum1 !== diagSum2 
        ? console.log(arr.map(row => row.join(' ')).join('\n'))
        : console.log(arr.map((row,rowID) => row.map((e, colID) => isDiagonal(rowID,colID)
            ? e
            : diagSum1)
        .join(' '))
        .join('\n'));
}

solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)
console.log('------------')
solve(['1 1 1',
'1 1 1',
'1 1 0']
)