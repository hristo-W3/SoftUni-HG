function oldLibrary(input){
    let counter = 0;
    let found = 0;
    let favouriteBook = input[0];
    counter++;
    let currentBook = input[counter];
    counter++;

    let totalBooks = 0;
    
    while (currentBook !== "No More Books") {
        if (currentBook === favouriteBook){found = 1;console.log(`You checked ${totalBooks} books and found it.`);; break;}
        currentBook = input[counter];
        totalBooks++;
        counter++;
    }

    if (found == 0){
        console.log("The book you search is not here!");
        console.log(`You checked ${totalBooks} books.`);
    } 
}

oldLibrary(["Troy",
"Stronger",
"Life Style",
"Troy"])	
