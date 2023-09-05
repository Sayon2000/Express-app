const path = require('path')

const express = require('express')
const router = express.Router()

const rootDir = require('../util/path')

router.get('/add-product',(req,res,next)=>{
    console.log("in another middleware")
    const fileName = path.join(rootDir, 'web_pages' , 'form.html')
    
    console.log(rootDir , __dirname)
    return res.sendFile(fileName,  function (err) {
        if (err) {
            next(err);
        } 

})
})

router.post('/add-product' , (req,res)=>{

    console.log(req.body.title)
    console.log(req.body.size)
    return res.redirect('/shop')
})

module.exports = router