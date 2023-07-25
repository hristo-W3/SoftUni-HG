function printEl(arr){
    //let step = arr.slice(-1);
    let step = Number(arr.pop());
    let result = '';
    for (let i = 0; i < arr.length; i+=step) {
        result += `${arr[i]} `;        
    }
    console.log(result);
}

printEl(['5', '20', '31', '4', '20', '2'] )
printEl(['dsa', 'asd', 'test', 'test', '2'] )
printEl(['1', '2', '3', '4', '5', '6'] )