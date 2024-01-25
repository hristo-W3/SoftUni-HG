function solve(params) {
    let result = [];
    let counter = 1;
    
    while (params.length > 0) {
        let current = params.shift();
        if (current === "add") {
            result.push(counter);
        }
        if (current === "remove") {
            result.pop();
        }
        counter++;
    }

    if (result.length > 0) {
        console.log(result.join("\n"));
    } else {
        console.log("Empty");
    }
}

solve(['add', 'add', 'add', 'add'])
console.log("-----------------");
solve(['add', 'add', 'remove', 'add', 'add'])
console.log("-----------------");
solve(['remove', 'remove', 'remove'])