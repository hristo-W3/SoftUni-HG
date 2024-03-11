function sayHello(subject, grade) {
    console.log(this.name + ' says hi!');
    console.log(this.name + ' received a ' + grade + " at " + subject);
}

const myObj = {
    name: 'Peter',
    sayHello
}

const secondObj = {
    name: 'John'
}

sayHello.call(myObj, 'biology', 6);
sayHello.apply(myObj, ['biology', 6]);

console.log(Math.max.apply(null,[3,4,5,6]));
console.log(Math.max(...[3,4,5,6]));

const boundFn = sayHello.bind(secondObj);
boundFn('art' , 4);

const boundFn2 = sayHello.bind(secondObj, 'art');
boundFn2(4);

const boundFn3 = sayHello.bind(secondObj, 'art', 4);
boundFn3();

// Below is equivalent to the bind code above
const boundFnX = function() {
    sayHello.call(secondObj, 'art', 4)
}