function histogram(input){
    let countNumbers = Number(input[0]);
    let bracket1 = 0;
    let bracket2 = 0;
    let bracket3 = 0;
    let bracket4 = 0;
    let bracket5 = 0;

    for (let i = 1; i <= countNumbers; i++){
        let tempNr = Number(input[i]);

        if (tempNr < 200){bracket1++;}
        else if (tempNr < 400){bracket2++;}
        else if (tempNr < 600){bracket3++;}
        else if (tempNr < 800){bracket4++;}
        else if (tempNr >= 800){bracket5++;}
    }

    let percB1 = (bracket1 / countNumbers) * 100;
    let percB2 = (bracket2 / countNumbers) * 100;
    let percB3 = (bracket3 / countNumbers) * 100;
    let percB4 = (bracket4 / countNumbers) * 100;
    let percB5 = (bracket5 / countNumbers) * 100;

    console.log(`${percB1.toFixed(2)}%`);
    console.log(`${percB2.toFixed(2)}%`);
    console.log(`${percB3.toFixed(2)}%`);
    console.log(`${percB4.toFixed(2)}%`);
    console.log(`${percB5.toFixed(2)}%`);
}