function reverse(n,inputArr){
    let arr = [];
    for (let i=0; i<n; i++){
        arr.push(inputArr[i]);
    }
    let output = "";
    for (let i=arr.length-1; i >= 0; i--){
        output += arr[i] + " ";
    }
    console.log(output);
}