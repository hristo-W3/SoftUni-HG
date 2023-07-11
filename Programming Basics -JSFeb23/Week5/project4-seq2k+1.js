function sequence(input){
    let targetNum = Number(input[0]);

    let index = 1;
    let lastNumber = 0;

    while (index <= targetNum){
        if (index == 2 * lastNumber + 1){
            console.log(index);
            lastNumber = index;
        }
        index++;
    }
}


