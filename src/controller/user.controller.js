const userModel = require('../model/user.model')

const userController = {
  // metod
  list: (req, res) => {
    const limit = parseInt(req.query.limit) || 3;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    userModel
      .list(limit, offset)
      .then((results) => {
        res.json(results)
      }).catch((err) => {
        res.json(err)
      })
  },
  detail: (req, res) => {
    const id = req.params.id
    userModel.selectDetail(id).then((results) => {
      res.json(results.rows)
    }).catch((err) => {
      res.json(err)
    })
  },
  insert: (req, res) => {
    const { id, username, password, email, phone } = req.body
    userModel.store(id, username, password, email, phone).then((results) => {
      res.json(results)
    }).catch((err) => {
      res.json(err)
    })
  },
  update: (req, res) => {
    const { id, password, } = req.body
    userModel.update(id, password).then((results) => {
      res.jsson(results)
    }).catch((err) => {
      res.json(err)
    })
  },
  destroy: (req, res) => {
    const id = req.params.id
    userModel.destroy(id).then((results) => {
      res.json(results.rows)
    }).catch((err) => {
      res.json(err)
    })
  }
}

module.exports = userController
