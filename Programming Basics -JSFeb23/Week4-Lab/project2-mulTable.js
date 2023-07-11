function multiTable(input){
    let num1 = Number(input[0]);

    for (let i = 1; i <= 10; i++){
        let currentResult = i * num1;
        console.log(`${i} * ${num1} = ${currentResult}`);
    }
}