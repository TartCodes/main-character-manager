const Character = require('../models/Character')
const validator = require('validator')
//leons code at the bottom

module.exports = {
    getCharacter: async (req,res) => {
        // console.log(req.user)
        try{
            console.log(req.user.id, 'user id')
            const newCharacter = await Character.findById(req.user.id).lean()        
            if(newCharacter) { 
            console.log(newCharacter, 'newcharararar')                   
            res.render('character.ejs', {characterData: newCharacter, user: req.user})
            } else {
                res.render('character.ejs',{characterData: newCharacter, user: req.user})
            } 
            // console.log(!newCharacter, 'newwww')
            
        }   catch(err){
            console.log(err)
        }
    },
    postCharacter: async (req, res) => {
        console.log(req.body, req.user, 'post character');   
        try {
            req.body.user = req.user.id   
            await Character.create(req.body)
            res.redirect('/character')
        } catch (err) {
            console.error(err);
            res.render('errors/500') //need to readd error pages or delete this
        }
    },
    editCharacter: async (req, res) => {
        try{                               
           let locateCharacter = await Character.findById(req.params.id).lean()
           if(!locateCharacter) {
            console.log(!locateCharacter, 'locate')
            return res.render(err)
               
           } else {
                locateCharacter = await Character.findOneAndUpdate({_id: req.params.id}, req.body, {
                    new: true,
                    runValidators: true
                })
                res.redirect(`/character/${req.params.id}`)
           }

        }   catch(err){
            console.log(err)
            }
        },
    }

















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