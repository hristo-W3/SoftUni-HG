function chessBoard(x){
    console.log(`<div class="chessboard">`);
    for (let i = 1; i <= x; i++) {
        console.log(`  <div>`);
        for (let j = 1; j <= x; j++) {
            if ((i%2 === 1 && j%2 === 1) || (i%2 === 0 && j%2 ===0)){
                console.log(`    <span class="black"></span>`);
            } else {
                console.log(`    <span class="white"></span>`);
            }
        }        
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}

chessBoard(3)