const express = require('express')
const User = require('../models/user')
const Book = require('../models/book')
const Transaction = require('../models/transaction')
const auth = require('../middleware/auth')
const router = new express.Router()
const multer = require('multer')

// @Description     > Getting all books
// @Route           > /books
// @method          > GET
// @Access Control  > Public
// @Author          > Teguh
router.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find({})
    res.send(transactions)
  } catch (e) {
    res.status(500).send()
  }
})

// @Description     > Getting book by id
// @Route           > /books
// @method          > GET
// @Access Control  > Private
// @Author          > Teguh
router.get('/transactions/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const transaction = await Transaction.findById(_id)

    if (!transaction) {
      // return res.status(409).json({
      //     msg: `Book not found!`,
      // })
      return res.status(404).send()
    }

    res.send(transaction)
  } catch (e) {
    res.status(500).send()
  }
})

// @Description     > Posting books
// @Route           > /books
// @method          > POST
// @Access Control  > Private
// @Author          > Teguh
router.post('/transactions', auth, async (req, res) => {
  const transaction = new Transaction(req.body)

  try {
    await transaction.save()
    res.status(201).send(transaction)
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
