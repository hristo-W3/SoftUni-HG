function printSum(num1,num2){
    let result = num1;
    let total = num1;
    for (let i = num1+1; i <= num2; i++){
        result += " " +i;
        total += i; 
    }
    console.log(result);
    console.log(`Sum: ${total}`);
}