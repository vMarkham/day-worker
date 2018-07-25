const jwt = require('jsonwebtoken')
const SECRET_KEY = "Day_Trader"
const bcrypt = require('bcryptjs')
const ctrl = require('./ctrl.js')(`users`)
const { usersModel } = require('../model')

class tokenCtrl extends ctrl {
  constructor(){
    super()
  }

  static makeToken ( req, res, next ) {
    const { name } = req.userData
    const token = jwt.sign({name}, SECRET_KEY, { expiresIn: '10h' })
    console.log('this is the token', token);
    // req.newToken = token
    res.status(200).json({token})
  }

  static checkToken( req, res, next){
    const { token } = req.headers
    jwt.verify(token, SECRET_KEY, (err, decode)=>{
      err ? res.status(400).json({message:"Bad Token", err}) : req.decode = decode
    })
    // console.log("checking if it got decoded", req.decode)
    next()
  }

  static checkPass(req, res, next) {
    console.log(req.body, "here")
    const { password, email } = req.body
    usersModel.userName(email)

    .then(result=>{
      console.log(result, "result");
      const hashPass = result.password
      req.userData = result

      bcrypt.compare( password, hashPass, (err, work)=>{
        console.log(err, work, "check it out");
        work ? next() : res.status(401).json({message:"Bad Password"})
      })
    })
  }

  static verifyToken(req, res, next){
    const { token } = req.headers
    jwt.verify(token, SECRET_KEY, (err, decode)=>{
      err ? res.status(400).json({message:"Bad Token", err}) : res.status(200).json({ token:decode })
    })
  }

  static isAdmin(req, res, next){
    req.decode.admin ? next() : res.status(401).json({message:'Need to be an admin to do that'})
  }
}


module.exports = tokenCtrl
