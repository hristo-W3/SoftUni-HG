function sumOfNrs(input){
    let num1 = input[0];
    let total = 0;

    for (let i = 0; i < num1.length; i++) {
        total += Number(num1[i]);
    }

    console.log(`The sum of the digits is:${total}`);
}