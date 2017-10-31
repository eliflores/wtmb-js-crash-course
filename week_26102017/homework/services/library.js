const booksService = require('./books');
const authorsService = require('./authors');

exports.loadLibrary = async () => {
    let loadedBooks = await booksService.loadBooks();
    loadedBooks.forEach(book => {
        console.log(` ~~ ${book.toString()} ~~`);
    });
}

exports.loadAuthors = async () => {
    let loadedAuthors = await authorsService.loadAuthors();
    let loadedBooks = await booksService.loadBooks();
    loadedAuthors.forEach(author => {
        let booksByAuthor = filterBooksByAuthor(loadedBooks, author);
        author.addWrittenBooks(booksByAuthor);
        console.log(`~~ ${author.toString()}`);
    });
}

const filterBooksByAuthor = (books, author) => {
    return books.filter(book => {
        return book.author.name == author.name;
    });
};