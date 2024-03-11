function outer() {
    let count = 5;
    let name = "Peter";

    function func(a, b) {
        console.log(name);

        return count + a + b;
    }

    const result = func(3, 5);
    console.log(result);
}

outer();
