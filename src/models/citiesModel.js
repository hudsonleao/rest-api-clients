const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

module.exports = () => {

    const citiesSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
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

    citiesSchema.plugin(mongoosePaginate);

    return model('cities', citiesSchema);
};