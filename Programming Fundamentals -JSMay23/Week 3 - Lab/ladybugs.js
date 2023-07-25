function ladybugs(arr){
    let fieldSize = arr[0];
    let ladybugPositions = arr[1].split(" ");
    let fieldArr = [];
    let isFree = false;

    for (let i = 0; i < fieldSize; i++) {
        fieldArr.push(0);
        
    }
    for (let i = 0; i < fieldSize; i++) {
        let ladybugInd = ladybugPositions[i];
        if (ladybugInd >= 0 && ladybugInd < fieldSize){
            fieldArr[ladybugInd] = 1;
        }
    }
    

    for (let steps = 2; steps < arr.length; steps++) {
        let eachMove = arr[steps].split(' ');
        let ladybugIndex = Number(eachMove[0]);
        let direction = eachMove[1];
        let cells = Number(eachMove[2]);

        if (cells < 0){
            cells = Math.abs(cells);
            if (direction === "left"){direction = 'right'}
            else if (direction === "right"){direction = 'left'}
        }
        fieldArr[ladybugIndex] = 0;
        if (direction === "right"){
            let newPosition = ladybugIndex + cells;
            if (fieldArr[newPosition] === 1){
                newPosition += cells;
            }
            if (newPosition < fieldArr.length){
                fieldArr[newPosition] = 1;
            }
        }else {
            let newPosition = ladybugIndex - cells;
            if (fieldArr[newPosition] === 1){
                newPosition -= cells;
            }
            if (newPosition >= 0){
                fieldArr[newPosition] = 1;
            }
        }
    }
    console.log(fieldArr.join(' '));
}

ladybugs([ 3, '0 1','0 right 1','2 right 1' ])

ladybugs([ 3, '0 1 2','0 right 1','1 right 1','2 right 1'])

ladybugs([ 5, '3','3 left 2','1 left -2'])