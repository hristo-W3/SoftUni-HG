function solve(input) {
    let arr = input[0];
    let entryPoints = input[1];
    let price = input[2];
    let leftSum = 0;
    let rightSum = 0;
    if (price === "cheap"){
        for (let i = 0; i < entryPoints; i++) {
            if (arr[i] < arr[entryPoints]){
                leftSum += arr[i];
            }            
        }  
        for (let i = entryPoints + 1; i < arr.length; i++) {
            if (arr[i] < arr[entryPoints]){
                rightSum += arr[i];
            }            
        }       
    } else if (price === "expensive"){
        for (let i = 0; i < entryPoints; i++) {
            if (arr[i] >= arr[entryPoints]){
                leftSum += arr[i];
            }            
        }  
        for (let i = entryPoints + 1; i < arr.length; i++) {
            if (arr[i] >= arr[entryPoints]){
                rightSum += arr[i];
            }            
        }  
    }
    console.log((leftSum >= rightSum) ? `Left - ${leftSum}` : `Right - ${rightSum}`);
}

solve([[1, 5, 1], 1, 'cheap']);
console.log('---------------');
solve([[5,10,12,5,4,20],3,'cheap'])
console.log('---------------');
solve([[-2,2,1,5,9,3,2,-2,1,-1,-3,3],7,'expensive'])