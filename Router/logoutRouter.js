const express=require('express')

const router=express.Router()

const {logoutGet}=require('../program controller/controller')

router.route("/")
.get(logoutGet)

module.exports=router

