function trainTheTrainers(input){
    let index = 0;
    let gradesCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalGradesSum = 0;
    let presentationsCount = 0;
    while (command !== "Finish"){
        let currentPresentationTitle = command;
        let gradeSum = 0;

        for (let i = 0; i < gradesCount; i++){
            let grade = Number(input[index]);
            index++;

            gradeSum += grade;
        }
        let averageCount = gradeSum / gradesCount;
        console.log(`${currentPresentationTitle} - ${averageCount.toFixed(2)}.`);

        totalGradesSum += averageCount;
        presentationsCount++;

        command = input[index];
        index++;
    }

    let totalAvgGrades = totalGradesSum / presentationsCount;
    console.log(`Student's final assessment is ${totalAvgGrades.toFixed(2)}.`);
}

// trainTheTrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"])
trainTheTrainers(["3","Arrays","4.53","5.23","5.00","Lists","5.83","6.00","5.42","Finish"])
