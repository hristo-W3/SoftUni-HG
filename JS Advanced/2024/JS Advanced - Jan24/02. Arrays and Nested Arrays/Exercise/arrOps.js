function solve(arr) {
    //Filter the array to take only the odd positions using filter
    const filtered = arr.filter((c, i) => i % 2);
    console.log(filtered);

    //Double each of the numbers using map
    const doubled = filtered.map(e => e * 2);
    console.log(doubled);

    //Flip the array using reverse
    doubled.reverse();
    console.log(doubled);

    //Join the array elements, separated by space, using join
    const result = doubled.join(' ');
    console.log(result);

    //Same result, with the steps combined
    const result2 = arr.filter((c,i) => i % 2)
            .map(e => e * 2)
            .reverse()
            .join(' ');
    console.log(result2);
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3])