function oddOccurances(arr) {
    let wordsArray = arr.split(' ').map(e => e.toLowerCase());
    let obj = {};
    for (let word of wordsArray) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 0;
        }
        obj[word]++;
    }

    let oddEls = Object.entries(obj).filter(pair => pair[1] % 2 !== 0).sort((a, b) => b[1] - a[1])

    let result = '';
    for (let array of oddEls) {
        result += `${array[0]} `;
    }
    console.log(result);
}

oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log(('---------------------'));
oddOccurances('Cake IS SWEET is Soft CAKE sweet Food');