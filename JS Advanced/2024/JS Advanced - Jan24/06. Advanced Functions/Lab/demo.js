function sayHello(subject, grade) {
    console.log(this.name + ' says hi!');
    console.log(this.name + ' received a ' + grade + " at " + subject);
}

const myObj = {
    name: 'Peter',
    sayHello
}

sayHello.call(myObj, 'biology', 6);
sayHello.apply(myObj, ['biology', 6]);

console.log(Math.max.apply(null,[3,4,5,6]));
console.log(Math.max(...[3,4,5,6]));