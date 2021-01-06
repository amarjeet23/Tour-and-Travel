
const express = require('express')
const router = express.Router()
const tourController = require('../controllers/tourController')
const Auth = require('../middleware/authorization')

router.get('/',Auth.isLoggedIn,tourController.getAlltours)
router.get('/:id',Auth.isLoggedIn,tourController.gettour)
router.post('/',Auth.isLoggedIn,tourController.createtour)
router.patch('/:id',Auth.isLoggedIn,tourController.updatetour)
router.delete('/:id',Auth.isLoggedIn,tourController.deletetour)



// param As a Custom middleware

// router.param('/:id',tourController.gettourId)



module.exports = router