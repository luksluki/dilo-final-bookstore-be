const express = require('express')
const User = require('../models/user')
const Book = require('../models/book')
const auth = require('../middleware/auth')
const router = new express.Router()
const multer = require('multer')

// @Description     > Getting all books
// @Route           > /books
// @method          > GET
// @Access Control  > Public
// @Author          > Teguh
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find({})
    res.send(books)
  } catch (e) {
    res.status(500).send()
  }
})

// @Description     > Getting book by id
// @Route           > /books
// @method          > GET
// @Access Control  > Private
// @Author          > Teguh
router.get('/books/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const book = await Book.findById(_id)

    if (!book) {
      // return res.status(409).json({
      //     msg: `Book not found!`,
      // })
      return res.status(404).send()
    }

    res.send(book)
  } catch (e) {
    res.status(500).send()
  }
})

// @Description     > Posting books
// @Route           > /books
// @method          > POST
// @Access Control  > Private
// @Author          > Teguh
router.post('/books', auth, async (req, res) => {
  const book = new Book(req.body)

  try {
    await book.save()
    res.status(201).send(book)
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
