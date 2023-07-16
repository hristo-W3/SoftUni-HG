function solve(arr1,arr2){

    let sumArr = [];
    let arrayLength = arr1.length;
    for (let i = 0; i < arrayLength; i++) {
        if (i % 2 === 0){
            sumArr[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            sumArr[i] = arr1[i] + arr2[i];
        }        
    }
    console.log(sumArr.join(' - '));
}

solve(['1'],['2','3'])