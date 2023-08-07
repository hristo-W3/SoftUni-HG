function emailValidator(input) {
    let targetEmail = input.shift();
    let result = targetEmail;
    
    if (input.length <= 1){
        return '';
    }

    for (let line of input) {
        let currentLine = line;
        if (currentLine === 'Make Upper'){
            result = result.toUpperCase();
            console.log(result);
        }
        if (currentLine === 'Make Lower'){
            result = result.toLowerCase();
            console.log(result);
        }
        if (currentLine.split(' ')[0] === 'GetDomain') {
            let count = currentLine.split(' ')[1];
            let toPrint = result.slice(result.length - count);
            console.log(toPrint);            
        }
        if (currentLine === 'GetUsername'){
            if (!result.includes('@')){
                console.log(`The email ${result} doesn't contain the @ symbol.`);
            } else {
                console.log(result.substring(0,result.indexOf('@')));
            }
        }
        if (currentLine.split(' ')[0] === 'Replace'){
            let letter = currentLine.split(' ')[1];
            result = result.split(letter).join('-');
            console.log(result);
        }
        if (currentLine === 'Encrypt'){
            let res = ''
            for (let i = 0; i < result.length; i++) {
                res += result[i].charCodeAt(0) + ' ';
            }
            result = res;
            console.log(result);
        }
    }
    
}

emailValidator((["Mike123@somemail.com",
"Make Upper",
"GetDomain 3",
"GetUsername",
"Replace E",
"Encrypt",
"Complete"])
)