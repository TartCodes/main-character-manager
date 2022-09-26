const Weapon = require('../models/Weapon')
const mongoose = require('mongoose')

module.exports = {
createWeapon: async (req, res) => {          //POST        
    try {
        req.body.user = req.user.id   
        await Weapon.create(req.body)
        console.log('weapon was added')
        res.redirect(`/character/edit/${req.params.id}`) 
    } catch (err) {
        console.error(err);            
        }
    },
    
}