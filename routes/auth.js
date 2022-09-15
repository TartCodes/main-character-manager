const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require('../controllers/auth')

//google user
router.get('/google', authController.authUser)
//google callback
router.get('/google/callback', authController.authCallback)
//logout
router.get('/logout', authController.logout)


module.exports = router;