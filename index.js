require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const xss = require('xss-clean')
const cors = require('cors')

// buat route
const userRouter = require('./src/router/user.routes')
const recipeRouter = require('./src/router/recipe.routes')
const commentRouter = require('./src/router/comment.routes')

const app = express()
app.use(helmet())
app.use(bodyParser.json())
app.use(cors())
app.use(xss())
app.use(userRouter)
app.use(recipeRouter)
app.use(commentRouter)

// jalankan express
app.listen( process.env.PORT, () => {
  console.log('SERVICE RUNNING ON PORT 3001')
})
