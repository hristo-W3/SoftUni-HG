function solve(arr) {
    let health = 100;
    let coins = 0;
    let rooms = arr[0].split('|');
    let alive = true;

    for (let room = 0; room < rooms.length; room++) {
        let currentRoom = rooms[room].split(' ');
        let type = currentRoom[0];
        let amount = Number(currentRoom[1]);
        switch(type){
            case 'potion':
                if (health + amount > 100) {amount = 100 - health;}
                health += amount;
                console.log(`You healed for ${amount} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += amount;
                console.log(`You found ${amount} coins.`);
                break;
            default:
                health -= amount;
                if (health > 0){
                    console.log(`You slayed ${type}.`);
                } else {
                    console.log(`You died! Killed by ${type}.`);
                    console.log(`Best room: ${room + 1}`);
                    alive = false;
                }
                break;
        }
        if (!alive) {
            break;            
        }
    }
    if (alive){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
console.log('--------------------');
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])