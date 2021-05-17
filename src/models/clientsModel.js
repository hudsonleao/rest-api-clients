const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

module.exports = () => {

    const clientsSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: String,
            required: true
        },
        city_id: {
            type: Schema.Types.ObjectId,
            ref: "cities"
        },
        created_by: {
            type: String
        },
        updated_by: {
            type: String
        },
        is_deleted: {
            type: Boolean,
            default: false
        }
    }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

    clientsSchema.plugin(mongoosePaginate);

    return model('clients', clientsSchema);
}