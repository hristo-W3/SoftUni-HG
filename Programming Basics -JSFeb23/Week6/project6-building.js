function building(input){
    let floors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);

    for (let x = floors; x > 0; x--){
        let buff = '';
        for (let y = 0; y < roomsPerFloor; y++){
            if (x == floors){
                buff += `L${x}${y} `;
            } else if (x % 2 == 0) {
                buff += `O${x}${y} `
            } else {
                buff += `A${x}${y} `
            }
        }
        console.log(buff);
    }
}

// building(["6", "4"])
// building(["9", "5"])
building(["4", "4"])
