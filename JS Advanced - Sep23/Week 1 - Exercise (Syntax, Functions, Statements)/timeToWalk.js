function solve(steps, footprint, speed){
    let distance = steps * footprint;
    let speedInSeconds = speed / 3.6;
    let totalTime = Math.round(distance / speedInSeconds);
    let rest = Math.floor(distance / 500)
    totalTime += rest * 60;

    let hours = "0" + Math.floor(totalTime / 3600);
    let minutes = "0" + Math.floor(totalTime / 60);
    let seconds = "0" + totalTime % 60;

    console.log(`${hours.slice(-2)}:${minutes.slice(-2)}:${seconds.slice(-2)}`);
}

solve(4000, 0.6, 5)
solve(2564, 0.70, 5.5)