function examOnTime(input){
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let examTimeInMinutes = (examHour * 60) + examMin;
    let arrivalTimeInMinutes = (arrivalHour * 60) + arrivalMin;

    let difference = examTimeInMinutes - arrivalTimeInMinutes;

    if (difference < 0) {
        console.log("Late");
    } else if ((0 <= difference) && (difference <= 30)){
        console.log("On time");
    } else {
        console.log("Early");
    }

    let absDifference = Math.abs(difference);
    let finalHours = Math.floor(absDifference / 60);
    let finalMinutes = absDifference - (finalHours * 60);
    
    if (absDifference >= 1){
        if (difference > 0) {
            if (absDifference < 60){
                console.log(`${finalMinutes} minutes before the start`);
            } else if (absDifference >= 60){
                if (finalMinutes < 10){console.log(`${finalHours}:0${finalMinutes} hours before the start`);} 
                else {console.log(`${finalHours}:${finalMinutes} hours before the start`);}                
            }
        } else {
            if (absDifference < 60){
                console.log(`${finalMinutes} minutes after the start`);
            } else if (absDifference >= 60){
                if (finalMinutes < 10){console.log(`${finalHours}:0${finalMinutes} hours after the start`);} 
                else {console.log(`${finalHours}:${finalMinutes} hours after the start`);}  
            }
        }  
    }
}

examOnTime(['9','00','8','30']);