function pyramid(input){
    let target = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let rows = 1; rows <= target; rows++){
        for (let cols = 1; cols <= rows; cols++){
            if (current > target){
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger){
            break;
        }
    }
}