function focused() {
    const sectionElements = document.querySelectorAll("div div");
    const inputFields = document.getElementsByTagName('input');
    //const inputFieldsArr = Array.from(document.getElementsByTagName('input'));

    // inputFieldsArr.forEach(input => {
    //     input.addEventListener('focus', inputFocus);
    //     input.addEventListener('blur', inputBlur);
    // })

    for (const input of inputFields) {
        input.addEventListener('focus', inputFocus);
        input.addEventListener('blur', inputBlur);
    }

    function inputFocus(e) {
        const sectionElement = e.target.parentNode;
        sectionElement.classList.add("focused");
        // sectionElement.className = "focused";
    }

    function inputBlur(e) {
        const sectionElement = e.target.parentNode;
        sectionElement.classList.remove("focused")
        // sectionElement.className = "";
    }

}