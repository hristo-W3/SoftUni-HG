function workout(input){
    let daysWorkout = Number(input[0]);
    let startingDistance = Number(input[1]);
    let targetDistance = 1000;
    let totalDistance = startingDistance;
    let end = 0;
    end += startingDistance;

    for (let days = 2; days <= daysWorkout + 1; days++){
        let dailyIncrease = Number(input[days]);
        totalDistance += (totalDistance * (dailyIncrease/100));
        end += totalDistance;
    }

    let difference = 0;
    if (end < targetDistance ){
        difference = Math.ceil(targetDistance - end);
        console.log(`Sorry Mrs. Ivanova, you need to run ${difference} more kilometers`);
    } else {
        difference = Math.ceil(end - targetDistance)
        console.log(`You've done a great job running ${difference} more kilometers!`);
    }
}

workout(["5","30","10","15","20","5","12"])
// workout(["4","100","30","50","60","80"])