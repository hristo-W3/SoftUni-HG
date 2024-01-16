// Optimized version, starts from the smaller of the two numbers and when it finds the greatest GCD, breaks the loop

function solve(n1, n2){
    let biggestGCD = 1;
    let target = Math.min(n1,n2);
    for (let i = target; i >= 1; i--) {
        if ((n1 % i == 0) && (n2 % i == 0)){
            biggestGCD = i;
            break;
        }
    }
    console.log(biggestGCD);
}

solve(2154, 458)
solve(15, 5)