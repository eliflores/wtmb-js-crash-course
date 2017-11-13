const express = require('express')
const router = express.Router()

const authorService = require('../services/author-service')

router.get('/', async (req, res, next) => {
    res.send(await authorService.findAll())
})


router.get('/all', async (req, res, next) => {
    const authors = await authorService.findAll()
    res.render('author-list', { authors })
})

router.get('/:id', async (req, res, next) => {
    const author = await authorService.find(req.params.id)
    res.render('author-detail', { author })
})

router.post('/', async (req, res, next) => {
    const author = await authorService.add(req.body)
    res.send(author)
})

module.exports = router