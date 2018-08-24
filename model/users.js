const Model = require('./model.js')(`users`)
const db = require('../database/connection.js')


class usersModel extends Model {
  constructor(){
    super()
  }

  static userName(email){
    return db('users')
      .where({ email })
      .first()
  }

  static getUserByEmail(email){
    return db('users')
      .where({ email })
      .first()
  } 

  static getUserByUsername(username) {
    return db('users')
      .where({ username })
      .first()
  }

}


module.exports= usersModel
