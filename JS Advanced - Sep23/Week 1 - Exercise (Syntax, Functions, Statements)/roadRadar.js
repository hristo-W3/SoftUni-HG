function roadRadar(speed, road){
    let speedLimitsObj = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let difference = 0;
    let currentLimit = speedLimitsObj[road];
    let status = '';

    if (speed > currentLimit) { 
        difference = speed - currentLimit;
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${currentLimit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${currentLimit} zone`);
    }


}

roadRadar(40, 'city')
roadRadar(21, 'residential')