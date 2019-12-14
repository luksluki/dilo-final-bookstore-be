const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const app = express()
const port = 3000

const userRouter = require('./routers/user')
const bookRouter = require('./routers/book')
const transactionRouter = require('./routers/transaction')

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(bookRouter)
app.use(transactionRouter)

app.listen(port, () => {
  console.log(`Server is running in ${port}`)
})
