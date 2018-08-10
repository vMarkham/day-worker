const router = require('express').Router()
const { helpWanted , tokenCtrl } = require('../ctrl')

router.get('/', helpWanted.all)
router.get('/:id', helpWanted.one)
router.post('/new', helpWanted.create)
router.patch('/:id', helpWanted.update)
router.delete('/:id', helpWanted.destroy)


module.exports = router
