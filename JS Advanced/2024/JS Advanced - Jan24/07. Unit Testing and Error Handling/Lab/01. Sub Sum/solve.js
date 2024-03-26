function sumRange(array, start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += array[i];
    }

    return sum;
}