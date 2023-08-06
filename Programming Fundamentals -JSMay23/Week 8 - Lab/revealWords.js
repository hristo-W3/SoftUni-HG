function revealWords(words, text){
    let wordsArray = words.split(', ');
    
    for (let word of wordsArray) {
        let wordsFromStars = '*'.repeat(word.length);

        text = text.replace(wordsFromStars, word);
    }
    console.log(text);
}

//revealWords('great','softuni is ***** place for learning new programming languages')
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')