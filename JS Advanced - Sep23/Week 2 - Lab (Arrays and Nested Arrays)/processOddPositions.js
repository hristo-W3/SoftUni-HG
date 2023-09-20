function processOddPositions(array){
    return array.filter((n, i) => i % 2 === 1)
            .map(x => x * 2)
            .reverse()
            .join(' ');
}