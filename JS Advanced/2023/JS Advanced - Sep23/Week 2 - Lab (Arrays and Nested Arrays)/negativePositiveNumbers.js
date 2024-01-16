function negativePositiveNumbers(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        array[i] < 0 ? result.unshift(array[i]) : result.push(array[i]);
    }
    console.log(result.join('\n'));
}

negativePositiveNumbers([4, -2, 8, 9])