const router = require('express').Router()
const { users , tokenCtrl} = require('../ctrl')


// router.get()
router.post("/new/user", users.checkUser, users.create)
// router.patch()
// router.delete()


module.exports = router
