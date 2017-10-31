const utils = require('./utils')
const booksService = require('./services/books');
const authorsService = require('./services/authors');
const libraryService = require('./services/library');

console.log('~~~~ Welcome to your personal library ~~~~');

const authors = utils.createAuthors();
const books = utils.createBooks(authors);

const main = async () => {
    await authorsService.save(authors);
    await booksService.save(books);

    console.log('    ~~~ Available Books ~~~');
    await libraryService.loadBooks();
    
    console.log('    ~~~ Available Authors ~~~');
    await libraryService.loadAuthors();

    console.log('    ~~~ Books by George Martin ~~~');
    let booksByGeorge = await libraryService.booksByAuthor('George Martin');
    console.log(booksByGeorge);
};

main();






