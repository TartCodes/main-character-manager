const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ancestry: {  //left side bar        
       type: String,           
    },
    heritage: {
        type: String,
    },
    background: {
        type: String,
    },
    ancestryAbility: {
        type: String,
    },
    class: {
        type: String,
    },
    backgroundAbility: {   //textarea test
        type: String,
    },
    deity: {
        type: String,
    },
    acrobatics: { //skills
        type: Number
    },
    arcana: {
        type: Number
    },
    athletics: {
        type: Number
    },
    crafting: {
        type: Number
    },
    deception: {
        type: Number
    },
    diplomacy: {
        type: Number
    },
    intimidation: {
        type: Number
    },
    firstLore:{
        type: String
    },
    firstLoreB:{
        type: Number
    },
    secondLore:{
        type: String
    },
    secondLoreB:{
        type: Number
    },
    medicine:{
        type: Number
    },
    nature:{
        type: Number
    },
    occultism:{
        type: Number
    },
    performance:{
        type: Number
    },
    religion:{
        type: Number
    },
    society:{
        type: Number
    },
    stealth:{
        type: Number
    },
    survival:{
        type: Number
    },
    thievery:{
        type: Number
    },     
    // levels     
    levelOne:{
        type: String
    },    
    levelTwo:{
        type: String
    },
    levelThree:{
        type: String
    },
    levelFour:{
        type: String
    },
    levelFive:{
        type: String
    },
    levelSix:{
        type: String
    },
    levelSeven:{
        type: String
    },
    levelEight:{
        type: String
    },
    levelNine:{
        type: String
    },
    levelTen:{
        type: String
    },
    levelEleven:{
        type: String
    },
    levelTwelve:{
        type: String
    },
    levelThirteen:{
        type: String
    },
    levelFourteen:{
        type: String
    },
    levelFifteen:{
        type: String
    },
    levelSixteen:{
        type: String
    },
    levelSeventeen:{
        type: String
    },
    levelEighteen:{
        type: String
    },
    levelNineteen:{
        type: String
    },
    levelTwenty:{
        type: String,      
    },   
    //main container 
    charName:{
        type: String,
    },
    playerName:{
        type: String,
    },
    level:{
        type: String
    },
    xp:{
        type: String
    },  
                    //checkbox 
    heroCheck:{
        type: Array        
    },
    size:{
        type: String, //drop down
        
    },
    alignment:{
        type: String //drop down
    },
    traits:{
        type: String //textarea
    },
    hp:{
        type: Number
    },
    currentHP:{
        type: Number
    },
    tempHP:{
        type: Number
    },
                // dying checkbox
    dyingCheck:{
        type: Array
    },                
    //      wounded check
    woundedCheck:{
        type: Array
    },
    totalStr:{          //main stats
        type: Number
    },
    strMod:{
        type: Number
    },
    totalDex:{
        type: Number
    },
    dexMod:{
        type: Number
    },
    totalCon:{
        type: Number
    },
    conMod:{
        type: Number
    },
    totalInt:{
        type: Number
    },
    intMod:{
        type: Number
    },
    totalWis:{
        type: Number
    },
    widMod:{
        type: Number
    },
    totalCha:{
        type: Number
    },
    chaMod:{
        type: Number
    },
    resistsImmunities:{
        type: String //textarea
    },
    conditions:{
        type: String //textarea
    },
    fortSave:{                //saving throws
        type: Number
    },
    fortMod:{
        type: Number
    },
    fortProf:{
        type: Number
    },
    fortItem:{
        type: Number
    },
    //checkbox for fort save prof
    fortCheck:{
        type: Array
    },
    reflexSave:{
        type: Number
    },
    reflexMod:{
        type: Number
    },
    reflexProf:{
        type: Number
    },
    reflexItem:{
        type: Number
    },
    //checkbox for reflex prof
    reflexCheck:{
        type: Array
    },
    willSave:{
        type: Number
    },
    willMod:{
        type: Number
    },
    willProf:{
        type: Number
    },
    willItem:{
        type: Number
    },
    //checkbox for will
    willCheck:{
        type: Array
    },
    //ac info
    totalAC:{
        type: Number
    },
    acDexBonus:{
        type: Number
    },
    acCap:{
        type: Number
    },
    //checkbox for prof in ac
    acProfCheck:{
        type: Array
    },
    acItemBonus: {
        type: Number
    },
    // all the checkboxes for armor training
    unarmoredCheck:{
        type: Array
    },
    lightArmorCheck:{
        type: Array
    },
    mediumArmorCheck:{
        type: Array
    },
    heavyArmorCheck:{
        type: Array
    },
                   //shield info
    shieldAC:{
        type: Number
    },
    hardness:{
        type: Number
    },
    shieldHP:{
        type: Number
    },
    shieldBreak:{
        type: Number
    },
    shieldCurrentHP:{
        type: Number
    },
                //class DC info
    classDC:{
        type: Number
    },
    classKey:{
        type: Number
    },
    classDCProf:{
        type: Number
    },
    //class dc checkboxes
    classDcCheck:{
        type: Array
    },
    classDCItem:{
        type: Number
    },
                    //perception
    perception:{
        type: Number
    },
    wisBonus:{
        type: Number
    },
    perceptionProf:{
        type: Number
    },
            //perception prof checkboxes
    perceptionCheck:{
        type: Array
    },        
    senses:{
        type: String //textarea
    },   
    unarmedCheck:{
        type: Array
    },
    simpleCheck:{
        type: Array
    },
    martialCheck:{
        type: Array
    },
    advancedCheck:{
        type: Array
    },
    meleeWeaponName:{
        type: String
    },
    meleeWeaponNameTwo:{
        type: String
    },
    attackDie:{
        type: Number
    },
    attackDieTwo:{
        type: Number
    },
    damageDie:{
        type: Number
    },
    damageDieTwo:{
        type: Number
    },
    damageTypeWeapon:{
        type: String //dropdown
    },
    damageTypeWeaponTwo:{
        type: String //dropdown
    },
    weaponProfType:{
        type: String // dropdown
    },
    weaponProfTypeTwo:{
        type: String // dropdown
    },
    weaponDmgType:{
        type: String // dropdown
    },
    weaponDmgTypeTwo:{
        type: String // dropdown
    },
    otherTraits:{
        type: String //textarea
    },
    otherTraitsTwo:{
        type: String //textarea
    },
    meleeNotes: {
        type: String //textarea
    },
    rangeWeaponName:{
        type: String
    },
    rangeWeaponNameTwo:{
        type: String
    },
    rangeAtkDie:{
        type: Number
    },
    rangeAtkDieTwo:{
        type: Number
    },
    rangeDmgDie:{
        type: Number
    },
    rangeDmgDieTwo:{
        type: Number
    },
    rangeDmgType:{
        type: String //dropdown
    },
    rangeDmgTypeTwo:{
        type: String //dropdown
    },
    rangeProfType:{
        type: String //dropdown
    },
    rangeProfTypeTwo:{
        type: String //dropdown
    },
    weaponRange:{
        type: Number
    },
    weaponRangeTwo:{
        type: Number
    },
    rangeReload:{
        type: Number
    },
    rangeReloadTwo:{
        type: Number
    },
    rangeTraits:{
        type: String //textarea
    },
    rangeTraitsTwo:{
        type: String //textarea
    },
    rangeNotes:{
        type: String //textarea
    }            
})

module.exports = mongoose.model('Character', CharacterSchema)