function swimmingRecord(input){
    let currentRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timePer1 = Number(input[2]);

    let ivanTime = distance * timePer1;
    let delay = Math.floor(distance / 15);
    let totalDelay = delay * 12.5;
    let totalTime = ivanTime + totalDelay;

    let difference = Math.abs(currentRecord - totalTime);

    if (totalTime < currentRecord){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);        
    } else {
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}