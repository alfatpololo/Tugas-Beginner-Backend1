const db = require('../config/db')

const userModel = {
  // router list
  list: (limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`, (err, res) => {
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
      db.query(`SELECT * FROM users WHERE id=${id}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // router insert
  store: (id, username, password, email, phone) => {
    return new Promise((resolve, reject) => {
      db.query(`
            INSERT INTO users (id, username, password, email, phone)
            VALUES
            (${id}, '${username}', '${password}', '${email}', '${phone}')
            `, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // router edit/update
  update: (id, password) => {
    return new Promise ((resolve, reject) => {
      db.query(`
            UPDATE users set password = '${password}' WHERE id = ${id}
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
            DELETE FROM users where id=${id}
            `, (err, res) => {
              if (err) {
                reject(err)
              }
                resolve(res)
        })
    })
  }
}

module.exports = userModel
