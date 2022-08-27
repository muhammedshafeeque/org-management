const express=require('express')
const { verifyUser } = require('../Middlewares/AuthMiddleWare')
const router=express.Router()
const AuthRouter=require('./AuthRouter')
const APIRouter=require('./Api')
router.use('/auth',AuthRouter)
router.use('/api',verifyUser,APIRouter)
module.exports=router