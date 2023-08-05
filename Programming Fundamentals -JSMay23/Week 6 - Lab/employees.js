function employees(array) {
    let employeesObj = {};

    for (let i = 0; i < array.length; i++) {
        let name = array[i];
        employeesObj[name] = name.length;
    }

    for (let [key, value] of Object.entries(employeesObj)) {
        console.log(`Name: ${key} -- Personal Number: ${value}`);
    }
}

employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
)