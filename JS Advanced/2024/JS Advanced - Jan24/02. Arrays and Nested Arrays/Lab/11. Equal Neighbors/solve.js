function solve(array){
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        let row = array[i];
        for (let j = 0; j < row.length; j++) {
            let col = row[j];
 
            if (i !== array.length - 1) {
                if (col === row[j + 1]) {
                    counter++;
                }
                if (col === array[i + 1][j]) {
                    counter++;
                }
            }
            else if (col === row[j + 1] || col === array[i][j + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)
console.log('------------');
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
)