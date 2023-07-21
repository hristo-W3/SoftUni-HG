function equalSums(arr){
    let leftSum = 0;
    let rightSum = 0;
    let sumIndex = 0;
    let isEqual = false;
    let arrLength = arr.length;

    for (let currentIndex = 0; currentIndex < arrLength; currentIndex++) {
        leftSum = 0;
        rightSum = 0;
        for (let i = currentIndex; i < arrLength; i++) {
            rightSum += Number(arr[i]);
        }      
        for (let i = currentIndex; i >= 0; i--) {
            leftSum += Number(arr[i]);
        }      
        if (leftSum === rightSum){
            sumIndex = currentIndex;
            isEqual = true;
        }
    }
    if (isEqual){
        console.log(sumIndex);
    } else {
        console.log("no");
    }
}

equalSums([1,2,3]
     );