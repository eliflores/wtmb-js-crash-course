const Library = require('./library');
const Book = require('./book');
const Author = require('./author');

const library = new Library('Ely Library');

const george = new Author('George Martin');
const gameOfThrones = new Book('Game of Thrones', george, '9788496422612');

const antoine = new Author('Antoine de Saint-Exupéry');
const lePetitPrince = new Book('Le Petit Prince', antoine, '9788995317471');

library.addBook(gameOfThrones);
library.addBook(lePetitPrince);

library.logBooks();
