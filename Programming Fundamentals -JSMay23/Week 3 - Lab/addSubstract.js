function solve(arr){
    sum1 = 0;
    sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        sum1 += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 == 0){
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        sum2+= arr[i];
    }
    console.log(arr);
    console.log(sum1);
    console.log(sum2);
}