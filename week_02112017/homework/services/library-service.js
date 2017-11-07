const bookService = require('./book-service');
const authorService = require('./author-service');

exports.loadBooks = async () => {
    return bookService.load();
}

exports.loadAuthors = async () => {
    let loadedAuthors = await authorsService.load();
    let loadedBooks = await bookService.load();
    loadedAuthors.forEach(author => {
        let booksByAuthor = filterBooksByAuthor(loadedBooks, author);
        author.addWrittenBooks(booksByAuthor);
    });
}

exports.booksByAuthor = async (authorName) => {
    let booksByAuthor = await bookService.findByAuthor(authorName);
    return booksByAuthor.join(', ');
}

const filterBooksByAuthor = (books, author) => {
    return books.filter(book => {
        return book.author.name == author.name;
    });
};