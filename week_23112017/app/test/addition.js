import test from 'ava'

import library from '../library'

test('Add 3 + 5', t => {
    const result = library.add(3, 5);

    t.is(result, 8, 'Output should equal 8');
});

test('Add 4 + 5', t => {
    const result = library.add(4, 5);

    t.is(result, 9, 'Output should equal 9');
});

test('Add -4 + 99', t => {
    const result = library.add(-4, 99);

    t.is(result, 95, 'Output should equal 95');
});

test.skip('Add 0.1 + 0.2', t => {
    const result = library.add(0.1, 0.2);

    t.is(result, 0.3, 'Output should equal 0.3');
});

test.skip('Add 0.3 + 1.1', t => {
    const result = library.add(0.3, 1.1);

    t.is(result, 0.3, 'Output should equal 1.4');
});

test('push 3 to an array', t=> {
    const result = library.pushToArray([], 3)
    console.log('hey result', result)
    // t.is(result, [3]) // This fails because it is trying to do [3] == [3]
    t.deepEqual(result, [3]) // Takes all the elements and compares them one by one. 
    // Also, instead of 3, you can use an object like {val: 10}
    // t.not - Inverse of equal
    // t.true(result) is the same as t.is(result, true)
    // t.false(result) is the same as t.is(result, false)
    // t.notDeepEqual
    // t.throws
    // t.notThrows
})

test ('create person', t => {
    const person = new library.Person('Ely', 20)
    t.is(person.name, 'Ely')
    t.is(person.age, 20)
})

test('get older', t => {
    const person = new library.Person('Ely', 20)
    person.grow()
    t.is(person.age, 21)
})

