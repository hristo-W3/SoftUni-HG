function employees(input) {
    let count = input.shift();

    let pattern = /(?<name>[A-Z][a-z]{2,} [A-Z][a-z]{2,})[#]+(?<job>[A-Z][A-Za-z]+(&[A-Z][A-Za-z]+)?(&[A-Z][A-Za-z]*)?)\d{2}(?<company>[A-Z][A-Za-z0-9]* (JSC|Ltd.))/;

    for (let person of input) {
        let result = person.match(pattern);

        if(result){
            let name = result.groups.name;
            let job = result.groups.job.split('&').join(' ');
            let company = result.groups.company;

            console.log(`${name} is ${job} at ${company}`);
        }  
    }
}

employees(["4",
"Tanya Petrova##Dental&Assistants25Health Ltd.",
"Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.",
"George Fill####Orderlies99Health JSC",
"Lily petrova#Speech&Pathology&Assistants60Health Ltd."]
);