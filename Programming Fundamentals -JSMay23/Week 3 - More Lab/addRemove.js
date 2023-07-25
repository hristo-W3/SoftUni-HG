function addRemove(input){
    let arr = [];
    let currentNum = 1;

    for(let each of input){
        each.toLowerCase() === 'add' ? arr.push(currentNum++) : arr.pop(currentNum++);
    }

    console.log(arr.length == 0 ? 'Empty' : arr.join(' '));
}

addRemove(['add', 'add', 'add', 'add'] )
addRemove(['add', 'add', 'remove', 'add', 'add'] )
addRemove(['remove', 'remove', 'remove'] )