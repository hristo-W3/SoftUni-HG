function pointsValidation(arr){
    let [x1,y1,x2,y2] = arr;

    let firstCheck = checkPoint(x1,y1);
    let secondCheck = checkPoint(x2,y2);
    let thirdCheck = checkPointThree(x1,y1,x2,y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${printValid(firstCheck)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${printValid(secondCheck)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${printValid(thirdCheck)}`);

    function checkPoint(num1,num2) {
        let check = Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2));
        return check;
    }

    function checkPointThree(x1,y1,x2, y2){
        let check = Math.sqrt(Math.pow(Math.abs(x2 - x1),2) + Math.pow(Math.abs(y2 - y1),2));        
        return check;
    }

    function isValid(point){
        return point === Math.trunc(point);
    }
    
    function printValid(point){
        return isValid(point) ? 'valid' : 'invalid';
    }
}
pointsValidation([3,0,0,4])
pointsValidation([2,1,1,1])
pointsValidation([0,0,0,0])