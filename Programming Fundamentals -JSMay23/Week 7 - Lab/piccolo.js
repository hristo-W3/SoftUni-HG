function piccolo(arr) {
    let result = new Set();

    for (let i = 0; i < arr.length; i++) {
        let [command,number] = arr[i].split(', ');
        if (command === 'IN'){
            result.add(number);
        }
        if (command === 'OUT') {
            result.delete(number);
        }
    }
    let sorted = Array.from(result).sort();
    if (sorted.length === 0){
        console.log('Parking Lot is Empty');
    } else {
        console.log(sorted.join('\n'));
    }    
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])
console.log('-------------');
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)