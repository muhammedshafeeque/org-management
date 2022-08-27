const express=require('express')
const { giveResponse } = require('../Controllers/ApiController')
const router=express.Router()
router.get('/getapi',giveResponse)

module.exports=router