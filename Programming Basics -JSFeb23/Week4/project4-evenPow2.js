function evenPow2(input){
    let num1 = Number(input[0]);

    for (let i = 0; i <= num1; i++){
        if (i%2 == 0){
            console.log(Math.pow(2,i));
        }
    }
    
}