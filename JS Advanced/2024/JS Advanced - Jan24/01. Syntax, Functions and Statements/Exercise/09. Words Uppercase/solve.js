function solve(input) {
    let textArr = input.split(/[^a-zA-Z0-9]+/);
    for (let i = 0; i < textArr.length; i++) {
        textArr[i] = textArr[i].toUpperCase();
    }
    if (!textArr[textArr.length - 1]){
        textArr.pop();
    }

    console.log(textArr.join(", "));
}

solve('Hi, how are you?')
solve('hello')