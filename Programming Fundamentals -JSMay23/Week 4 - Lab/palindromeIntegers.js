function solve(array){

    function numToString(num){
        return num.toString();
    }

    function reversedString(num){
        return num.split('').reverse().join('');
    }

    function checkEqual(num1,num2){
        return num1 === num2;
    }


    for (let index = 0; index < array.length; index++) {
        let numAsString = numToString(array[index]);
        let reversedNumber = reversedString(numAsString);

        console.log(checkEqual(numAsString,reversedNumber));
    }
}

solve([1221,123,404,321512]);