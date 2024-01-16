function addItem() {
    // Assign the input text to a variable
    let inputText = document.getElementById("newItemText").value;
    // Create a new li element, where the text will be added
    let li = document.createElement("li");
    // Add the text to the li element
    li.appendChild(document.createTextNode(inputText));
    // Add the new li element to the existing list of items
    document.getElementById("items").appendChild(li);
    // Clearing the input
    document.getElementById("newItemText").value = '';
}