function solve(input){
    let entries = input.shift().split(' | ');
    //console.log(entries);
    //counter = 1;
    let dictionary = {};

    for (let i = 0; i < entries.length; i++) {
        //let currentEl = words[i];
        //if(currentEl.includes(": ")){
        let fullEntry = entries[i].split(": ");

        let [word,description] = fullEntry;
        
        if (Object.keys(dictionary).includes(word)) {
            let prevDescription = dictionary[word].toString();
            dictionary[word] = [prevDescription];
            dictionary[word].push(description);
        } else {
            dictionary[word] = [description];
        }
        //} else { }  
    }

    let output = input.shift();
    let outputArr = output.split(" | ")
    counter = 0;

    //if(input[0] === 'Test' || input === 'Hand Over')
    for (let i = 0; i < outputArr.length; i++) {
        if(Object.keys(dictionary).includes(outputArr[i])){
            console.log(`${outputArr[i]}: `);
            counter++;
            for (let j = 0; j < dictionary[outputArr[i]].length; j++) {
                console.log(`-${dictionary[outputArr[i]][j]}`);                
            }
        }
        
    }
    result = "";
    if (counter===0){
        result = Object.keys(dictionary);

        console.log(result.join(' '));
    }
}


solve(["programmer: an animal, which turns coffee into code | developer: a magician","fish | domino","Hand Over"]);
//solve(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
//"bit | code | tackle","Test"])
//solve(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
//"care | kitchen | flower","Test"])