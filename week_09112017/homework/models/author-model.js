const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

AuthorSchema.plugin(AutoIncrement, {inc_field: 'author_id'});

module.exports = mongoose.model('Author', AuthorSchema);