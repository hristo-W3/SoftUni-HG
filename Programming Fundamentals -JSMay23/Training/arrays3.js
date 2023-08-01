function solve(num, arr){
    let result = '';
    for (let i = num - 1; i >= 0; i--) {
        result += `${arr[i]} `;
    }
    console.log(result);
}

solve(3, [10, 20, 30, 40, 50] );