module.exports = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this.name);
    }

    static create(obj) {
        return new Person(obj.name, obj.age);
    }
}