function sumPrime(input){
    let index = 0;
    let command = input[index];
    index++;
    let sumPrimes = 0;
    let sumNonPrimes = 0;

    while (command !== "stop"){
        let currentNumber = Number(command);
        let isPrime = true;

        if (currentNumber < 0){
            console.log("Number is negative.");
            command=input[index];
            index++;
            continue;
        }

        for (let i = 2; i < currentNumber; i++){
            if (currentNumber % i == 0){
                isPrime = false;
            }
        }
        
        if (isPrime){
            sumPrimes += currentNumber;
        } else {
            sumNonPrimes += currentNumber;
        }

        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrimes}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimes}`);
}