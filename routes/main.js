const express = require('express')
const passport = require('passport') //needed until i can move google/callback
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// router.get('/', homeController.getLogin)
// router.get('/login', authController.getLogin)
// router.post('/login', authController.postLogin)
// router.get('/logout', authController.logout)
// router.get('/signup', authController.getSignup)
// router.post('/signup', authController.postSignup)



// @desc Login/Landing page
// @route GET 

router.get('/', homeController.getIndex)


module.exports = router