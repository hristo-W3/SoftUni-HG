function solve(arr, order) {
    let result = arr.sort((a, b) => order === 'asc' ? a - b : b - a)
    return result;
}