const express = require('express')
const router = express.Router()
const charController = require('../controllers/character') 
const { ensureAuth } = require('../middleware/auth')


//@desc Main Character Page
//@route GET /character
router.get('/', ensureAuth, charController.getCharacter) //???
router.post('/', ensureAuth, charController.postCharacter)




// router.post('/createTodo', charController.createTodo)

// router.put('/markComplete', charController.markComplete)

// router.put('/markIncomplete', charController.markIncomplete)

// router.delete('/deleteTodo', charController.deleteTodo) 

module.exports = router

//changed todosController to charController