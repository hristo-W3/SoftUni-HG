function dungeon(roomsArr){
    let rooms = roomsArr[0];
    let health = 100;
    let coins = 0;
    let isDead = false;
    let roomsCount = 0;
    let arrRooms = rooms.split('|');

    for (let roomIndex in arrRooms) {
        let eachRoom = arrRooms[roomIndex].split(' ');
        let object = eachRoom[0];
        let amount = Number(eachRoom[1]);
        roomsCount++;
        switch (object) {
            case "potion":
                if (health + amount > 100){
                    amount = 100 - health;                    
                }
                console.log(`You healed for ${amount} hp.`);
                health += amount;
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                console.log( `You found ${amount} coins.`);
                coins += amount;
                break;                
            default:
                if (health - amount > 0){
                    health -= amount;
                    console.log(`You slayed ${object}.`);
                    
                } else {
                    console.log(`You died! Killed by ${object}.`);
                    console.log(`Best room: ${roomsCount}`);
                    isDead = true;
                }
                break;
        }
        if (isDead){break;}
        
    }
    if (!isDead){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
//dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])