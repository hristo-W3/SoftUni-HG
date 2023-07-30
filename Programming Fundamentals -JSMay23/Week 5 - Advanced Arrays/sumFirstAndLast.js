function sum(arr){
    if (arr.length === 1){
        return console.log(Number(arr.toString()));
    }

    let sum = Number(arr.shift()) + Number(arr.pop());
    console.log(sum);
}

sum(['5','10','15'])