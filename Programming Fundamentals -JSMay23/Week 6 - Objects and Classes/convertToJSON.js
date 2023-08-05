function convertToJSON(firstName, lastName, hairColor) {
    let myObj = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    console.log(JSON.stringify(myObj));    
}