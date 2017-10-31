const fs = require('fs');

    // .map(filename => fs.readFileSync(filename, 'utf8'));
// console.log(files);

// const text1 = fs.readFile('./files/1.txt', 'utf8');
// const text2 = fs.readFile('./files/2.txt', 'utf8');
// const text3 = fs.readFile('./files/3.txt', 'utf8');

// console.log('are we there yet?', text1, text2, text3);

// fs.readFile('./files/1.txt', 'utf8', (err, contents) => console.log(contents));
// fs.readFile('./files/2.txt', 'utf8', (err, contents) => console.log(contents));
// fs.readFile('./files/3.txt', 'utf8', (err, contents) => console.log(contents));

// Callback pyramid, functions inside functions!
// This is not how we write code! There are alternatives!
// fs.readFile('./files/1.txt', 'utf8', (err, contents) => {
//     console.log(contents);
//     fs.readFile('./files/2.txt', 'utf8', (err, contents) => {
//         console.log(contents);
//         fs.readFile('./files/3.txt', 'utf8', (err, contents) => console.log(contents));
//     });
// });

// Now with promises!

const readFile = async (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, contents) => {
            if (err) reject('err');

            resolve(contents);
        });
    });
};

const files = [1, 2, 3]
    .map(number => `./files/${number}.txt`);

// The client, the consumer of the library only cares about this.
// readFile(files[0])
//     .then(console.log)
//     .then(() => readFile(files[1]))
//     .then(console.log)
//     .then(() => readFile(files[2]))
//     .then(console.log)
//     .then(() => console.log('finished!'));

const main = async () => {
    const contents1 = await readFile(files[0]);
    console.log(contents1);
    const contents2 = await readFile(files[1]);
    console.log(contents2);
    const contents3= await readFile(files[2]);
    console.log(contents3);
    console.log('finished!');
};

main();
