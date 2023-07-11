function djoser(base,increment){
    let finalStone = 0;
    let finalMarble = 0;
    let finalLapis = 0;
    let finalGold = 0;
    let height = 0;

    let floor = 0;
    let currentSize = base;

    while (currentSize > 2) {
        let marble = currentSize * 4 - 4;
        let stone = currentSize * currentSize - marble;
        finalStone += stone;
        floor++;

        if (floor % 5 == 0){finalLapis += marble;}
        else {finalMarble += marble;}
        currentSize-=2;
    }

    floor++;
    finalGold = Math.pow(currentSize,2);

    finalStone = Math.ceil(finalStone * increment);
    finalMarble = Math.ceil(finalMarble * increment);
    finalLapis = Math.ceil(finalLapis * increment);
    finalGold = Math.ceil(finalGold * increment);

    height = Math.floor(floor * increment);

    console.log(`Stone required: ${finalStone}`);
    console.log(`Marble required: ${finalMarble}`);
    console.log(`Lapis Lazuli required: ${finalLapis}`);
    console.log(`Gold required: ${finalGold}`);
    console.log(`Final pyramid height: ${height}`);
}

//djoser(12,1)
djoser(23,0.5)
