const person = {
    name: "Peter",
    respond() {
        alert(`${this.name} says hello!`);
    }
}

const boundRespond = person.respond.bind(person);

document.getElementById('callBtn').addEventListener('click', person.respond);

document.getElementById('callBtn').addEventListener('click', boundRespond)

/*
<body>
    <button id="callBtn">Call Person</button>
</body>
*/

// За eventListener трябва да опаковаме функцията с bind, закачайки правилният контекст и в последствие тази опакована функция като я сложим като eventListener, тя ще запази контекста