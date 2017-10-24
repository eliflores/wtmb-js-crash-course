const red = require('ansi-red');
const Person = require('./person');
const Database = require('./database');

console.log(red('Hello World'));

const ely = new Person('Ely', 25);
const anita = new Person('Anita', 20);

const instructors = [ely, anita];

Database.save(instructors);

const loadedFile = Database.load();

console.log(loadedFile[0].age);