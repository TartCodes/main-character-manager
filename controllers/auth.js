// const { render } = require('ejs') no idea where this came from
const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')

//my google signup



exports.getCharacter = (req, res) => {
  if (req.user) {
    console.log(req.user);
    return res.redirect('/character');
  }
  res.render('index.ejs', {
    title: 'Login',
  });
};

exports.getGoogleLogin = passport.authenticate('google', {scope: ['profile'] }) //def double check this

exports.googleCallback = passport.authenticate('google', { failureRedirect: '/'}), 
    (req,res) => {
    res.redirect('/character')
    }


exports.logout = (req, res, next) => {
  req.logout(err => {
    if (err) {
       return next(err); 
  }
    res.redirect('/');
  });
};




//leons code and signup

//  exports.getLogin = (req, res) => {
//     if (req.user) {
//       return res.redirect('/character')
//     }
//     res.render('login', {
//       title: 'Login'
//     })
//   }
  
//   exports.postLogin = (req, res, next) => {
//     const validationErrors = []
//     if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
//     if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'Password cannot be blank.' })
  
//     if (validationErrors.length) {
//       req.flash('errors', validationErrors)
//       return res.redirect('/login')
//     }
//     req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })
  
//     passport.authenticate('local', (err, user, info) => {
//       if (err) { return next(err) }
//       if (!user) {
//         req.flash('errors', info)
//         return res.redirect('/login')
//       }
//       req.logIn(user, (err) => {
//         if (err) { return next(err) }
//         req.flash('success', { msg: 'Success! You are logged in.' })
//         res.redirect(req.session.returnTo || '/character')
//       })
//     })(req, res, next)
//   }
  
//   exports.logout = (req, res) => {
//     req.logout(() => {
//       console.log('User has logged out.')
//     })
//     req.session.destroy((err) => {
//       if (err) console.log('Error : Failed to destroy the session during logout.', err)
//       req.user = null
//       res.redirect('/')
//     })
//   }
  
//   exports.getSignup = (req, res) => {
//     if (req.user) {
//       return res.redirect('/')
//     }
//     res.render('login', {
//       title: 'Create Account'
//     })
//   }
  
//   exports.postSignup = (req, res, next) => {
//     const validationErrors = []
//     if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
//     if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' })
//     if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })
  
//     if (validationErrors.length) {
//       req.flash('errors', validationErrors)
//       return res.redirect('../login')
//     }
//     req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })
  
//     const user = new User({
//       userName: req.body.userName,
//       email: req.body.email,
//       password: req.body.password
//     })
  
//     User.findOne({$or: [
//       {email: req.body.email},
//       {userName: req.body.userName}
//     ]}, (err, existingUser) => {
//       if (err) { return next(err) }
//       if (existingUser) {
//         req.flash('errors', { msg: 'Account with that email address or username already exists.' })
//         return res.redirect('../login')
//       }
//       user.save((err) => {
//         if (err) { return next(err) }
//         req.logIn(user, (err) => {
//           if (err) {
//             return next(err)
//           }
//           res.redirect('/character')
//         })
//       })
//     })
//   }