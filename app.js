const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())

const Todo = require('./models/todo')
mongoose.connect('mongodb://localhost/firstmongo')
app.get('/', async (req, res) => {
    const records = await Todo.find({ field1: 'field2' })
    res.json(records)
})
app.post('/', async (req, res) => {
    const body = req.body
    //Create to the database
    await Todo.create(body) //moongose method
    res.json(body)
})
app.put('/', async (req, res) => {
    const { record, newRecord } = req.body
    const response = await Todo.updateOne(
        {
            record: record,
        },
        {
            $set: {
                record: newRecord,
            },
        }
    )
    res.json(response)
})
app.delete('/:record', async (req, res) => {
    const record = req.params.record
    const response = await Todo.deleteOne({ record: record })
    res.json(response)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
