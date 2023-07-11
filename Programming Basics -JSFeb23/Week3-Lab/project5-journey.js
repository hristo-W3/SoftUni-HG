function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    let destination = '';
    let place = '';
    let totalPrice = 0.0;

    if (budget <= 100){
        console.log("Somewhere in Bulgaria");
        destination = "Bulgaria";
    } else if ((100 < budget) && (budget <= 1000)){
        console.log("Somewhere in Balkans");
        destination = "Balkans";
    } else if (budget > 1000){
        console.log("Somewhere in Europe");
        destination = "Europe";
    }

    switch(destination){
        case "Bulgaria":
            switch(season){
                case "summer": totalPrice = budget * 0.30; place = "Camp"; break;
                case "winter": totalPrice = budget * 0.70; place = "Hotel"; break;
                default: console.log("error");break;
            } break;
        case "Balkans":
            switch(season){
                case "summer": totalPrice = budget * 0.40; place = "Camp"; break;
                case "winter": totalPrice = budget * 0.80; place = "Hotel"; break;
                default: console.log("error");break;
            } break;
        case "Europe":
            totalPrice = budget * 0.90; place = "Hotel"; break;
        default: console.log("error");break;
    }

    console.log(`${place} - ${totalPrice.toFixed(2)}`);
}