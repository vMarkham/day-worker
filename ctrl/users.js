const ctrl = require('./ctrl.js')(`users`)
const { usersModel } = require('../model')


class users extends ctrl{
  constructor(){
    super()
  } 

  static isValidUserCreate (req, res, next) {
    const { name, username, email, password, zipcode, phone } = req.body.create
    if (!name || typeof name !== 'string') throw new Error ('registerNameWrong')
    if (!username || typeof username !== 'string') throw new Error ('registerUsernameWrong')
    if (!password || typeof password !== 'string') throw new Error ('registerPasswordWrong')
    if (!zipcode || typeof zipcode !== 'number') throw new Error ('registerZipWrong')
    if (!phone || typeof phone !== 'string') throw new Error ('registerPhoneWrong')
    if (!email || typeof email !== 'string') throw new Error ('registerEmailWrong')
    next()
  }

  static isValidUserPatch (req, res, next) {
    const { name, username, email, password, zipcode, phone } = req.body.create
    if (!name && !username && !email && !password && !zipcode && !phone) throw new Error('aFieldRequired')
    next()
  }

  static availableCred(req, res, next) {
    const { username, email } = req.body.create    
    usersModel.getUserByEmail(email)
      .then(user => {     
        if (user) throw new Error('emailTaken')        
        return usersModel.getUserByUsername(username)
      })
      .then(user => {    
        if (user) throw new Error('usernameTaken')        
        next()
      })
      .catch(err => next(err))
  }

}


module.exports = users
