function lunchBreak(input){
    let seriesName = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchTime = 0.125 * breakLength;
    let relaxTime = 0.25 * breakLength;
    
    let remainingTime = breakLength - (lunchTime + relaxTime);

    let timeDiff = Math.abs(episodeLength - remainingTime);
    timeDiff = Math.ceil(timeDiff);

    if (episodeLength > remainingTime){
        console.log(`You don't have enough time to watch ${seriesName}, you need ${timeDiff} more minutes.`);
    } else {
        console.log(`You have enough time to watch ${seriesName} and left with ${timeDiff} minutes free time.`);
    }
}