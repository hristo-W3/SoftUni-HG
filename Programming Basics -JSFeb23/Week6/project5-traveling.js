function traveling(input){
    let index = 0;
    let command = input[index];
    index++;

    while(command !== "End"){
        let destination = command;
        let budget = Number(input[index]);
        index++;

        let save = 0;

        while(save < budget){
            let money = Number(input[index]);
            index++;
            save += money;
        }

        console.log(`Going to ${destination}!`);

        command = input[index];
        index++;
    }
}