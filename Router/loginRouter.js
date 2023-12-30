
const express =require('express')

const router=express.Router()

const fs=require('fs')

const filedata = JSON.parse(fs.readFileSync('signupstorage.json','utf-8'))


const {loginGet,loginPost }=require('../program controller/controller')



router.route('/')
.get(loginGet)


.post(loginPost)


module.exports=router