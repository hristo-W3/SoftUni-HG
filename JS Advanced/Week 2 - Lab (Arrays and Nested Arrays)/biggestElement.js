function biggestElement(array){
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

console.log(biggestElement([[20, 50, 10],[8, 33, 145]]));