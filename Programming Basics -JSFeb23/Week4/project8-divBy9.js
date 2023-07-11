function divBy9(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let total = 0;

    for (let i = num1; i <= num2; i++){
        if (i%9 == 0){
            total += i;
        }
    }

    console.log(`The sum: ${total}`);

    for (let i = num1; i <= num2; i++){
        if (i%9 == 0){
            console.log(i);
        }
    }
}