function solve(input){
    let result = [];
    let counter = 1;
    while (input.length > 0){
        let current = input.shift();
        if (current === "add"){
            result.push(counter);
        }
        if (current === "remove"){
            result.pop();
        }
        counter++;
    }
    if (result.length > 0){
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}

solve(['add', 'add', 'add', 'add'])
solve(['add', 'add', 'remove', 'add', 'add'])