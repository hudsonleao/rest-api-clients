const { Schema, model } = require('mongoose');

module.exports = () => {

    const citiesSchema = new Schema({
        name: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        }
    });

    return model('cities', citiesSchema);
}