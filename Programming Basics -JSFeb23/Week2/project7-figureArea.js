function figureArea(input){
    let figureType = input[0];

    let dimention1 = Number(input[1]);
    let area = 0;

    if (figureType === "square"){
        area = dimention1 * dimention1;
    } else if (figureType === "rectangle"){
        let dimention2 = Number(input[2]);
        area = dimention1 * dimention2;
    } else if (figureType === "circle"){
        area =  Math.PI * dimention1 * dimention1;
    } else if (figureType === "triangle"){
        let dimention2 = Number(input[2]);
        area = dimention1 * dimention2 / 2;
    }

    area = area.toFixed(3)
    console.log(area);
}