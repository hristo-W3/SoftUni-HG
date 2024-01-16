function solve(arr){
    let result = arr.sort(sortAlpha)
        .forEach((x,i) => {
            console.log(`${i + 1}.${x}`);
    });

    function sortAlpha(textA,textB){
        return textA.localeCompare(textB)
    }
}

solve(["John", "Bob", "Christina", "Ema"])