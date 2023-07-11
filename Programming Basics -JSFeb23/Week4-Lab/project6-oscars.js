function oscars(input){
    let actor = input[0];
    let startingPoints = Number(input[1]);
    let nrOfJuries = Number(input[2]);

    for (let i = 3; i < ((nrOfJuries*2)+3); i+=2){
        let jury = input[i];
        let mark = input[i+1];
        let score = (jury.length * mark) / 2;

        startingPoints += score;
        if (startingPoints > 1250.5){
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
            break;
        }
    }

    if (startingPoints <= 1250.5){
        console.log(`Sorry, ${actor} you need ${(1250.5-startingPoints).toFixed(1)} more!`);
    }
}