const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', async (req, res, next) => {
    res.render(`index`)
})

const book = require('./routes/book')
app.use('/book', book)

app.listen(3000, () => {
    console.log('Server listening.')
})
