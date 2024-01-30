function solve(input) {
    // create result collection
    const result = {};

    // for every line of input
    for (let line of input) {
        // - parse line
        const [name, pop] = line.split(' <-> ');

        // if city does not exist, add it to the object
        if (result.hasOwnProperty(name) == false) {
            result[name] = 0;
        }

        // add the population 'pop' for city 'name'
        result[name] += Number(pop);
    }

    // print result
    for (let [name, population] of Object.entries(result)) {
        console.log(name, ":", population);
    }
}

solve([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
]);
console.log("----------------");
solve([
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
]);
