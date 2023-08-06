function wordOccurances(input) {
    let map = new Map();
    for (let i = 0; i < input.length; i++) {
        let word = input[i];
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
    for (let [key,value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}

wordOccurances(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]
)
console.log('----------');
wordOccurances(["dog", "bye", "city", "dog", "dad",
"boys", "ginger"]
)