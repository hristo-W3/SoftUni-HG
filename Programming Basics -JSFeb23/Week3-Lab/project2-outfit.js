function summerOutfit(input){
    let temp = Number(input[0]);
    let partOfDay = input[1];

    let outfit = "Shirt";
    let shoes = "Moccasins";

    switch(partOfDay){
        case "Morning":
            if ((10 <= temp) && (temp <= 18)){
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } 
            if (temp >= 25){
                outfit = "T-Shirt";
                shoes = "Sandals";
            } break;
        case "Afternoon":
            if ((18 < temp) && (temp <= 24)){
                outfit = "T-Shirt";
                shoes = "Sandals";
            } 
            if (temp >= 25){
                outfit = "Swim Suit";
                shoes = "Barefoot";
            } break;
        default: break;
    }
    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
}