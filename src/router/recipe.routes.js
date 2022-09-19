// deklare express
const express = require('express')
const { list, detail, insert, update, destroy, detailTitle } = require('../controller/recipe.controller')

const router = express.Router()

// router
// .get('/', (req, res) => {
//     const data = [1,2,3,4]
//     res.json(data);
// })

router
  .get('/recipe', list)
  .get('/recipe/:id', detail)
  .post('/recipe/:title', detailTitle)
  .post('/recipe', insert)
  .put('/recipe/:id', update)
  .delete('/recipe/:id', destroy)

module.exports = router
