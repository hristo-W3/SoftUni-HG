function binToDec(num){
    let binary = num.toString()
    let decimal = 0;
    for (let i = binary.length - 1; i >= 0; i--){
        if (binary[i] =='1'){
            decimal += Math.pow(2,((binary.length-1)-i));
        }
    }
    console.log(decimal);
}

binToDec("00001001");