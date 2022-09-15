const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require('../controllers/auth') 

// router.get('/google', passport.authenticate('google', {scope: ['profile'] }))



// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), 
// (req,res) => {
//     res.redirect('/character')
//     }
// )


router.get('/google', authController.authUser)


router.get('/google/callback', authController.authCallback)


module.exports = router;