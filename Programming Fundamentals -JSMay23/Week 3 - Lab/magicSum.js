function magicSum(arr,num){
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            let prevNum = Number(arr[i-1]);
            for (let j = i; j < arr.length; j++) {
                let currNum = Number(arr[j]);
                let sum = currNum + prevNum;
                if (sum === num) {
                    console.log(`${prevNum} ${currNum}`);
                }
            }
        }
    }
}