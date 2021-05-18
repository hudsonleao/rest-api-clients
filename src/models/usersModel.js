const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

module.exports = () => {

    const usersSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        created_by: {
            type: String
        },
        updated_by: {
            type: String
        },
        active: {
            type: Boolean,
            required: true,
            default: true
        },
        is_deleted: {
            type: Boolean,
            default: false
        }
    }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

    usersSchema.plugin(mongoosePaginate);

    return model('users', usersSchema);
};