const express = require('express')
const router = express.Router()
const weaponController = require('../controllers/Weapon') 
const { ensureAuth } = require('../middleware/auth')
const mongoose = require('mongoose')

router.post('/createWeapon/:id', ensureAuth, weaponController.createWeapon)









module.exports = router