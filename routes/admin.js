const path = require('path')

const express = require('express')
const router = express.Router()

router.get('/add-product',(req,res,next)=>{
    console.log("in another middleware")
    const fileName ='form.html'
    const options = {
        root: path.join(__dirname , '../web_pages/')
    };
 
    return res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } 

})
})

router.post('/product' , (req,res)=>{

    console.log(req.body.title)
    console.log(req.body.size)
    return res.redirect('/shop')
})

module.exports = router