module.exports = class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    toString() {
        return 'Title: ' + this.title + ', Author: ' + this.author.name + ', ISBN: ' + this.isbn;
    }
};
