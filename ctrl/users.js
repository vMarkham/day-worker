const ctrl = require('./ctrl.js')(`users`)
const { usersModel } = require('../model')

class users extends ctrl{
  constructor(){
    super()
  } 

  static checkUser(req, res, next){
    const {
      name, username, email, password, zipcode, phone
    } = req.body.create

    if (!name) throw new Error ('registerNameWrong')
    if (!username) throw new Error ('registerUsernameWrong')
    if (!password) throw new Error ('registerPasswordWrong')
    if (!zipcode) throw new Error ('registerZipWrong')
    if (!phone) throw new Error ('registerPhoneWrong')
    if (!email) throw new Error ('registerEmailWrong')

    // !name ? res.status(400).json({message: 'Please supply a name'}) : null
    // !username ? res.status(400).json({message: 'Please supply a username'}) : null
    // !password ? res.status(400).json({message: 'Please supply a password'}) : null
    // !zipcode ? res.status(400).json({message: 'where are you looking for work?'}) : null
    // !phone ? res.status(400).json({message: 'How do we contact you?'}) : null
    // !email ? res.status(400).json({message: 'Please supply an Email'}) : null
    // next()
  }

  static availableCred(req, res, next){
    const { name, username, email, password, zipcode, phone } = req.body.create
    if (!name) throw new Error ('registerNameWrong')
    if (!username) throw new Error ('registerUsernameWrong')
    if (!password) throw new Error ('registerPasswordWrong')
    if (!zipcode) throw new Error ('registerZipWrong')
    if (!phone) throw new Error ('registerPhoneWrong')
    if (!email) throw new Error ('registerEmailWrong')
    usersModel.getUserByEmail(email)
      .then(() => usersModel.getUserByUsername(username))
      // .then(() => )
      .catch(err => next(err))

    // usersModel.all()
      //   .then(result=>{
      //     let collection = {}
      //     result.forEach(user=>{
      //       if (user.username == req.body.create.username){
      //         collection.username = 'taken'
      //         }
      //       if(user.email == req.body.create.email){
      //         collection.email='taken'
      //       }
      //     })
      //     return collection
      //   })
      // .then(result=>{
      //   console.log(result, 'after checks')
      //   if(result.email==='taken'){
      //     return res.status(400).json({message:'that email is taken'})
      //   }
      //   if(result.username==='taken'){
      //     return res.status(400).json({message:'that username is taken'})
      //   }
      //   else{
      //     console.log('Email and username not taken');
      //     next()
      //   }
      // })
  }


}




module.exports = users
