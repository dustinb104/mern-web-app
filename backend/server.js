const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/posts', require('./routes/postsRoutes'))

// this is the call to our middleware that overwrites the default express
// error handler.
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))