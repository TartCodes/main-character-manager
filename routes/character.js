const express = require('express')
const router = express.Router()
const charController = require('../controllers/character') 
const { ensureAuth } = require('../middleware/auth')
const mongoose = require('mongoose')


//@desc Main Character Page
//@route GET /character

router.get('/', ensureAuth, charController.getCharacter)
router.post('/', ensureAuth, charController.postCharacter)
router.put('/updateCharacter/:id', charController.updateCharacter)
router.get('/:id', ensureAuth, charController.getCharacter)
// router.get('/', ensureAuth, charController.getCharacter) 

module.exports = router

