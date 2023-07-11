function depositCalculator(input){
    let deposit = Number(input[0]);
    let durationInMonths = Number(input[1]);
    let yearlyInterest = Number(input[2]);

    let finalSum = deposit + durationInMonths * ((deposit*(yearlyInterest/100))/12);
    console.log(finalSum);
}

depositCalculator(['200','3','5.7']);