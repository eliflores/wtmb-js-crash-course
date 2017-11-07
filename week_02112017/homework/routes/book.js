const express = require('express')
const router = express.Router()

const BookService = require('../services/book-service')

router.get('/', async (req, res, next) => {
    res.send(await BookService.findAll())
})


router.get('/all', async (req, res, next) => {
    const books = await BookService.findAll()
    res.render('book-list', { books })
})

module.exports = router