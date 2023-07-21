function arrayRotation(arr, rotation){
    for(let i = 0; i < rotation; i++){
        let firstEl = arr.shift();
        arr.push(firstEl);
    }

    console.log(arr.join(' '));
}