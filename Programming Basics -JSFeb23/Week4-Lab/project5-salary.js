function salary(input){
    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    let page1 = 150;
    let page2 = 100;
    let page3 = 50;

    for (let i = 2; i <= tabs+2; i++){
        let currentSite = input[i];

        switch(currentSite){
            case "Facebook": salary -= page1; break;
            case "Instagram": salary -= page2; break;
            case "Reddit": salary -= page3; break;
            default: break;
        }
        if (salary <= 0){break;}
    }

    if (salary <= 0){
        console.log("You have lost your salary.");
    } else {
        console.log(Math.floor(salary));
    }
}