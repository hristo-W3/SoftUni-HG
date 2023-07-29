function numberModification(number){

    function getSum(num){
        let numToString = number.toString();
        let total = 0;
        for (let i = 0; i < numToString.length; i++) {
            total += Number(numToString[i])            
        }
        return total;
    }

    function getAverage(num){
        return getSum(num) / num.toString().length;
    }

    while (getAverage(number) < 5.00){
        number += '9';
    }    
    console.log(number);
}

numberModification(5835)