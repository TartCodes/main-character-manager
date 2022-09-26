const mongoose = require('mongoose')

const WeaponSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    meleeWeaponName:{
        type: String
    },
    attackDie:{
        type: Number
    },
    damageDie:{
        type: Number
    },
    damageTypeWeapon:{
        type: String //dropdown
    },
    weaponProfType:{
        type: String // dropdown
    },
    weaponDmgType:{
        type: String // dropdown
    },
    otherTraits:{
        type: String //textarea
    },
    rangeWeaponName:{
        type: String
    },
    rangeAtkDie:{
        type: Number
    },
    rangeDmgDie:{
        type: Number
    },
    rangeDmgType:{
        type: String //dropdown
    },
    rangeProfType:{
        type: String //dropdown
    },
    weaponRange:{
        type: Number
    },
    rangeReload:{
        type: Number
    },
    rangeTraits:{
        type: String //textarea
    }    
})

module.exports = mongoose.model('Weapon', WeaponSchema)