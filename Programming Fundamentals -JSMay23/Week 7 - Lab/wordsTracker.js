function wordsTracker(arr) {
    let mapWords = new Map();
    let targetWords = arr.shift().split(' ');
    targetWords.forEach(word => {
        mapWords.set(word, 0);
    })
    // for (let el of targetWords) {
    //     mapWords[el] = 0;        
    // }
    for (let word of arr) {
        if(mapWords.has(word)){
            mapWords.set(word, mapWords.get(word) + 1);
        }
    }
    let sorted = Array.from(mapWords).sort((a, b) => b[1] - a[1]);
    console.log(sorted);
    sorted.forEach((word,index) => {
        console.log(`${sorted[index][0]} - ${sorted[index][1]}`);
    })

    //let sorted = Array.from(mapWords.entries()).sort((a, b) => b[1] - a[1]);
    //sorted.forEach(word => {
    //    console.log(`${word.join(' - ')}`);
    //    console.log(`${word[0] - ${word[1]'})
    //})
    
}
//this - 3
//sentence - 2
wordsTracker([
'this sentence',
'In', 'this', 'sentence', 'you', 'have',
'to', 'count', 'the', 'occurrences', 'of',
'the', 'words', 'this', 'and', 'sentence',
'because', 'this', 'is', 'your', 'task'
]
)
console.log('-----------');
wordsTracker([
'is the',
'first', 'sentence', 'Here', 'is',
'another', 'the', 'And', 'finally', 'the',
'the', 'sentence']
)