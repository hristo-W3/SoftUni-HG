function solve(arr) {
    let maxArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isMax = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]){
                isMax = false;
                break;
            }
        }
        if (isMax) {maxArr.push(arr[i])}
    }
    console.log(maxArr.join(' '));
}

solve([1, 4, 3, 2])
solve([14, 24, 3, 19, 15, 17])
solve([41, 41, 34, 20])
solve([27, 19, 42, 2, 13, 45, 48] )