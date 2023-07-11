function hotelRoom(input){
    let month = input[0];
    let duration = Number(input[1]);

    let priceStudio = 0.0;
    let priceApt = 0.0;
    
    switch(month){
        case "May":
        case "October":
            priceStudio = duration * 50; 
            priceApt = duration * 65;
            if ((7 < duration) && (duration <= 14)){
                priceStudio *= 0.95;
            } else if (duration > 14){
                priceStudio *= 0.70;
                priceApt *= 0.90;
            }
            break;
        case "June":
        case "September":
            priceStudio = duration * 75.20; 
            priceApt = duration * 68.70;
            if (duration > 14){
                priceStudio *= 0.80;
                priceApt *= 0.90;
            }
            break;
        case "July":
        case "August":
            priceStudio = duration * 76; 
            priceApt = duration * 77;
            if (duration > 14){
                priceApt *= 0.90;
            }
            break;
    }

    console.log(`Apartment: ${priceApt.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}