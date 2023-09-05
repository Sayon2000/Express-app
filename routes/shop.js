const path = require('path')

const express = require('express')
const router = express.Router()
const rootDir = require('../util/path')



router.get('/',(req,res,next)=>{
    console.log("in another middleware")
    const fileName = path.join( rootDir,'web_pages' , 'shop.html')
    res.sendFile(fileName)

})
router.get('/contact',(req,res,next)=>{
    console.log("in another middleware")
    const fileName = path.join(__dirname , '../','web_pages' , 'ContactUs.html')
    res.sendFile(fileName)

})

module.exports = router
