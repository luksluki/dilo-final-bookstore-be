const express = require('express')
const User = require('../models/user')
const Book = require('../models/book')
const auth = require('../middleware/auth')
const router = new express.Router()
const multer = require('multer')

// Importing file upload
// import upload from '../helpers/file_upload';

// Importing controllers
// import {
//     getBooks,
// } from '../controllers/book_controller';

// @Description     > Getting all books
// @Route           > /api/books
// @Access Control  > Public
// router.get('/books', getBooks);

router.get('/books', async (req, res) => {
  try {
    const books = await Book.find({})
    res.send(books)
  } catch (e) {
    res.status(500).send()
  }
})

router.post('/users', async (req, res) => {
  const book = new Book(req.body)

  try {
    await book.save()
    res.status(201).send(book)
  } catch (e) {
    res.status(400).send(e)
  }
})

// //input buku
// router.post('/books', async (req, res) => {
//     const book = new Book(req.body)
//     const user = new User()

//     try {
//         await book.save()
//         const token = await user.generateAuthToken()
//         res.status(201).send({ book, token })
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// // Ambil Data Buku where TOKEN
// router.get('/books', auth, async (req, res) => {
//     try {
//         const users = await User.find({})
//         res.status(200).send(users)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// // Ambil Data This User where TOKEN = TOKEN
// router.get('/users/me', auth, async (req, res) => {
//     res.send(req.user)
// })

// // Ambil Data TOKEN This User where TOKEN = TOKEN
// router.get('/users/get-token', auth, async (req, res) => {
//     res.send({ token: req.token })
// })

// //login
// router.post('/users/login', async (req, res) => {
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)
//         const token = await user.generateAuthToken()
//         res.status(200).send({ user, token })
//     } catch (e) {
//         res.status(422).send({
//             message: 'Login Gagal',
//         })
//     }
// })

// //logout
// router.post('/users/logout', auth, async (req, res) => {
//     try {
//         req.user.tokens = req.user.tokens.filter(token => {
//             return token.token !== req.token
//         })
//         await req.user.save()

//         res.send({ message: 'Logout Success' })
//     } catch (e) {
//         res.status(500).send({ message: 'Logout Gagal' })
//     }
// })

// //logout ALL Devices (delete all this.user.token)
// router.post('/users/logoutAll', auth, async (req, res) => {
//     try {
//         req.user.tokens = []
//         await req.user.save()
//         res.send({ message: 'Logout berhasil' })
//     } catch (e) {
//         res.status(500).send({ message: 'Logout Gagal' })
//     }
// })

// //Delete User where TOKEN
// router.delete('/users/me', auth, async (req, res) => {
//     try {
//         await req.user.remove()
//         res.send(req.user)
//     } catch (e) {
//         res.status(500).send({ message: 'gagal delete' })
//     }
// })

// const upload = multer({
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             return cb(new Error('Please upload an image'))
//         }

//         cb(undefined, true)
//     },
// })

// router.post(
//     '/users/me/avatar',
//     auth,
//     upload.single('avatar'),
//     async (req, res) => {
//         req.user.avatar = req.file.buffer
//         await req.user.save()
//         res.send({ message: 'berhasil di upload' })
//     },
//     (error, req, res) => {
//         res.status(400).send({ error: error.message })
//     }
// )

// router.get('/users/:id/avatar', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id)
//         if (!user || !user.avatar) {
//             throw Error()
//         }
//         res.set('Content-Type', 'image/png')
//         res.send(user.avatar)
//     } catch (e) {
//         res.status(404).send({ message: 'image not found' })
//     }
// })

module.exports = router
