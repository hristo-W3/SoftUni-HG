function solve(numbers){
    let uniqueArr = [];

    for (const number of numbers) {
        if (!uniqueArr.includes(number)) {
            uniqueArr.push(number);
        }
    }

    console.log(uniqueArr.join(' '));
}