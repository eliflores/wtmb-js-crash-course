const Person = require('./person');
const Database = require('./database');

const ely = new Person('Ely', 25);
const anita = new Person('Anita', 20);

const instructors = [ely, anita];

Database.save(instructors, (err) => {
    console.log('We are finally in the future!');
});

setInterval(() => {
    console.log('are we there yet?');
}, 1000);


// const loadedInstructors = Database.load();

// const convertedInstructors = loadedInstructors.map(Person.create);
// convertedInstructors[0].sayName();

// const secondPerson = Person.create(loadedInstructors[1]);
// secondPerson.sayName();

// const firstPerson = Person.create(loadedInstructors[0]);
// const secondPerson = Person.create(loadedInstructors[1]);

// firstPerson.sayName();
// secondPerson.sayName();

/* Example of asynchronous programming in the browser!
window.addEventListener('click', (event) => {
    alert('hello');
});

// This is a callback function:
(event) => {
    alert('hello');
}
*/