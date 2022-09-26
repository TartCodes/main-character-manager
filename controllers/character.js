const Character = require('../models/Character')
const validator = require('validator')
const mongoose = require('mongoose')
const Weapon = require('../models/Weapon')
//leons code at the bottom
// if( !mongoose.Types.ObjectId.isValid({_id}) ) return false;

module.exports = {
    checkCharacter: async (req, res) => {
        try {       
        const character = await Character.findOne({id:req.params.id}).lean() 
        if(!character){            
            res.redirect('/character/blank')
            console.log('blank character page rendered');
        } else {
            res.redirect(`/character/edit/${req.params.id}`)
            }      
        } catch (err) {
          console.log(err);
        }
      },  
    blankCharacter: async (req, res) => {
        try {       
            const character = await Character.findOne({id:req.params.id}).lean() //write an if/else as a fallback if someone types in /blank in url to redirect
            res.render("blankCharacter.ejs")
            console.log('blank character page rendered');          
        } catch (err) {
          console.log(err);
        }
      },  
    createCharacter: async (req, res) => {          //POST        
        try {
            req.body.user = req.user.id   
            await Character.create(req.body)
            console.log('character was posted')
            res.redirect(`/character/edit/${req.params.id}`) 
        } catch (err) {
            console.error(err);            
        }
    },
    editCharacter: async (req, res) => { // Main Character Page
        try {       
        const character = await Character.findOne({user:req.user.id}).lean() //id:req.user.id
        const weapon = await Weapon.findOne({user:req.user.id}).lean()

        if(!character){
            res.redirect('/character/blank')
        } else {   
            res.render('editCharacter.ejs',{ character: character, user: req.user, weapon: weapon }) 
            console.log('character page rendered');
        }         
        } catch (err) {
          console.log(err);
        }
      },
    updateCharacter:  async (req, res) => {  //PUT
        try{                               
           let locateCharacter = await Character.findById(req.params.id)           
           if(!locateCharacter) {            
            return res.redirect('/character/blank')               
           } else {
                locateCharacter = await Character.findOneAndUpdate({_id: req.params.id}, req.body, {
                    new: true,
                    runValidators: true
                })
                res.redirect(`/character/edit/${req.params.id}`)
           }

        }   catch(err){
            console.log(err)
            }
        }
    }














// module.exports = {
//     getCharacter: async (req,res) => {
//         // console.log(req.user)
//         try{         
//             const character = await Character.findById({_id:req.body.id})
//             const charOwner = character.user.id
//             console.log(charOwner, 'charrrr owner')
//             if(!character){
//                 res.render('character.ejs')
//             } else {                             
//                 res.render('character.ejs', {characterData: character, user: charOwner}) 
//          }   
//         }   catch(err){
//             console.log(err)
//         }
//     },
//     postCharacter: async (req, res) => {
//         console.log(req.body, req.user, 'post character');   
//         try {
//             req.body.user = req.user.id   
//             await Character.create(req.body)
//             res.redirect('/character')
//         } catch (err) {
//             console.error(err);            
//         }
//     },    
    // editCharacter: async (req, res) => {
    //     try{                               
    //        let locateCharacter = await Character.findById(req.params.id)
    //        if(!locateCharacter) {
    //         console.log(!locateCharacter, 'locate')
    //         return res.render(err)
               
    //        } else {
    //             locateCharacter = await Character.findOneAndUpdate({id: req.params.id}, req.body, {
    //                 new: true,
    //                 runValidators: true
    //             })
    //             res.redirect(`/character/${req.params.id}`)
    //        }

    //     }   catch(err){
    //         console.log(err)
    //         }
        // },
    // }

















// module.exports = {
//     getTodos: async (req,res)=>{
//         console.log(req.user)
//         try{
//             const todoItems = await Todo.find({userId:req.user.id})
//             const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
//             res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
//         }catch(err){
//             console.log(err)
//         }
//     },
//     createTodo: async (req, res)=>{
//         try{
//             await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
//             console.log('Todo has been added!')
//             res.redirect('/todos')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     markComplete: async (req, res)=>{
//         try{
//             await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//                 completed: true
//             })
//             console.log('Marked Complete')
//             res.json('Marked Complete')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     markIncomplete: async (req, res)=>{
//         try{
//             await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//                 completed: false
//             })
//             console.log('Marked Incomplete')
//             res.json('Marked Incomplete')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     deleteTodo: async (req, res)=>{
//         console.log(req.body.todoIdFromJSFile)
//         try{
//             await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
//             console.log('Deleted Todo')
//             res.json('Deleted It')
//         }catch(err){
//             console.log(err)
//         }
//     }
// }    