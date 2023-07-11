function cake(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let startingPieces = width * length;
    
    let index = 2;
    let command = input[index];

    while (command !== "STOP") {
        if ((startingPieces - Number(command)) > 0){
            startingPieces -= Number(command);
        } else {
            console.log(`No more cake left! You need ${Number(command)-startingPieces} pieces more.`);
            break;
        }
        index++;
        command = input[index];
    }

    if (command === "STOP") {
        console.log(`${startingPieces} pieces are left.`);
    }
}

// cake(["10","10","20","20","20","20","21"])
cake(["10","2","2","4","6","STOP"])

