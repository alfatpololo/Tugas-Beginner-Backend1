const recipeModel = require('../model/recipe.model')

const recipeController = {
  // metod
  list: (req, res) => {
    recipeModel.selectAll()
      .then((results) => {
        res.json(results)
      }).catch((err) => {
        res.json(err)
      })
  },
  detail: (req, res) => {
    const id = req.params.id
    recipeModel.selectDetail(id).then((results) => {
      res.json(results.rows)
    }).catch((err) => {
      res.json(err)
    })
  },
  insert: (req, res) => {
    const { id, title, ingredients, description } = req.body
    recipeModel.store(id, title, ingredients, description).then((results) => {
      res.json(results)
    }).catch((err) => {
      res.json(err)
    })
  },
  update: (req, res) => {
    const { id, title, ingredients, description } = req.body
    recipeModel.update(id, title, ingredients, description).then((results) => {
      res.jsson(results)
    }).catch((err) => {
      res.json(err)
    })
  },
  destroy: (req, res) => {
    const id = req.params.id
    recipeModel.destroy(id).then((results) => {
      res.json(results.rows)
    }).catch((err) => {
      res.json(err)
    })
  },
  detailTitle: (req, res) => {
    const title = req.params.title
    recipeModel.detailTitle(title).then((results) => {
        res.json(results.rows)
      }).catch((err) => {
        res.json(err)
      })
  }
}

module.exports = recipeController