function tennisRanking(input){
    let nrOfTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let accPoints = 0;
    let countWins = 0;

    for (let i = 2; i < input.length; i++){
        let stage = input[i];

        switch(stage){
            case "W": accPoints += 2000; countWins++; break;
            case "F": accPoints += 1200; break;
            case "SF": accPoints += 720; break;
            default: break;
        }
    }

    let finalPoints = startingPoints + accPoints;
    let averagePoints = Math.floor(accPoints/nrOfTournaments);
    let percentWins = (countWins/nrOfTournaments) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${percentWins.toFixed(2)}%`);
}