module.exports = class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    logBooks() {
        this.books.forEach(book => console.log(book.toString()));
    }
};