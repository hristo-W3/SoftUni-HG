function sumDigits(num){
    let str = num.toString();
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        total += Number(str[i]);
    }
    console.log(total);
}

sumDigits(543)