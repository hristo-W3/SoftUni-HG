function solve(arr){
    let target = arr.shift();
    let leftSide = arr.slice(0,target);
    let rightSide = arr.slice(arr.length - target, arr.length)

    console.log(leftSide.join(' '));
    console.log(rightSide.join(' '));
}

solve([2,7,8,9])
solve([3,6,7,8,9])