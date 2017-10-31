const utils = require('./utils')
const booksService = require('./services/books');
const authorsService = require('./services/authors');
const libraryService = require('./services/library');

const authors = utils.createAuthors();
authorsService.saveAuthors(authors);

const books = utils.createBooks(authors);
booksService.saveBooks(books);

console.log('~~~~ Welcome to your personal library ~~~~');

const main = async () => {
    console.log('    ~~~ Available Books ~~~');
    await libraryService.loadLibrary();
    
    console.log('    ~~~ Available Authors ~~~');
    await libraryService.loadAuthors();

    console.log('    ~~~ Books by George R. Martin ~~~');
    let booksByGeorge = await libraryService.booksByAuthor('George Martin');
    console.log(booksByGeorge);

};

main();






