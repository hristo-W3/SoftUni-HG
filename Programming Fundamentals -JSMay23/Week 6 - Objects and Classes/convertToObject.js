function solve(jsonStr){
    let person = JSON.parse(jsonStr);

    for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);
    }
}