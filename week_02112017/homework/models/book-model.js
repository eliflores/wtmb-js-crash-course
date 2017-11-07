const Author = require('./author-model');

module.exports = class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    static create(obj) {
        let author = Author.create(obj.author);
        return new Book(obj.title, author, obj.isbn);
    }

    toString() {
        return `Title: ${this.title} - ISBN: ${this.isbn} - Author: ${this.author.name}`;
    }
};
