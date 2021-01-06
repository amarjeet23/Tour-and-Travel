const express = require('express')

const router = express.Router()
const userController = require("../controllers/userController")
const authController = require("../controllers/authController")


// route for user
router.post('/signup',authController.signup)
router.post('/login',authController.login)



router.get('/',userController.getAllusers)
router.get('/:id',userController.getuser)
router.post('/',userController.createUser)
router.patch('/:id',userController.updateUser)
router.delete('/:id',userController.deleteUser)

module.exports = router