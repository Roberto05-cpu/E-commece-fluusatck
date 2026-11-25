const express = require('express')
const { createUserController, loginUserController, getProfileController } = require('../controllers/userController')
const { authMiddleware } = require('../middlewares/authMiddlewares')

const router = express.Router()

router.post('/register', createUserController)

router.post('/login', loginUserController)

router.get('/getprofile', authMiddleware, getProfileController)

module.exports = router