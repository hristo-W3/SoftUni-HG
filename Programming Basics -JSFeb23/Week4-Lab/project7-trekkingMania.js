function trekkingMania(input){
    let nrOfGroups = Number(input[0]);

    let totalPeople = 0;
    let peak1count = 0;
    let peak2count = 0;
    let peak3count = 0;
    let peak4count = 0;
    let peak5count = 0;

    for (let i = 1; i < nrOfGroups+1; i++){
        let groupSize = Number(input[i]);
        totalPeople += groupSize;

        if (groupSize <= 5){peak1count += groupSize;}
        else if ((5<groupSize)&&(groupSize<=12)){peak2count += groupSize;}
        else if ((12<groupSize)&&(groupSize<=25)){peak3count += groupSize;}
        else if ((25<groupSize)&&(groupSize<=40)){peak4count += groupSize;}
        else if (groupSize>=41){peak5count += groupSize;}
    }

    let percentPeak1 = (peak1count / totalPeople) * 100;
    let percentPeak2 = (peak2count / totalPeople) * 100;
    let percentPeak3 = (peak3count / totalPeople) * 100;
    let percentPeak4 = (peak4count / totalPeople) * 100;
    let percentPeak5 = (peak5count / totalPeople) * 100;

    console.log(`${percentPeak1.toFixed(2)}%`);
    console.log(`${percentPeak2.toFixed(2)}%`);
    console.log(`${percentPeak3.toFixed(2)}%`);
    console.log(`${percentPeak4.toFixed(2)}%`);
    console.log(`${percentPeak5.toFixed(2)}%`);
}
