const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get('/google', passport.authenticate('google', {scope: ['profile'] }))

// router.get('/google', authController.getGoogleLogin)
//cant get these work with exports, will come back laterrrrr
// router.get('/google/callback', authController.googleCallback) 

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), 
(req,res) => {
    res.redirect('/character')
    }
)



module.exports = router;