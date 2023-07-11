function moving(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let totalSpace = width * length * height;

    let command = input[3];
    let index = 4;

    while (command !== "Done"){
        let boxes = Number(command);
        totalSpace -= boxes; 

        if (totalSpace <= 0){
            console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "Done"){
        console.log(`${totalSpace} Cubic meters left.`);
    }
}

// moving(["10", "10","2","20","20","20","20","122"])
moving(["10","1","2","4", "6","Done"])

