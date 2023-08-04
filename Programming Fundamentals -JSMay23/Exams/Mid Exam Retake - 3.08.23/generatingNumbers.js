function solve(input) {
    if (input[0] === 'END') {
        return '';
    } else {
        let arr = input[0].split(' ');
        let counter = 1;
        while (input[counter] !== 'END'){
            let nextLine = input[counter].split(' ');
            let command = nextLine[0];
            switch(command){
                case 'add': 
                    let addArr = nextLine.splice(3);
                    for (let i = addArr.length - 1; i >= 0; i--) {
                        arr.unshift(addArr[i]);
                    }
                    break;
                case 'remove':
                    if (nextLine[1] === 'greater'){
                        let removeArr = arr.filter(x => x <= Number(nextLine[nextLine.length - 1]));
                        arr = removeArr;
                    } 
                    if (nextLine[1] === 'at'){
                        let removeIndex = nextLine.pop();
                        if (arr.length > removeIndex){
                            arr.splice(removeIndex,1);
                        }
                    }
                    break;
                case 'replace':
                    if (arr.includes(nextLine[1])){
                        arr.splice(arr.indexOf(nextLine[1]),1,nextLine[2]);                    
                    }
                    break;
                case 'find':
                    if (nextLine[1] === 'even'){
                        console.log(arr.filter(a => a % 2 === 0).join(' '));
                    } 
                    if (nextLine[1] === 'odd'){
                        console.log(arr.filter(a => a % 2 !== 0).join(' '));
                    }
                    break;
                default:
                    break;
                
            }        
            counter++;
        }
        console.log(arr.join(', '));
    }
}

solve(['1 2 3 4 5 6 7 8 9 10',
'remove at 8',
'END'])
console.log('--------------');
solve(["1 2 3 10 10 6 4 10",
"add to start 1 2 3",
"remove greater than 5",
"find even",
"END"])
console.log('--------------');
solve(["1 2 3 10 10 6 4 10",
"replace 10 1",
"remove at index 0",
"add to start 4 2",
"END"])
console.log(('------------'));
solve(["1 2 3 10 10 6 4 10",
"find odd",
"replace 4 1",
"remove greater than 5",
"END"])

