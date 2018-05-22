const ctrl = require('./ctrl.js')(`users`)
const usersModel = require('../model/users.js')

class users extends ctrl{
  constructor(){
    super()
  }

  static checkUser(req, res, next){
    const { name, username, password, org} = req.body
    !name ? res.status(400).json({message: "Please supply a name"}) : null
    !username ? res.status(400).json({message: "Please supply a username"}) : null
    !password ? res.status(400).json({message: "Please supply a password"}) : null
    !org ? res.status(400).json({message: "Please supply a orginization"}) : null
    next()
  }

}




module.exports = users
