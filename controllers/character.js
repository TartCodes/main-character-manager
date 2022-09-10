const Character = require('../models/Character')
//leons code at the bottom


module.exports = {
    getCharacter: async (req,res)=>{
        // console.log(req.user)
        try{
            const newCharacter = await Character.find({userId:req.user.id})                     
            res.render('character.ejs', {characterData: newCharacter, user: req.user}) // 
            // console.log(newCharacter[newCharacter.length-1], 'newwww')  //needs to be fixed to encompass everything
        }   catch(err){
            console.log(err)
        }
    },
    postCharacter: async (req, res) => {
        console.log(req.body, req.user);
        try {
            req.body.user = req.user.id    //not sure about this 
            await Character.create(req.body)
            res.redirect('/character')
        } catch (err) {
            console.error(err);
            res.render('errors/500')
        }
    },
    updateCharacter: async (req, res) => {
        try {
            await Character.findOneAndUpdate(
              { _id: req.params.id }                          
            );            
            res.redirect(`/character/${req.params.id}`);
          } catch (err) {
            console.log(err);
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