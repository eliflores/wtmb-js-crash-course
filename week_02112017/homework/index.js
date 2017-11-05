const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', async (req, res, next) => {
    res.render(`index`)
})

app.listen(3000, () => {
    console.log('Server listening.')
})
