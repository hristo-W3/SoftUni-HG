function solve(arr) {
    let maxLength = 1;
    let symbol = '';
    for (let i = 0; i < arr.length; i++) {
        let currSequence = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currSequence++;
                sumbol = arr[i];
            } else {
                break;
            }
        }
        if (maxLength < currSequence){maxLength = currSequence; symbol = arr[i]}
    }    
    console.log(`${symbol} `.repeat(maxLength));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1] )