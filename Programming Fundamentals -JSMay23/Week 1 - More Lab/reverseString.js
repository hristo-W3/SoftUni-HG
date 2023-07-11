function reverse(word){
    let initial = word;
    let reverse = '';
    for (let i = initial.length-1; i >= 0; i--){
        reverse += initial[i];
    }
    console.log(reverse);
}

reverse("Softuni")