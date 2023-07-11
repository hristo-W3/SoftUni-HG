function skiTrip(input){
    let stay = Number(input[0]);
    let room = input[1];
    let review = input[2];

    let nights = stay - 1;
    let singleRoomPPN = 18;
    let apartmentPPN = 25;
    let presidentApartmentPPN = 35;

    let finalPrice = 0.0;
    switch(room){
        case "room for one person":
            finalPrice = nights * singleRoomPPN;
            break;
        case "apartment":
            if (nights < 10){finalPrice = (nights * apartmentPPN) * 0.70;}
            else if ((10 <= nights) && (nights <= 15)){finalPrice = (nights * apartmentPPN) * 0.65;}
            else {finalPrice = (nights * apartmentPPN) * 0.50;}
            break;
        case "president apartment":
            if (nights < 10){finalPrice = (nights * presidentApartmentPPN) * 0.90;}
            else if ((10 <= nights) && (nights <= 15)){finalPrice = (nights * presidentApartmentPPN) * 0.85;}
            else {finalPrice = (nights * presidentApartmentPPN) * 0.80;}
            break;
        default: console.log("error");break;
    }

    switch(review){
        case "positive": finalPrice *= 1.25; break;
        case "negative": finalPrice *= 0.90; break;
    }

    console.log(finalPrice.toFixed(2));
}