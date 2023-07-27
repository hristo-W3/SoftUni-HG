function condenseArray(arr){
    nums = arr;
    for (let i = 0; i < nums.length-1; i++) {
        nums[i] = Number(nums[i]);       
    }

    if (nums.length == 1){
        console.log(nums[0]);
    } else {
        while(nums.length > 1){
            let condensed = nums;
            for (let i = 0; i < nums.length - 1; i++) {
                condensed[i] = nums[i] + nums[i+1];
            }
            condensed.pop();

            nums = condensed;
            if(nums.length == 1){
                console.log(nums[0]);
                break;
            }
        }
    }
}

condenseArray([5,0,4,1,2])