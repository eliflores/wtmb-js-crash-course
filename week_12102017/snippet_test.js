/** Learning about objects **/
// person2000 = {
//     name: 'Ely Flores',
//     age: 25
// };

// person2001 = {
//     name: 'Ana Montes',
//     age: 30
// };

// person2002 = { 
//     name: 'Fulanito'
// };

// add(person2000.age, person2002.age);

// Lets declare a class
// class Person {

// }

// Same as above, classes are also variables.
// const Person = class {

// }

// let Person = class {

// }

// const add = (a, b) => a + b;

Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.interests = [];
        this.friends = [];
    }

    sayName() {
        console.log(this.name);
    }

    makeFriendsWith(person) {
        this.friends.push(person);
        person.friends.push(this);
    }

};

person7 = new Person('Ely', 25);
person8 = new Person('Anita', 22);

instructors = [person7, person8];

printName = person => person.sayName();

instructors.forEach(printName)
// instructors.forEach(person => person.sayName());

person7.makeFriendsWith(person8);