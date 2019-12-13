const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
    {
        judul: {
            type: String,
            required: true,
            trim: true,
        },
        deskripsi: {
            type: String,
            trim: true,
        },
        kategori: {
            type: String,
            required: true,
            trim: true,
        },
        harga: {
            type: Number,
            required: true,
            trim: true,
        },
        pengarang: {
            type: String,
            trim: true,
        },
        penerbit: {
            type: String,
            trim: true,
        },
        stock: {
            type: Number,
            required: true,
            min: 1
        },
    },
    {
        timestamps: true,
    }
)

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
