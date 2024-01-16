function solve(input){
    let array = input
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }

    function sum(arr){
        let result = 0;

        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;
    }

    function reverseSum(arr1){
        let result = 0;

        for (let i = 0; i < arr1.length; i++) {
            result += 1 / arr1[i];
        }
        return result;
    }

    function concat(arr2){
        let result = '';

        for (let i = 0; i < arr2.length; i++) {
            result += arr2[i];
        }
        return result;
    }

    console.log(sum(array));
    console.log(reverseSum(array));
    console.log(concat(array));
}

solve([1,2,3])
