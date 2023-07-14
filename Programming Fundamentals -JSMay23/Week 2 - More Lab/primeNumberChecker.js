function primes(num){
    let counter = 0;
    for (let i = 1; i < num; i++){
        if (num % i === 0){counter++;}
    }
    console.log(counter <= 1);
}

primes(81)