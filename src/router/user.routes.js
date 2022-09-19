// deklare express
const express = require('express')
const { list, detail, insert, update, destroy } = require('../controller/user.controller')

const router = express.Router()

// router
// .get('/', (req, res) => {
//     const data = [1,2,3,4]
//     res.json(data);
// })

router
  .get('/user/list', list)
  .get('/user/:id', detail)
  .post('/user', insert)
  .put('/user/:id', update)
  .delete('/user/:id', destroy)

module.exports = router
