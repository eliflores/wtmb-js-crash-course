const booksService = require('./books');
const authorsService = require('./authors');

exports.loadBooks = async () => {
    let loadedBooks = await booksService.load();
    loadedBooks.forEach(book => {
        console.log(`${book.toString()}`);
    });
}

exports.loadAuthors = async () => {
    let loadedAuthors = await authorsService.load();
    let loadedBooks = await booksService.load();
    loadedAuthors.forEach(author => {
        let booksByAuthor = filterBooksByAuthor(loadedBooks, author);
        author.addWrittenBooks(booksByAuthor);
        console.log(`${author.toString()}`);
    });
}

exports.booksByAuthor = async (authorName) => {
    let booksByAuthor = await booksService.findByAuthor(authorName);
    return booksByAuthor.join(', ');
}

const filterBooksByAuthor = (books, author) => {
    return books.filter(book => {
        return book.author.name == author.name;
    });
};