const Model = require('./model.js')(`users`)
const db = require('../database/connection.js')

class usersModel extends Model {
  constructor(){
    super()
  }

  static userName(email){
    return db('users').where({ email })
    .then(result=>result[0])
  }

  static getUserByEmail(email){
    return db('users')
      .where({ email })
      .first()
      .then(user => {
        if (user.email === email) throw new Error('emailTaken')
        return user
      })
  }

  static getUserByUsername(username) {
    return db('users')
      .where({ username })
      .first()
      .then(user => {
        if (user.username === username) throw new Error('usernameTaken')
        return user
      })
  }

}

module.exports= usersModel
