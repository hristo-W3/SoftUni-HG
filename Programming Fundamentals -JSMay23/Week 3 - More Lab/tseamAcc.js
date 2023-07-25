function tseamAccount(input){
    let games = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let currEl = input[i].split(' ');
        let cmd = currEl[0].toLowerCase();
        let newGame = currEl[1];

        if (cmd === "play!"){
            break;
        } else if (cmd === "install" && games.includes(newGame) === false){
            games.push(newGame);
        } else if (cmd === 'uninstall' && games.includes(newGame)){
            let index = games.indexOf(newGame);
            games.splice(index,1);
        } else if (cmd === 'update' && games.includes(newGame)){
            let index = games.indexOf(newGame);
            games.splice(index,1);
            games.push(newGame);
        } else if (cmd === 'expansion'){
            let expansion = newGame.split('-');
            let game = expansion[0];

            if(games.includes(game)){
                let gameAndExpansion = expansion.join(":");
                let index = games.indexOf(game);
                games.splice(index + 1, 0, gameAndExpansion);
            }
        }
    }
    console.log(games.join(' '));
}

tseamAccount(['CS WoW Diablo','Install LoL','Uninstall WoW','Update Diablo','Expansion CS-Go','Play!'])
tseamAccount(['CS WoW Diablo','Uninstall XCOM','Update PeshoGame','Update WoW','Expansion Civ-V','Play!'])