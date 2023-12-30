const express=require ('express')
const fs=require('fs')

const router=express.Router()

const fileData = JSON.parse(fs.readFileSync('signupstorage.json','utf-8'))


router.route('/')
.get((req,res)=>{
res.render('home',{Data:fileData})
})


module.exports = router

