function solve(arr1, arr2) {
    let resultArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0){
            resultArr[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            resultArr[i] = arr1[i] + arr2[i];
        }
    }
    console.log(resultArr.join(' - '));
}

solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)