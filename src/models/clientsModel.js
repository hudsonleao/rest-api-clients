const { Schema, model } = require('mongoose');

module.exports = () => {

    const clientsSchema = new Schema({
        name: {
            type: String,
            require: true
        },
        gender: {
            type: String,
            require: true
        },
        dateOfBirth: {
            type: String,
            require: true
        },
        age: {
            type: Number,
            require: true,
        },
        city: {
            type: String,
            require: true,
        },
    });

    return model('clients', clientsSchema);
}