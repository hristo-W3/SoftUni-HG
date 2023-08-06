function schoolGrades(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let eachStudent = arr[i].split(',');
        let [name, ...grades] = eachStudent[0].split(' ');
        if (!map.has(name)){
            map.set(name, grades)
        } else {
            for (let index = 0; index < grades.length; index++) {
                map.get(name).push(grades[index]);
            }
        }
    }
    let sorted = new Map([...map.entries()].sort()); 

    for (let [el,value] of sorted) {
        let sum = 0;
        for (let i = 0; i < value.length; i++) {
            sum += Number(value[i]);            
        }
        console.log(`${el}: ${(sum/value.length).toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])

console.log('---------');
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
)