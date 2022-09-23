const express = require('express')
const router = express.Router()
const charController = require('../controllers/character') 
const { ensureAuth } = require('../middleware/auth')
const mongoose = require('mongoose')


//@desc Main Character Page
//@route GET /character

// all of these routes start with localhost:xxxx/character/

router.get('/', ensureAuth, charController.checkCharacter) // GET localhost:xxxx/character => controllers, if/else => redirect('/edit || /blank')
router.get('/blank', ensureAuth, charController.blankCharacter) // GET localhost:xxxx/character/blank => in controllers, res.render blankCharacter.ejs.
router.get('/edit/:id', ensureAuth, charController.editCharacter) // GET localhost:xxxx/character/edit => in controllers, res.render editCharacter.ejs.  Pass in character: character
router.post('/createCharacter/:id', ensureAuth, charController.createCharacter) // match the route on the form sub
router.put('/edit/:id', charController.updateCharacter)
router.get('/:id', ensureAuth, charController.checkCharacter)
// router.get('/', ensureAuth, charController.getCharacter) 

module.exports = router

// User signs in -> directed to /character (here: '/')
// '/' directs to checkForCharacter if/else. If no character, redirect to /character/new. If yes char, redirect to /character/edit
// need GET routes in here for '/new' and '/edit'.  /new loads view newCharacter.ejs, /edit loads editCharacter.ejs

// Needs: GET: '/', '/new', '/edit'