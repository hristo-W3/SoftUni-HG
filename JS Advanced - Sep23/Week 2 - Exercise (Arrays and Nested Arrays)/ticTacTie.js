function solve(inputs){
    let board = Array(3).fill(Array(3)).map(() => Array(3).fill('false'));
    let isPlayerOne = true;
    let hasWinner = false;
    let counter = 0;
    let playerSymbols = {
        true: 'X',
        false: 'O'
    }

    // Body of the execution, iterates for as many commands there were supplied by pulling each command out of the list
    while(inputs.length > 0){
        if (hasWinner || counter > 8){break;}
        let [x,y] = inputs.shift().split(' ');
        
        checkPosition(x,y,board);
        checkWin(board, playerSymbols[true]);
        checkWin(board, playerSymbols[false]);
        
    }
    if (counter > 8) {
        console.log('The game ended! Nobody wins :(');
        printBoard(board);
    }

    // Check if the given position is occupied
    // If it is taken, show error message and process the same player again
    // If it's free, record the player marker in the corresponding cell
    function checkPosition(x,y,board){
        if (board[x][y] !== 'false'){
            console.log('This place is already taken. Please choose another!');
        } else {
            board[x][y] = playerSymbols[isPlayerOne];
            isPlayerOne = !isPlayerOne;
            counter++;
        }
    }

    //Check if the player has won the game
    function checkWin(board, playerMarker){
        if (((board[0][0] == board[0][1]) && (board[0][1] == board[0][2]) && (board[0][2] == playerMarker)) ||
            ((board[1][0] == board[1][1]) && (board[1][1] == board[1][2]) && (board[1][2] == playerMarker)) ||
            ((board[2][0] == board[2][1]) && (board[2][1] == board[2][2]) && (board[2][2] == playerMarker)) ||
            ((board[0][0] == board[1][0]) && (board[1][0] == board[2][0]) && (board[2][0] == playerMarker)) ||
            ((board[0][1] == board[1][1]) && (board[1][1] == board[2][1]) && (board[2][1] == playerMarker)) ||
            ((board[0][2] == board[1][2]) && (board[1][2] == board[2][2]) && (board[2][2] == playerMarker)) ||
            ((board[0][0] == board[1][1]) && (board[1][1] == board[2][2]) && (board[2][2] == playerMarker)) ||
            ((board[0][2] == board[1][1]) && (board[1][1] == board[2][0]) && (board[2][0] == playerMarker))){
                console.log(`Player ${playerSymbols[!isPlayerOne]} wins!`);
                printBoard(board);
                hasWinner = true;
            }
    }

    //Prints the current state of the board
    function printBoard(board){
        for (let row = 0; row < 3; row++) {
            console.log(board[row].join('\t'));
        }        
    }
}

solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
)

solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
)

solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)