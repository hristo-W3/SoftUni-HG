function solve(arr) {
    let foundNum = false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let leftEl = 0; leftEl < i; leftEl++) {
            leftSum += arr[leftEl];
        }
        for (let rightEl = i + 1; rightEl < arr.length; rightEl++) {
            rightSum += arr[rightEl];
        }
        if (leftSum === rightSum) {
            console.log(i);
            foundNum = true;        
        }
    }
    if(!foundNum){
        console.log('no');
    }
}

solve([10, 5, 5, 99,
    3, 4, 2, 5, 1,
    1, 4]
    )