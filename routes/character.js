const express = require('express')
const router = express.Router()
const charController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, charController.getTodos)

router.post('/createTodo', charController.createTodo)

router.put('/markComplete', charController.markComplete)

router.put('/markIncomplete', charController.markIncomplete)

router.delete('/deleteTodo', charController.deleteTodo) 

module.exports = router

//changed todosController to charController