const Model = require('./model.js')(`users`)
const db = require('../database/connection.js')

class usersModel extends Model {
  constructor(){
    super()
  }

  static userName(username){
    return db('users').where({username}).then(result=>result[0])
  }

}

module.exports= usersModel
