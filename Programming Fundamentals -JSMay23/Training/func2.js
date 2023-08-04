function solve(num1, num2, num3){
    function sum(num1,num2){
        return num1 + num2;
    }
    
    let sumRestult = sum(num1,num2)
    function subtract(sumNum1Num2,num3){
        return sumNum1Num2 - num3;
    }

    return subtract(sumRestult, num3)
}

console.log(subtract(1,2,1));