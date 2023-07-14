function reverse(arr){
    for (let i = 0; i < arr.length / 2; i++){
        let oldEl = arr[i];
        let prevIndex = arr.length - 1 - i;
        arr[i] = arr[prevIndex];
        arr[prevIndex] = oldEl;
    }

    console.log(arr.join(' '));
}