const mongoose = require('mongoose')

const nestedObj = new mongoose.Schema({
    // you can pass this to the main schema
    field1: String,
    field2: Number,
})

const TodoSchema = new mongoose.Schema({
    record: { type: String, required: true }, //required means this field should be present
    date: { type: Number, default: 100 }, //default means this field is optional
    fields: nestedObj,
})

const model = mongoose.model('TodoModel', TodoSchema)

module.exports = model
