function solve(input){
    let spell = input[0].toString();
    let counter = 1;

    if (input.length <= 1){
        return '';
    }

    while(input[counter] !== 'Abracadabra'){
        let currentLine = input[counter].split(' ');
        let result = '';
        let currentAction = currentLine[0];
        switch(currentAction){
            case 'Abjuration':                 
                for (let i = 0; i < spell.length; i++) {                    
                    let currentCode = spell.charCodeAt(i);
                    let isLowerCase = currentCode > 97 || currentCode < 122;
                    if (isLowerCase){
                        result += `${spell[i].toUpperCase()}`;
                    } else {result += `${currentCode}`}
                }
                spell = result;
                console.log(spell);
                break;
            case 'Necromancy': 
                for (let i = 0; i < spell.length; i++) {                    
                    let currentCode = spell.charCodeAt(i);
                    let isUpperCase = currentCode > 65 || currentCode < 90;
                    if (isUpperCase){
                        result += `${spell[i].toLowerCase()}`;
                    } else {result += `${currentCode}`}
                }
                spell = result;
                console.log(spell);
                break;
            case 'Illusion':
                let indexToChange = Number(currentLine[1]);
                let letterToChange = currentLine[2];
                if (indexToChange > spell.length - 1) {
                    console.log('The spell was too weak.');
                } else {
                    result += spell.slice(0,indexToChange);
                    result += letterToChange;
                    result += spell.slice(indexToChange + 1, spell.length);
                    console.log("Done!");
                    spell = result;
                }
                break;
            case 'Divination': 
                let firstSubstring = currentLine[1];
                let secondSubstring = currentLine[2];
                result = spell.split(firstSubstring);
                result = result.join(secondSubstring);
                //result = spell.replace(firstSubstring,secondSubstring);
                if (!spell.includes(firstSubstring)){
                    break;
                } else {
                    spell = result;
                    console.log(spell);
                }
                break;
            case 'Alteration': 
                let firstSub = currentLine[1];
                result = spell.split(firstSub);
                result = result.join('');
                //result = spell.replaceAll(firstSub,'');
                if (!spell.includes(firstSub)){
                    break;
                } else {
                    spell = result;
                    console.log(spell);
                }
                
                break;
            default: console.log("The spell did not work!"); break;
        }
        //console.log(input[counter].split(' '));


        counter++;
    }
    //console.log(spell);

    function isUpperCase(string) {
        return string.toUpperCase() === string;
      }
}

//solve(['A7ci0','Illusion 1 c','Illusion 4 o','Divination i p','Abjuration','Necromancy','Abracadabra'])
//solve(['A7ci0','Illusion 1 c', 'Illusion 4 o', 'Abjuration', 'Abracadabra'])
//solve(['TR1GG3R', 'Necromancy', 'Illusion 8 m', 'Illusion 9 n', 'Abracadabra'])
//solve(['SwordMaster','Target Target Target','Abjuration','Necromancy','Alteration master','Abracadabra'])
solve(['A7ci0c','Alteration c 1','Abracadabra'])