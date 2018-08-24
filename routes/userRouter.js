const router = require('express').Router()
const { users , tokenCtrl } = require('../ctrl')


router.get('/:id', users.one)

router.post('/register', users.isValidUserCreate, users.availableCred, users.create)

router.post('/login', tokenCtrl.checkPass, tokenCtrl.makeToken)

router.patch('/:id', users.update)

router.delete('/:id', users.destroy)


module.exports = router
 