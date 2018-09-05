const router = require('express').Router()
const { users , tokenCtrl } = require('../ctrl')


router.get('/:id', users.one)

router.post('/register', users.isValidUserCreate, users.availableCred, users.create)

router.post('/login', tokenCtrl.checkPass, tokenCtrl.makeToken)

router.patch('/:id', users.update)

router.delete('/:id', users.destroy)


//Proposed user worker profile routes:
// router.get('/profile/worker/:id', users.oneWorkerProfile)

// router.post("/profile/worker/:id", users.isValidWorkerProfileCreate, users.createWorkerProfile)

// router.patch('/profile/worker/:id', users.updateWorkerProfile)

//Proposed user reviewer profile routes:
// router.get('/profile/reviewer/:id', users.oneReviewerProfile)

// router.post("/profile/reviewer/:id", users.isValidReviewerProfileCreate, users.createReviewerProfile)

// router.patch('/profile/reviewer/:id', users.updateReviewerProfile)

module.exports = router
