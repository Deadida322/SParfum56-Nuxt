const { Schema, model } = require('mongoose')

const schema = new Schema({
    module: { type: String, required: true },
    path: { type: String, required: true },
    name: { type: String, required: false },
    description: { type: String, required: false }
});

module.exports = model('Image', schema)