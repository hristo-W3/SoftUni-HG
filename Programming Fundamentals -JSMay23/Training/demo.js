function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let left = 0; left < i; left++) {
            leftSum += arr[left];
        }
        for (let right = i + 1; right < arr.length; right++) {
            rightSum += arr[right];
        }
        if (leftSum === rightSum){
            return i;
        }
    }
    console.log('no');
}

solve([1, 2, 3, 3] )