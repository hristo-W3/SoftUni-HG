function lowestNum(input){
    index = 0;
    let currentInput = input[index];
    let minNumber = Number.MAX_SAFE_INTEGER;
    

    while(currentInput !== "Stop"){
        let currentNumber = Number(currentInput);
        
        if (currentNumber < minNumber){
            minNumber = currentInput;
        }
        index++;
        currentInput = input[index];
    }

    console.log(minNumber);
}