function solve(input) {
    let arr = input[0].split(' ');
    let counter = 1;
    while (input[counter] !== 'END'){
        let nextLine = input[counter].split(' ');
        let command = nextLine[0];
        switch(command){
            case 'Change': 
                if (arr.includes(nextLine[1])){
                    arr.splice(arr.indexOf(nextLine[1]),1,nextLine[2]);                    
                }
                break;
            case 'Hide': 
                if (arr.includes(nextLine[1])){
                    arr.splice(arr.indexOf(nextLine[1]),1);
                }
                break;
            case 'Switch': 
                if (arr.includes(nextLine[1]) && (arr.includes(nextLine[2]))){
                    let index1 = arr.indexOf(nextLine[1]);
                    let index2 = arr.indexOf(nextLine[2]);
                    arr.splice(index1,1,nextLine[2]);
                    arr.splice(index2,1,nextLine[1]);
                }
                break;
            case 'Insert': 
                if (nextLine[1] < arr.length) {
                    arr.splice((Number(nextLine[1]) + 1),0,nextLine[2]);
                }
                break;
            case 'Reverse': 
                let reversedArr = arr.reverse();
                arr = reversedArr;
                break;
            default: break; 
        }
        counter++;
    }
    console.log(arr.join(' '));
}

// console.log("115 101 114 73 111 116 75");
// solve(["115 101 114 73 111 116 75",
// "Switch 101 73",
// "END"])	
solve(["115 101 114 73 111 116 75",
"Insert 5 114",
"Switch 116 73",
"Hide 76",
"END"])	
 console.log('NEW:');
 console.log("115 101 114 116 111 73 114 75");
 console.log('-------------------------');
 solve(["77 120 115 101 97 78 88 112 111 108 110",
 "Switch 97 98",
 "Hide 88",
 "Change 120 117",
 "END"])	
 console.log('NEW:');
 console.log("77 117 115 101 97 78 112 111 108 110");
 console.log('-------------------------');
 solve(["65 304 97 79 12 659",
 "Reverse",
 "Change 73 70",
 "Insert 10 85",
 "END"])	
 console.log('NEW:');
 console.log("659 12 79 97 304 65");
