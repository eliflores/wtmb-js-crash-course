exports.add = (val1, val2) => val1 + val2;

exports.pushToArray = (arr, el) => {
    arr.push(el);
    return arr
}

exports.Person = class {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    grow() {
        this.age++
    }
}