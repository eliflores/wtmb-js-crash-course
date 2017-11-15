const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

AuthorSchema.plugin(AutoIncrement, {id:'authorSchemaIdCounter', inc_field: 'id'});

module.exports = mongoose.model('Author', AuthorSchema);