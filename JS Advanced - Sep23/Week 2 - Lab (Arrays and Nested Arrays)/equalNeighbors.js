function equalNeighbors(array){
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