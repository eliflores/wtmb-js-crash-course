const utils = require('./utils')
const booksService = require('./services/books');
const authorsService = require('./services/authors');
const libraryService = require('./services/library');

const authors = utils.createAuthors();
authorsService.saveAuthors(authors);

const books = utils.createBooks(authors);
booksService.saveBooks(books);

console.log('~~~~ Welcome to your personal library ~~~~');

console.log(' ~~~ Available Books ~~~');
libraryService.loadLibrary();

console.log(' ~~~ Available Authors ~~~');
libraryService.loadAuthors();





