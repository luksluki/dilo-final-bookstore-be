const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Book = require('./book')

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('email is invalid')
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      trim: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    avatar: {
      type: Buffer,
    },
  },
  {
    timestamps: true,
  }
)

adminSchema.methods.generateAuthToken = async function() {
  const admin = this
  const token = jwt.sign({ _id: admin._id.toString() }, 'my_secret')

  admin.tokens = admin.tokens.concat({ token })
  await admin.save()

  return token
}

adminSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner',
})

adminSchema.statics.findByCredentials = async (email, password) => {
  const admin = await Admin.findOne({ email })
  if (!admin) {
    throw new Error('Gagal Login')
  }

  const isMatch = await bcrypt.compare(password, admin.password)
  if (!isMatch) {
    throw new Error('Gagal Login')
  }

  return admin
}

adminSchema.pre('save', async function(next) {
  const admin = this
  if (admin.isModified('password')) {
    admin.password = await bcrypt.hash(admin.password, 8)
  }

  next()
})

adminSchema.pre('remove', async function(next) {
  const admin = this
  await Task.deleteMany({ owner: admin._id })
  next()
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin
