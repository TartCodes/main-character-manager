const express = require('express')
const router = express.Router()
const charController = require('../controllers/character') 
const { ensureAuth } = require('../middleware/auth')


//@desc Main Character Page
//@route GET /character
router.get('/', ensureAuth, charController.getCharacter) 
router.post('/', ensureAuth, charController.postCharacter)
router.get('/:id', ensureAuth, charController.getCharacter)
router.put('/editCharacter/:id', charController.editCharacter)





module.exports = router

