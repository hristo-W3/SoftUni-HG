function cats(array) {

    class Cat{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
    
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (let i = 0; i < array.length; i++) {
        let [name,age] = array[i].split(' ');
        cats.push(new Cat(name, age));
    }

    for (let [key, value] of Object.entries(cats)) {
        cats[key].meow();
    }
}

cats(['Mellow 2', 'Tom 5'])
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])