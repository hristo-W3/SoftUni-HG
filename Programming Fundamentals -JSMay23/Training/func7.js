function matrix(num){
    for (let i = 1; i <= num; i++) {
        let row = '';
        for (let j = 1; j <= num; j++) {
            row += `${num} `;
        }
        console.log(row);
    }
}

matrix(3)