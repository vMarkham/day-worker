const Model = require('./model.js')(`help_post`)
const db = require('../database/connection.js')

class helpWantedModel extends Model {
  constructor(){
    super()
  }

}

module.exports = helpWantedModel
