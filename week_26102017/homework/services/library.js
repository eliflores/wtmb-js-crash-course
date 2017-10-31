const booksService = require('./books');
const authorsService = require('./authors');

exports.loadLibrary = () => {
    booksService.loadBooks().forEach(book => {
        console.log(` ~~ ${book.toString()} ~~`);
    });
}

exports.loadAuthors = () => {
    authorsService.loadAuthors().forEach(author => {
        addBooksToAuthor(author);
        console.log(`~~ ${author.toString()}`);
    });
}

const addBooksToAuthor = (author) => {
    let booksByAuthor = booksService.findBookByAuthor(author.name);
    author.addWrittenBooks(booksByAuthor);
};
