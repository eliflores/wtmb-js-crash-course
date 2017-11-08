const express = require('express')
const router = express.Router()

const bookService = require('../services/book-service')

router.get('/', async (req, res, next) => {
    res.send(await bookService.findAll())
});


router.get('/all', async (req, res, next) => {
    const books = await bookService.findAll()
    res.render('book-list', { books })
});

router.get('/:id', async (req, res, next) => {
    const book = await bookService.find(req.params.id)
    res.render('book-detail', { book })
});

router.post('/', async(req, res, next)=> {
    const book = await bookService.add(req.body)
    res.send(book)
});

router.delete('/:id', async(req, res, next) => {
    await bookService.del(req.params.id)
    res.send('book deleted!')
});

module.exports = router