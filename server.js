const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const methodOverride = require('method-override')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const characterRoutes = require('./routes/character')
const authRoute = require('./routes/auth')

//helpers
//helper function? for data and time
app.locals.dateAndTime = () => {
  let date = new Date(); 
  let options = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  
  }; 
  return date.toLocaleTimeString("en-us", options)
}




//hopefully loop 
app.locals.loopValues = () => {
  let inputValues = document.getElementById('inputValues').value    //not right need to figure this out
  return inputValues  
}
 


//load config
require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()


//body parser
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

//Use forms for put / delete
app.use(methodOverride("_method"));

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI,}),
  })
)
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use(function(req, res, next) {
  res.locals.user = req.user || null
  next()
})
  
//routes
app.use('/', mainRoutes)
app.use('/character', characterRoutes)
app.use('/auth', authRoute )
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    