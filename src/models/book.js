const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'book name is required...'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'leave some description about the book..'],
    },
    category: {
      type: String,
      required: [true, 'choose category about the book..'],
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    bookImage: {
      type: String,
      // required: [true, 'book image is required...'],
    },
    stock: {
      type: Number,
      required: true,
      min: 1,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
