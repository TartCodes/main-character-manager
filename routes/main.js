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

//get character page?
// router.get('/', ensureAuth, authController.getCharacter)

//my code
router.get('/auth/google', authController.getGoogleLogin)

//figure out how to clean this
router.get('/auth/google/callback', authController.googleCallback) //auth/google/callback something is wrong here


router.get('/logout', authController.logout)

module.exports = router