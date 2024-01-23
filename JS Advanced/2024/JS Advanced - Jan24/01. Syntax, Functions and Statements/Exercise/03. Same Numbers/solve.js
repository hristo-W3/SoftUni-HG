function solve(params) {
    let asChars = String(params);
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < asChars.length; i++) {
        if (asChars[i] !== asChars[0]) {
            isSame = false;
        }
        sum += Number(asChars[i]);
    }

    console.log(isSame ? "true" : "false");
    console.log(sum);
}

solve(222222222)
solve(1234)