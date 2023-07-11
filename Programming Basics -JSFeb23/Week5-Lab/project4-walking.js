function walking(input){
    let target = 10000;
    let index = 0;
    let command = input[index];
    index++;
    let totalSteps = 0;

    while (command !== "Going home"){
        let steps = Number(command);

        totalSteps += steps;

        if (totalSteps >= target) {
            console.log("Goal reached! Good job!");
            console.log(`${(totalSteps-target)} steps over the goal!`)
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "Going home"){
        let steps = Number(input[index])

        totalSteps += steps;

        if (totalSteps >= target) {
            console.log("Goal reached! Good job!");
            console.log(`${(totalSteps-target)} steps over the goal!`)
        } else {
            console.log(`${target-totalSteps} more steps to reach goal.`);
        }
    }
}


