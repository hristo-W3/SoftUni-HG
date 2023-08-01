function solve(nums) {
    if (nums.length === 1){
        console.log(nums[0]);
    } else {
        while (nums.length > 0) {
            let condensed = nums;
            for (let i = 0; i < nums.length; i++) {
                condensed[i] = nums[i] + nums[i + 1];                
            }
            condensed.pop();
            nums = condensed;

            if (nums.length === 1){
                console.log(nums[0]);
                break;
            }
        }
    }    
}