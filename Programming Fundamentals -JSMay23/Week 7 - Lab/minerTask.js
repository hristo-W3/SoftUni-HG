function minerTask(input) {

    let resourses = {};

    for (let i = 0; i < input.length; i += 2) {
        let element = input[i];
        let qty = Number(input[i + 1]);

        if (resourses.hasOwnProperty(element)) {
            resourses[element] += qty;
        } else {
            resourses[element] = qty;
        }
    }
    for (let resource in resourses) {
        console.log(`${resource} -> ${resourses[resource]}`);
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
)