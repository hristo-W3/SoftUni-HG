function sumNumbers(input){
    let goal = Number(input[0]);
    let index = 1;
    let total = 0;

    while (total < goal){
        total += Number(input[index]);
        index++;
    }

    console.log(total);
}