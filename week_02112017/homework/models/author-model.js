module.exports = class Author {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static create(obj) {
        return new Author(obj.id, obj.name);
    }
};