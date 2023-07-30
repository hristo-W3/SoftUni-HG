function solve(arr){

    return arr.filter((el, index) => index % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');
}

console.log(solve(['12','13','14','15']));