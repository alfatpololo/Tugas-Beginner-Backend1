const db = require('../config/db')

const recipeModel = {
  // router list
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM recipes ORDER BY title ASC', (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // router details
  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM recipes WHERE id=${id}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // router insert
  store: (id, title, ingredients, description) => {
    return new Promise((resolve, reject) => {
      db.query(`
            INSERT INTO recipes (id, title, ingredients, description)
            VALUES
            (${id}, '${title}', '${ingredients}', '${description}')
            `, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // router edit/update
  update: (id, title, ingredients, description) => {
    return new Promise ((resolve, reject) => {
      db.query(`
            UPDATE recipes set title = '${title}', ingredients = '${ingredients}', description = '${description}' WHERE id = ${id}
            `, (err, res) => {
              if (err) {
                reject(err)
              }
                resolve(res)
        })
    })
},
  // router destroy/delete
  destroy: (id) => {
    return new Promise ((resolve, reject) => {
      db.query(`
            DELETE FROM recipes where id=${id}
            `, (err, res) => {
              if (err) {
                reject(err)
              }
                resolve(res)
        })
    })
  },
  //lihat data by title
  detailTitle: (title) => {
    return new Promise((resolve, reject) => {
        db.query(`select * from recipes where title='${title}'`, (err, res) => {
            if(err){
                reject(err);
            }
            resolve(res);
        })
    })
  },
}

module.exports = recipeModel