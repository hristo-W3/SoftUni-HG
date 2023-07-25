
function nonDecreasingSubset(arr) {
    if (arr.length === 0) {
        console.log('');;
    }
    let result = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= Math.max.apply(null, arr.slice(0, i))) {
            result.push(arr[i]);
        }
    }
    console.log(result.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4] )
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1] )