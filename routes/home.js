const path = require('path')

const express = require('express')
const router = express.Router()

const rootDir = require('../util/path')

router.post('/success' , (req,res)=>{


    res.sendFile(path.join(rootDir , 'web_pages' , 'success.html'))
})


module.exports = router