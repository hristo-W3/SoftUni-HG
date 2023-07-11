function examPrep(input){
    let index = 0;
    let failsAllowed = Number(input[index]);
    let poorGradesCount = 0;
    index++;
    let command = input[index];
    index++;
    let currentMark = Number(input[index]);
    index++;

    let problemsSolved = 0;
    let avgScore = 0;
    let lastProblemSolved = "";

    while (command !== "Enough"){
        lastProblemSolved = command;
        if (currentMark <= 4) {poorGradesCount++;}

        if (failsAllowed <= poorGradesCount) {console.log(`You need a break, ${poorGradesCount} poor grades.`);break;}

        command = input[index];
        index++;

        problemsSolved++;
        avgScore += currentMark;
        currentMark = Number(input[index]);
        index++;
    }

    if (command === "Enough"){
        console.log(`Average score: ${(avgScore / problemsSolved).toFixed(2)}`);
        console.log(`Number of problems: ${problemsSolved}`);
        console.log(`Last problem: ${lastProblemSolved}`);
    }

}