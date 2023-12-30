
const express=require('express')
const fs=require('fs')
const router=express.Router()
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegex =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

const userarray=[]


const {signupGet,SignupPost, signupPost}=require('../program controller/controller')

router.route('/')

.get(signupGet)

.post(signupPost)


module.exports = router