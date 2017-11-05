const express = require('express')
const bodyParser = require('body-parser')
const PersonService = require('./services/person-service')


// Create a new HTTP application
const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', async (req, res, next) => {
    // res.send(await PersonService.findAll())
    // res.sendFile(`${__dirname}/index.html`)
    res.render(`index`)
})

app.get('/person/all', async (req, res, next) => {
    const people = await PersonService.findAll()
    res.render('person', { people })
})

app.post('/person', async (req, res, next) => {
    const person = await PersonService.add(req.body)
    res.send(person)
})

app.delete('/person/:personId', async (req, res, next) => {
    await PersonService.del(req.params.personId)
    res.send('ok!')
})

// Beginning of an HTTP server
app.listen(3000, () => {
    //Callback function that is executed after the server is ready to listen.
    //It is an asychronous operation so we need a calback function.
    console.log('Server listening.')
})
