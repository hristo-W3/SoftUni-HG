function solve(num) {
    function sum(a) {
        num += a;
        return sum;
    }

    sum.toString = function () {
        return num.toString();
    }

    return sum;
}

console.log(solve(1)(6)(-3).toString());