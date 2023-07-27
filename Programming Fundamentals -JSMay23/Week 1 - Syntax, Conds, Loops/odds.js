function odds(num){
    let total = 0;
    let counter = 1;
    for (let i = 1; i <= num; i++) {
        console.log(counter);
        total+=counter;
        counter+=2;               
    }
    console.log(`Sum: ${total}`);
}

odds(3);