function solve(arr){
    //Sorting the arr elements
    arr.sort((a,b) => a - b);
    let n = arr.length;

    //To store modified array
    let tempArr = new Array(n);

    //Adding numbers from sorted array to new array accordingly
    let arrIndex = 0;

    //Traverse from beginning to end simultaneously
    for (let i = 0, j = n - 1; i < n / 2 || j > n / 2; i++, j--) {

        if (arrIndex < n){
            tempArr[arrIndex] = arr[i];
            arrIndex++;            
        }

        if (arrIndex < n){
            tempArr[arrIndex] = arr[j];
            arrIndex++;
        } 
    }

    //Print the sorted array
    return tempArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))