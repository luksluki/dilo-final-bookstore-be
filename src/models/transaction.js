const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema(
  {
    orders: [
      {
        book: {
          type: String,
          required: true,
        },
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  },
  {
    timestamps: true,
  }
)

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
