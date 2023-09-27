function solve(arr){
    return arr.sort((a,b) => {
        if (a.length !== b.length){
            return a.length - b.length
        }
        return a.localeCompare(b)
    }).join('\n')
}

console.log(solve(['alpha', 'beta', 'gamma']));

console.log(solve(['test', 'Deny', 'omen', 'Default']));