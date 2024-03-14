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