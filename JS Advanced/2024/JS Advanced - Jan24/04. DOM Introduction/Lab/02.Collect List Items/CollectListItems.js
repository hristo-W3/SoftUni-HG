function extractText() {
    // find the list in the page
    const list = document.getElementById('items');
    let result = [];
    const items = Array.from(list.children);
    // loop all children
    for (let item of items) {
        result.push(item.textContent);
    }    
    // read their textContent
    // create resulting string    

    // find on the page the output textarea
    const textArea = document.getElementById('result');
    // change it's content to equal the resulting string
    textArea.value = result.join('\n');
}