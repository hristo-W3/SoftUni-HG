function solve1(input){
    let str = input[0];
    let regex = /[@|#](?<color>[a-z]{3,})[@|#]\W*[\/]+(?<amount>\d{1,})[\/]+/gm;
    let foundColorEggs = str.match(regex);
    let colors = [];

    if (foundColorEggs) {
        foundColorEggs.forEach((element,index) => {
            element = element.substring(1,element.length-1).replace(/[^a-z0-9]/gi, '');            
            colors.push(element);
        })
    }

    for (let i = 0; i < colors.length; i++) {
        let firstDigit = colors[i].search(/\d/);
        console.log(`You found ${colors[i].substr(firstDigit,colors[i].length)} ${colors[i].substr(0,firstDigit)} eggs!`);
        
    }
}

solve1(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5##@InvalidColor##/54/@notc0l0r@*23*@invalid_color@/notnumber/'])