const express=require('express')

const app= express()
const path=require('path')
const session=require('express-session')
const nocache = require("nocache");
const dotenv=require('dotenv').config()
const port= process.env.port || 7000
const loginRouter= require('./Router/loginRouter')
const signupRouter=require('./Router/signupRouter')
const homeRouter=require('./Router/homeRouter')
const logoutRouter=require('./Router/logoutRouter')
const secretkey=process.env.secret 



app.use(session({
    secret: secretkey,
    resave: true,
    saveUninitialized: true
  }));
app.use(express.urlencoded({extended:true}))
app.use(nocache())
app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views','views')


app.use('/',loginRouter)
app.use('/signup',signupRouter)
app.use('/home',homeRouter)
app.use('/logout',logoutRouter)







app.listen(port,()=>{console.log(`server is listening at ${port}`)})

