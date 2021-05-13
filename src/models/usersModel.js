const { Schema, model } = require('mongoose');

module.exports = () => {

    const usersSchema = new Schema({
        name: {
            type: String,
            require: true
        },
        user: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        active: {
            type: Boolean,
            require: true
        }
    });

    return model('users', usersSchema);
}