function solve(input){

    let sortedArray = input.sort((a,b) => b - a);
    let result = [];
    let sortedLength = sortedArray.length;

    for (let index = 0; index < sortedLength / 2; index++) {
        let currentNumber = sortedArray.shift();
        let nextNumber = sortedArray.pop();
        result.push(currentNumber);
        result.push(nextNumber);
    }
    console.log(result.join(' '));
}