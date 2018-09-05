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

    !name ? res.status(400).json({message: "Please supply a name"}) : null
    !username ? res.status(400).json({message: "Please supply a username"}) : null
    !password ? res.status(400).json({message: "Please supply a password"}) : null
    !zipcode ? res.status(400).json({message: "where are you looking for work?"}) : null
    !phone ? res.status(400).json({message: "How do we contact you?"}) : null
    !email ? res.status(400).json({message: "Please supply an Email"}) : null
    !user_type ? res.status(400).json({message: "Please supply a user type"}) : null
    next()
  }

  static checkWorker(req, res, next){
    const {
      name, username, email, password, zipcode, phone
    } = req.body.create

    !name ? res.status(400).json({message: "Please supply a name"}) : null
    !username ? res.status(400).json({message: "Please supply a username"}) : null
    !password ? res.status(400).json({message: "Please supply a password"}) : null
    !zipcode ? res.status(400).json({message: "where are you looking for work?"}) : null
    !phone ? res.status(400).json({message: "How do we contact you?"}) : null
    !email ? res.status(400).json({message: "Please supply an Email"}) : null
    !user_type ? res.status(400).json({message: "Please supply a user type"}) : null
    next()
  }

  static availableCred(req, res, next){
    usersModel.all().then(result=>{
      // console.log(result)
      let collection = {}
      result.forEach(user=>{
        if (user.username == req.body.create.username){
          console.log('username taken');
          collection.username = "taken"
          }
        if(user.email == req.body.create.email){
          console.log("bad email");
          collection.email="taken"
        }
      })
      return collection
    })
    .then(result=>{
      console.log(result, "after checks")
      if(result.email==="taken"){
        return res.status(400).json({message:"that email is taken"})
      }
      if(result.username==="taken"){
        return res.status(400).json({message:"that username is taken"})
      }
      else{
        console.log("Email and username not taken");
        next()
      }
    })
  }


}




module.exports = users
