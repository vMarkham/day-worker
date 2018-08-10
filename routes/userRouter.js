const router = require('express').Router()
const { users , tokenCtrl } = require('../ctrl')

router.post('/login', tokenCtrl.checkPass, tokenCtrl.makeToken)
router.get('/:id', users.one)
router.post('/new', users.checkUser, users.availableCred, users.create)


router.patch('/:id', users.update)
router.delete('/:id', users.destroy)


module.exports = router
