module.exports = class Author {
    constructor(name) {
        this.name = name;
        this.writtenBooks = [];
    }

    addWrittenBooks(books) {
        books.forEach(book => {
            this.writtenBooks.push(book);
        });
    }

    toString() {
        let bookTitles = this.writtenBooks
            .map(book => book.title)
            .join(', ');
        return `Name: ${this.name} - Books: ${bookTitles}`;
    }

    static create(obj) {
        return new Author(obj.name);
    }
};