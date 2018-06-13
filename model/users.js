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

}

module.exports= usersModel
