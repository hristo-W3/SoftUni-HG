function sumOf2Nums(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let target = Number(input[2]);
    let counter = 0;
    let checker = 0;

    for (let x1 = start; x1 <= end; x1++){
        for (let x2 = start; x2 <= end; x2++){
            counter++;
            if (checker == 0){
                if (x1 + x2 == target){
                    console.log(`Combination N:${counter} (${x1} + ${x2} = ${x1+x2})`);
                    checker++;
                }
            }
        }   
    }

    if (checker == 0){
        console.log(`${counter} combinations - neither equals ${target}`);
    }
}

sumOf2Nums(["1",
"10",
"5"])
