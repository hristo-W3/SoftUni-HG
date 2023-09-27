function solve(arr){
    return arr.sort((a,b) => {
        return a.length !== b.length ?
            a.length - b.length :
            a.localeCompare(b)
    }).join('\n')
}

console.log(solve(['alpha', 'beta', 'gamma']));

console.log(solve(['test', 'Deny', 'omen', 'Default']));